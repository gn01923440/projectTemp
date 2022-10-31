package com.dgi.platform.utils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JdbcTemplatePageUtils {
	@Autowired
	JdbcTemplate jdbcTemplate;

	/**
	 * 回傳 DTO
	 * 
	 * @param sql       查詢SQL
	 * @param queryArgs 查詢參數
	 * @param rowMapper DTO MAPPER
	 * @param <T>       DTO
	 * @return dto
	 */
	public <T> T getCustomerDto(String sql, RowMapper<T> rowMapper, Object[] queryArgs) {
		return jdbcTemplate.queryForObject(sql, rowMapper, queryArgs);
	}

	/**
	 * 回傳 DTO LIST
	 * 
	 * @param sql       查詢SQL
	 * @param queryArgs 查詢參數
	 * @param rowMapper DTO MAPPER
	 * @param <T>       DTO
	 * @return DTO list
	 */
	public <T> List<T> getCustomerDtoList(String sql, RowMapper<T> rowMapper, Object[] queryArgs) {
		return jdbcTemplate.query(sql, rowMapper, queryArgs);
	}

	/**
	 * 回傳 分頁物件
	 * 
	 * @param sql         查询SQL
	 * @param queryArgs   查询参数
	 * @param rowMapper   DTO MAPPER
	 * @param countSql    總筆數SQL
	 * @param countArgs   總筆數参数
	 * @param currentPage 當頁
	 * @param currentRow  當頁筆數
	 * @param <T>         DTO
	 * @return 分頁物件
	 */
	public <T> PageBean<T> getCustomerPageDto(String sql, Object[] queryArgs, RowMapper<T> rowMapper, String countSql,
			Object[] countArgs, int currentPage, int currentRow) {
		if (currentPage <= 0)
			throw new RuntimeException("每頁大小必须大於1");
		if (currentRow <= 0)
			throw new RuntimeException("當頁筆數必须大於1");

		int totalRows = jdbcTemplate.queryForObject(countSql, Integer.class, countArgs);
		if (totalRows == 0)
			return new PageBean<T>(new ArrayList<T>(), 0, 0, 0, 0);

		int totalPage = totalRows % currentRow == 0 ? totalRows / currentRow : totalRows / currentRow + 1;
		int offset = (currentPage - 1) * currentRow;
		int limit = currentRow;

		sql = sql + " offset " + offset + " rows fetch next " + limit + " rows only ";
		log.info("SQL: " + sql);
		List<T> content = jdbcTemplate.query(sql, rowMapper, queryArgs);

		return new PageBean<T>(content, currentPage, content.size(), totalPage, totalRows);
	}
}