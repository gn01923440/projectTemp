package com.dgi.platform.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class BeanCopyUtil extends BeanUtils {

	/**
	 * 集合數據的拷貝
	 * 
	 * @param sources: 數據源類
	 * @param target:  目標類::new(eg: UserVO::new)
	 * @return
	 */
	public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target) {
		return copyListProperties(sources, target, null);
	}

	/**
	 * 帶函數的集合數據拷貝（可自定義字段複製規則）
	 * 
	 * @param sources:  數據源類
	 * @param target:   目標類型::new(eg: UserVO::new)
	 * @param callBack: 回調函數
	 * @return
	 */
	public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target,
			BeanCopyUtilCallBack<S, T> callBack) {
		List<T> list = new ArrayList<>(sources.size());
		for (S source : sources) {
			T t = target.get();
			copyProperties(source, t);
			list.add(t);
			if (callBack != null) {
				// 回調
				callBack.callBack(source, t);
			}
		}
		return list;
	}
}