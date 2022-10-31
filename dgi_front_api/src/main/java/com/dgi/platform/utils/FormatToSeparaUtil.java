package com.dgi.platform.utils;

import java.text.DecimalFormat;

import org.springframework.stereotype.Component;

@Component
public class FormatToSeparaUtil {

	public String formatToSepara(String data, int zeroNum) {
		DecimalFormat df = null;
		if(null==data || ""==data) {
			return "0";
		}
		switch(zeroNum) {
		case 0:
			df = new DecimalFormat("#,###");
			break;
		case 1:
			df = new DecimalFormat("#,###.0");
			break;
		case 2:
			df = new DecimalFormat("#,###.00");
			break;
		case 3:
			df = new DecimalFormat("#,###.000");
			break;
		case 4:
			df = new DecimalFormat("#,###.0000");
			break;
		default:
			throw new RuntimeException();
		}
		String newStr = df.format(Double.parseDouble(data));
		if(newStr.indexOf(".")>0){
			int delTimes = newStr.substring(newStr.indexOf(".")).length();
			for(int i=0; i<delTimes; i++) {
				boolean lastWordIsZero = ("0".equalsIgnoreCase(newStr.substring(newStr.length()-1)));
				boolean lastWordIsDot = (".".equalsIgnoreCase(newStr.substring(newStr.length()-1)));
				if(lastWordIsZero) {
					newStr = newStr.substring(0, newStr.length()-1);
				}else if(lastWordIsDot) {
					newStr = newStr.substring(0, newStr.length()-1);
				}else {
					break;
				}
			}
		}
		
        return newStr;
	}
}
