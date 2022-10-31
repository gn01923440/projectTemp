package com.dgi.platform.utils;

import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Service;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;

import io.github.bucket4j.Bucket;

@Service
public class GuavaCacheUtil {

	public static Cache<String,String> cache = CacheBuilder.newBuilder()
		.maximumSize(100) // 設定快取的最大容量
		.expireAfterWrite(60 * 1000, TimeUnit.MILLISECONDS) // 設定快取在寫入一分鐘後失效
		.concurrencyLevel(10) // 設定併發級別為10
		.recordStats() // 開啟快取統計
		.build();// 放入快取
	
	public static Cache<String,Integer> repeatSubmitCache = CacheBuilder.newBuilder()
			.expireAfterWrite(2, TimeUnit.SECONDS) // 設定快取在寫入2秒後失效
			.build();// 放入快取
	
	public static Cache<String, Bucket> ddosCache = CacheBuilder.newBuilder()
			.maximumSize(5000) // 設定快取的最大容量
			.expireAfterWrite(1, TimeUnit.MINUTES) // 設定快取在寫入1min後失效
			.concurrencyLevel(10) // 設定併發級別為10
			.recordStats() // 開啟快取統計
			.build();// 放入快取
}
