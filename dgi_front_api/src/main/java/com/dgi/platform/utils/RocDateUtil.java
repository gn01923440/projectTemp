package com.dgi.platform.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ObjectUtils;

public class RocDateUtil {

	private static final Logger logger = LoggerFactory.getLogger(RocDateUtil.class);

	public RocDateUtil() throws ParseException {
		// 2022-02-14 09:17:49
		logger.debug(convertDateType(new Date(), "yyyy-MM-dd HH:mm:ss", "yyy-MM-dd HH:mm:ss").toString());
		logger.debug(convertDate("20220214", "yyyyMMdd", "yyyMMdd"));
		logger.debug(convertDate("20220214", "yyyyMMdd", "yyy/MM/dd"));
		logger.debug(convertDate("2022/02/14", "yyyy/MM/dd", "yyyMM"));
		logger.debug(convertDate("2022/02/14", "yyyy/MM/dd", "yyyMMdd"));
		logger.debug(convertDate("2022/02/14", "yyyy/MM/dd", "yyy/MM/dd"));
		logger.debug(convertDate("2022/02/14", "yyyy/MM/dd", "yyy-MM-dd"));
		logger.debug(convertDate("2022/02/14", "yyyy/MM/dd", "yy-MM-dd"));
		logger.debug(convertDate("111/02/14", "yyy/MM/dd", "yyyy/MM/dd"));
		logger.debug(convertDate("111-02-14", "yyy-MM-dd", "yyyy/MM/dd"));
		logger.debug(convertDate("民國 111 年 01 月 14 日", "民國 yyy 年 MM 月 dd 日", "西元 yyyy 年 MM 月 dd 日"));
		logger.debug(convertDate("西元 2022 年 01 月 14 日", "西元 yyyy 年 MM 月 dd 日", "民國 yyy 年 MM 月 dd 日"));
	}

	public static String convertDate(String adDate, String beforeFormat, String afterFormat) throws ParseException {// 轉年月格式
		if (StringUtils.isEmpty(adDate))
			return adDate;
		SimpleDateFormat df4 = new SimpleDateFormat(beforeFormat);
		SimpleDateFormat df2 = new SimpleDateFormat(afterFormat);
		Calendar cal = Calendar.getInstance();

		cal.setTime(df4.parse(adDate));
		if (cal.get(Calendar.YEAR) > 1492)
			cal.add(Calendar.YEAR, -1911);
		else
			cal.add(Calendar.YEAR, +1911);
		return df2.format(cal.getTime());
	}

	public static Date convertDateType(Date adDate, String beforeFormat, String afterFormat) throws ParseException {// 轉年月格式
		if (ObjectUtils.isEmpty(adDate))
			return adDate;
		SimpleDateFormat df4 = new SimpleDateFormat(beforeFormat);
		SimpleDateFormat df2 = new SimpleDateFormat(afterFormat);
		Calendar cal = Calendar.getInstance();

		cal.setTime(df4.parse(df4.format(adDate)));
		if (cal.get(Calendar.YEAR) > 1492)
			cal.add(Calendar.YEAR, -1911);
		else
			cal.add(Calendar.YEAR, +1911);

		return df2.parse(df2.format(cal.getTime()));
	}

	// GMT+8並轉年月格式
	public static Date convertTwDateType(Date adDate, String beforeFormat, String afterFormat) throws ParseException {
		if (ObjectUtils.isEmpty(adDate))
			return adDate;
		SimpleDateFormat df4 = new SimpleDateFormat(beforeFormat);
		SimpleDateFormat df2 = new SimpleDateFormat(afterFormat);
		Calendar cal = Calendar.getInstance();

		cal.setTime(df4.parse(df4.format(adDate)));
		if (cal.get(Calendar.YEAR) > 1492)
			cal.add(Calendar.YEAR, -1911);
		else
			cal.add(Calendar.YEAR, +1911);

		cal.setTimeZone(TimeZone.getTimeZone("GMT"));
		return df2.parse(df2.format(cal.getTime()));
	}

	public static Date convertStringDateToDate(String stringDate, String beforeFormat) throws ParseException {
		if (StringUtils.isEmpty(stringDate)) {
			return null;
		}
		SimpleDateFormat df4 = new SimpleDateFormat(beforeFormat);
		Calendar cal = Calendar.getInstance();

		cal.setTime(df4.parse(stringDate));
		if (cal.get(Calendar.YEAR) > 1492)
			cal.add(Calendar.YEAR, -1911);
		else
			cal.add(Calendar.YEAR, +1911);

		return df4.parse(df4.format(cal.getTime()));
	}

	public static String getDateTimeNow() {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
		Date date = new Date();
		return formatter.format(date);
	}

	public static String getDateTimeNow2() {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
		Date date = new Date();
		return formatter.format(date);
	}

	public static String getTime(String time) {
		return time.substring(0, 2) + ":" + time.substring(2);
	}

	public static String getTimeStr(String time) {
		return StringUtils.join(time.split(":"));
	}

	/*
	 * 取得 參數日期時間(HHMM)
	 * 
	 * @param Date 時間格式
	 * 
	 * @return HHMM
	 */
	public static String convertDatetimeHHMM(Date date) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String formatDate = df.format(date);
		String[] str = formatDate.split("\\s+|:");
		return str[1] + str[2];
	}

	/*
	 * 取得 系統日期前半年(YYYYMM)
	 * 
	 * @param Date 時間格式
	 * 
	 * @return YYYYMM
	 */
	public static String getFirstHalfYearDate() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MONTH, -6);
		SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String formatDate = df.format(cal.getTime());
		String[] str = formatDate.split("/");
		System.out.print(str);
		return str[0] + str[1];
	}
}