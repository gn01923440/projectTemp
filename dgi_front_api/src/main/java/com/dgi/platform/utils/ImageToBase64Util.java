package com.dgi.platform.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class ImageToBase64Util {
	/**
	 * 將圖片轉換成Base64編碼
	 * 
	 * @param imgFile 待處理圖片
	 * @return
	 * @throws IOException
	 * 
	 */
	public static String getImgStr(String imgFile) throws IOException {
		// 將圖片文件轉化為字節數組字符串，並對其進行Base64編碼處理
		InputStream in = null;
		byte[] data = null;
		// 讀取圖片字節數組
		try {
			in = new FileInputStream(imgFile);
			data = new byte[in.available()];
			in.read(data);
		} catch (IOException e) {
			log.error(ExceptionUtils.getMessage(e));
			throw new FileNotFoundException("查無照片檔案路徑");
		} finally {
			if (in != null)
				in.close();
		}
		return new String(Base64.encodeBase64(data));
	}

	/**
	 * 對字節數組字符串進行Base64解碼並生成圖片
	 * 
	 * @param imgStr      圖片數據
	 * @param imgFilePath 保存圖片全路徑地址
	 * @return
	 * @throws IOException
	 * 
	 */
	public static boolean generateImage(String imgStr, String imgFilePath) throws IOException {
		if (imgStr == null) // 圖像數據為空
			return false;

		OutputStream out = null;
		try {
			// Base64解碼
			byte[] b = Base64.decodeBase64(imgStr);
			for (int i = 0; i < b.length; ++i) {
				if (b[i] < 0) { // 調整異常數據
					b[i] += 256;
				}
			}
			// 生成jpeg圖片
			out = new FileOutputStream(imgFilePath);
			out.write(b);
			out.flush();
			return true;
		} catch (Exception e) {
			log.error(ExceptionUtils.getMessage(e));
			return false;
		} finally {
			if (out != null)
				out.close();
		}
	}
}