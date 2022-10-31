package com.dgi.platform.model; 

import java.io.Serializable;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import javax.persistence.GenerationType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "STATUS_CODE")
public class StatusCode implements Serializable{  
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotEmpty(message = "ID不可為空")
	@Column(name= "ID", columnDefinition = "bigint")
	private String id;// ID

	@NotEmpty(message = "代號不可為空")
	@Size(max=10, message = "代號長度不可超過10")
	@Column(name= "CODE", columnDefinition = "VARCHAR(10)")
	private String code;// 代號

	@NotEmpty(message = "名稱不可為空")
	@Size(max=200, message = "名稱長度不可超過200")
	@Column(name= "NAME", columnDefinition = "NVARCHAR(200)")
	private String name;// 名稱

	@Size(max=10, message = "排序長度不可超過10")
	@Column(name= "SORT", columnDefinition = "VARCHAR(10)")
	private String sort;// 排序

	@Size(max=1, message = "啟用狀態長度不可超過1")
	@Column(name= "STATUS", columnDefinition = "CHAR(1)")
	private String status;// 啟用狀態

}                           