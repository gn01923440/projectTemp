package com.dgi.platform.utils;

import java.util.List;

import lombok.Data;

@Data
public class PageBean<T> {
	private int currentPage = 1;
	private int currentRow = 25;
	private int totalPage;
	private long totalRows;
	private List<T> lists;

	public PageBean(List<T> dataList, int currentPage, int currentRow, int totalPage, int totalRows) {
		this.lists = dataList;
		this.currentPage = currentPage;
		this.currentRow = currentRow;
		this.totalPage = totalPage;
		this.totalRows = totalRows;
	}
}