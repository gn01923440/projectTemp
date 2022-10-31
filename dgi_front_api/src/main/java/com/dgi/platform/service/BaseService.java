package com.dgi.platform.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Component;

@Component
public class BaseService {
	public Object[] appendValue(Object[] obj, Object newObj) {
		ArrayList<Object> temp = new ArrayList<Object>(Arrays.asList(obj));
		temp.add(newObj);
		return temp.toArray();
	}
}