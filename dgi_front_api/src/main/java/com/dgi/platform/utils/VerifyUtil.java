package com.dgi.platform.utils;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class VerifyUtil {

	public static Map<String, Object> generateVerify(HttpServletRequest req, HttpServletResponse res) {

		// 圖片大小
		BufferedImage verifyPic = new BufferedImage(140, 60, BufferedImage.TYPE_3BYTE_BGR);

		Graphics2D g = verifyPic.createGraphics();

		String letters = "23456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		int verifyLength = 5;

		String verifyCode = "";

		for (int i = 0; i < verifyLength; i++) {
			verifyCode += (letters.charAt((int) Math.floor(new SecureRandom().nextDouble() * letters.length())));
		}

		g.setColor(Color.white);

		g.fillRect(0, 0, 140, 60);

		g.setFont(new Font("微軟雅黑", Font.BOLD, 24));

		for (int i = 0; i < verifyLength; i++) {
			double theta = new SecureRandom().nextDouble() * Math.PI / 4
					* ((int) (new SecureRandom().nextDouble() * 2) == 0 ? 1 : -1);
			g.rotate(theta, 24 + i * 22, 20);
			g.setColor(new Color((int) (new SecureRandom().nextDouble() * 256),
					(int) (new SecureRandom().nextDouble() * 256), (int) (new SecureRandom().nextDouble() * 256)));
			// 字元位置
			g.drawString(verifyCode.charAt(i) + "", 20 + i * 22, 30);
			g.rotate(-theta, 24 + i * 22, 20);
		}

		for (int i = 0; i < 5; i++) {
			g.setColor(new Color((int) (new SecureRandom().nextDouble() * 256),
					(int) (new SecureRandom().nextDouble() * 256), (int) (new SecureRandom().nextDouble() * 256)));
			g.drawLine((int) (new SecureRandom().nextDouble() * 140), (int) (new SecureRandom().nextDouble() * 60),
					(int) (new SecureRandom().nextDouble() * 140), (int) (new SecureRandom().nextDouble() * 60));
		}

		g.setColor(Color.black);
		g.drawRect(0, 0, 138, 58);

		Map<String, Object> data = new HashMap<String, Object>();
		data.put("verifyCode", verifyCode);
		data.put("verifyPic", verifyPic);

		return data;
	}

	public Map<Boolean, String> checkVerify(String verifyId, String verifyInput) {
		Map<Boolean, String> map = new HashMap<Boolean, String>();
		Optional<Object> verifyObj = Optional.ofNullable(GuavaCacheUtil.cache.getIfPresent(verifyId));
		if (!verifyObj.isPresent()) {
			map.put(false, "驗證碼已失效");
		} else {
			if (!verifyObj.get().toString().equalsIgnoreCase(verifyInput)) {
				map.put(false, "驗證碼輸入錯誤");
			}
		}

		if (!map.isEmpty())
			GuavaCacheUtil.cache.invalidate(verifyId);

		return map;
	}
}
