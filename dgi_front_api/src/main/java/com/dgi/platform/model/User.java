package com.dgi.platform.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "ADMIN_USER")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name = "generator", strategy = "guid", parameters = {})
	@GeneratedValue(generator = "generator")
	@Column(name = "ID", columnDefinition = "uniqueidentifier")
	private String id;// 使用者ID

	@NotEmpty(message = "使用者代號不可為空")
	@Size(max = 20, message = "使用者代號長度不可超過20")
	@Column(name = "USER_NO", columnDefinition = "VARCHAR(20)")
	private String userNo;// 使用者代號

	@NotEmpty(message = "使用者名稱不可為空")
	@Size(max = 300, message = "使用者名稱長度不可超過300")
	@Column(name = "USER_NAME", columnDefinition = "NVARCHAR(300)")
	private String userName;// 使用者名稱

	@Size(max = 100, message = "郵件地址長度不可超過100")
	@Column(name = "EMAIL", columnDefinition = "VARCHAR(100)")
	private String email;// 郵件地址

	@Size(max = 100, message = "密碼長度不可超過100")
	@Column(name = "USER_PW", columnDefinition = "VARCHAR(100)")
	private String userPw;// 密碼

	@NotEmpty(message = "啟用狀態不可為空")
	@Size(max = 1, message = "啟用狀態長度不可超過1")
	@Column(name = "STATUS", columnDefinition = "CHAR(1)")
	private String status;// 啟用狀態

	@NotEmpty(message = "帳號鎖定不可為空")
	@Size(max = 1, message = "帳號鎖定長度不可超過1")
	@Column(name = "LOCKED", columnDefinition = "CHAR(1)")
	private String locked;// 帳號鎖定

	@Column(name = "LOCKED_TIME", columnDefinition = "DATETIME")
	private Date lockedTime;// 鎖定時間

	@Size(max = 20, message = "異動人員長度不可超過20")
	@Column(name = "UPD_USER", columnDefinition = "VARCHAR(20)")
	private String updUser;// 異動人員

	@Column(name = "LOGIN_DATETIME", columnDefinition = "DATETIME")
	private Date loginDatetime;// 最後登入日期時間

	@Transient
	private Set<Role> roles = new HashSet<>();
}