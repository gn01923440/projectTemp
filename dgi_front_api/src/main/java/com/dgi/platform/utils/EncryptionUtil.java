package com.dgi.platform.utils;

import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.security.Key;
import java.util.Arrays;

import javax.crypto.Cipher;
import javax.crypto.spec.GCMParameterSpec;

import org.springframework.stereotype.Component;

@Component
public class EncryptionUtil {

	private final String strDefaultKey = "!esE&cr#*ptPmnK)"; // only 16、25、32 length 

	private final String initVector = "en&E!ptiJOI*tV$c"; // only 16、25、32 length 
	
	private final String aad = "#$erfg4523#$%THFTGaa!";

	private final  GCMParameterSpec iv = new GCMParameterSpec(128, initVector.getBytes()); // 128、120、112、104、96

	/**
	 * 將byte陣列轉換為表示16進位制值的字串， 如：byte[]{8,18}轉換為：0813， 和public static byte[]
	 * hexStr2ByteArr(String strIn) 互為可逆的轉換過程
	 * 
	 * @param arrB
	 *            需要轉換的byte陣列
	 * @return 轉換後的字串
	 * @throws Exception本方法不處理任何異常，所有異常全部丟擲
	 */
	private String byteArr2HexStr(byte[] arrB) throws Exception {
		int iLen = arrB.length;
		// 每個byte用兩個字元才能表示，所以字串的長度是陣列長度的兩倍
		StringBuffer sb = new StringBuffer(iLen * 2);
		for (int i = 0; i < iLen; i++) {
			int intTmp = arrB[i];
			// 把負數轉換為正數
			while (intTmp < 0) {
				intTmp = intTmp + 256;
			}
			// 小於0F的數需要在前面補0
			if (intTmp < 16) {
				sb.append("0");
			}
			sb.append(Integer.toString(intTmp, 16));
		}
		return sb.toString();
	}

	/**
	 * 將表示16進位制值的字串轉換為byte陣列， 和public static String byteArr2HexStr(byte[] arrB)
	 * 互為可逆的轉換過程
	 * 
	 * @param strIn
	 *            需要轉換的字串
	 * @return 轉換後的byte陣列
	 */
	private byte[] hexStr2ByteArr(String strIn) throws Exception {
		byte[] arrB = strIn.getBytes();
		int iLen = arrB.length;
		// 兩個字元表示一個位元組，所以位元組陣列長度是字串長度除以2
		byte[] arrOut = new byte[iLen / 2];
		for (int i = 0; i < iLen; i = i + 2) {
			String strTmp = new String(arrB, i, 2);
			arrOut[i / 2] = (byte) Integer.parseInt(strTmp, 16);
		}
		return arrOut;
	}

	/**
	 * 加密位元組陣列
	 * 
	 * @param arrB
	 *            需加密的位元組陣列
	 * @return 加密後的位元組陣列
	 */
	private byte[] encrypt(byte[] arrB) throws Exception {
		Key key = new javax.crypto.spec.SecretKeySpec(strDefaultKey.getBytes("UTF-8"), "AES");
		Cipher encryptCipher = Cipher.getInstance("AES/GCM/NoPadding");
		encryptCipher.init(Cipher.ENCRYPT_MODE, key, iv);
		encryptCipher.updateAAD(aad.getBytes());
		
		return encryptCipher.doFinal(arrB);
	}

	/**
	 * 加密字串
	 * 
	 * @param strIn
	 *            需加密的字串
	 * @return 加密後的字串
	 */
	public String encrypt(String strIn) throws Exception {
		return byteArr2HexStr(encrypt(strIn.getBytes()));
	}

	/**
	 * 解密位元組陣列
	 * 
	 * @param arrB
	 *            需解密的位元組陣列
	 * @return 解密後的位元組陣列
	 */
	private byte[] decrypt(byte[] arrB) throws Exception {		
		Key key = new javax.crypto.spec.SecretKeySpec(strDefaultKey.getBytes("UTF-8"), "AES");
		Cipher decryptCipher = Cipher.getInstance("AES/GCM/NoPadding");
		decryptCipher.init(Cipher.DECRYPT_MODE, key, iv);
		decryptCipher.updateAAD(aad.getBytes());
		return decryptCipher.doFinal(arrB);
	}

	/**
	 * 解密字串
	 * 
	 * @param strIn
	 *            需解密的字串
	 * @return 解密後的字串
	 */
	public String decrypt(String strIn) throws Exception {
		ByteBuffer buffer = ByteBuffer.wrap(decrypt(hexStr2ByteArr(strIn)));
		CharBuffer charBuffer = Charset.forName("UTF-8").decode(buffer);
		char[] charArray = new char[charBuffer.remaining()];
	    charBuffer.get(charArray);
	    
	    StringBuffer sb = new StringBuffer();
	    for (int i = 0;i < charArray.length;i++){
	        sb.append(charArray[i]);
	    }
	    Arrays.fill(charArray, ' ');
	    if (sb.length()==0){
	    	 throw new Exception("decrypt error : "+ strIn) ;
	    }
	    return sb.toString();	    
	}

}
