package com.dgi.platform.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

import org.springframework.lang.Nullable;

/**
 * @author elliot
 * @date 2022/10/4
 */
public class ObjectUtils extends org.springframework.util.ObjectUtils {
	/**
	 * 複製物件
	 *
	 * @param object 物件對象
	 * @return 物件對象
	 */
	public static Object cloneObject(Object object) {
		try {
			Object clone = object.getClass().newInstance();
			for (Field field : object.getClass().getDeclaredFields()) {
				field.setAccessible(true);
				if (field.get(object) == null || Modifier.isFinal(field.getModifiers())) {
					continue;
				}
				if (field.getType().isPrimitive() || field.getType().equals(String.class)
						|| field.getType().getSuperclass().equals(Number.class)
						|| field.getType().equals(Boolean.class)) {
					field.set(clone, field.get(object));
				} else {
					Object childObject = field.get(object);
					if (childObject == object) {
						field.set(clone, clone);
					} else {
						field.set(clone, cloneObject(field.get(object)));
					}
				}
			}
			return clone;
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * 取得值得預設資料或是本資料
	 *
	 * @param value        值
	 * @param defaultValue 預設資料
	 * @param <T>
	 * @return
	 */
	public static <T> T getValueOrDefault(T value, T defaultValue) {
		return value == null ? defaultValue : value;
	}

	/**
	 * 陣列是否不為空
	 *
	 * @param array 陣列
	 * @return
	 */
	public static boolean isNotEmpty(@Nullable Object[] array) {
		return array != null && array.length != 0;
	}

	/**
	 * 物件是否不為空
	 *
	 * @param object 物件
	 * @return
	 */
	public static boolean isNotEmpty(@Nullable Object object) {
		return !ObjectUtils.isEmpty(object);
	}

	/**
	 * 是否存在資料
	 *
	 * @param list 陣列集合
	 * @return
	 */
	public static boolean isExistChildren(@Nullable List<?> list) {
		return list != null && list.size() > 0;
	}

	@SuppressWarnings("unchecked")
	public static <T> T cast(Object obj) {
		return (T) obj;
	}
}