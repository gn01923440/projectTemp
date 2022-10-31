//Caution!!! following code depend on pki.js

/**
 * 加密用之非同步呼叫組合, 若其中一段發生錯誤, 則後續呼叫不會執行
 * 必須先呼叫 initObject(...), 再呼叫其它 API, 範例:
	var encCall = new EncryptAsyncCall()
	.initObject(document.getElementById('Pkcs7Encrypt'), function (map) {
		alert(map.errorMessage);
		SMARTPKILib.unblockUI();
	});
	encCall.Initial(-1, DRIVER_TYPE_GD, PKCS7_DETACHED|PKCS7_NOATTR)
	.AddReceiverCertFile("s:/ca_root/crypt.cer",FORMAT_ASN1)
	.EncryptData(frm.text1.value, ENCRYPT_DES3, pkcs7Format, function(output) {
		frm.encodestream.value=output;
	}).Close();
 *
 */
function EncryptAsyncCall() {
  this.status = -1;//-1: stop, 0: not-run, 1:run, 2:waiting
  this.cmdQueue = [];
};

/**
 * 初始化物件
 * @param obj - 頁面上嵌入之 <object> 物件或其 id
 * @param errorHandler - 發生錯誤時, 呼叫此 function errorHandler(map) {...}, 可取得 errorCode 及 errorMessage 進行處理
 */
EncryptAsyncCall.prototype.initObject = function(obj, errorHandler) {
	if (isFunction(errorHandler)) {
		this.errCB = errorHandler;
	}
	if (this.errCB == null) {
		this.errCB = function (map) {
			alert(map.errorMessage);
		};
	}
	var cinfo = SMARTPKILib.checkChromeInfo();
	if (cinfo.isChrome) {
		if (cinfo.ready) {
			SMARTPKILib.openChromeAP(this);
			this.status = 2;
		}
	} else {
		if (isInstalled(obj)) {
			if (typeof(obj) == "string") {
				this.npObj = document.getElementById(obj);
			} else {
				this.npObj = obj;
			}
			this.status = 0;
		} else {
			this.status = -1;
		}
	}
	return this;
};

//Chrome 瀏覽器專用: 元件連接成功後會呼叫此方法
EncryptAsyncCall.prototype._chromeready = function (msg) {
	if (msg.version < required_chrome_ap) {
		this.status = -1;
		if (confirm('此頁面需要新版 SmartPKI 元件才能使用\n'+"請確認是否要下載安裝程式? 安裝完畢後, 請重新載入此頁面")) {
			location.href = installerChromeAp;
		}
	} else {
		this.status = 0;
		this._addcmd(null);
	}
};

EncryptAsyncCall.prototype._error = function(errMap) {
	this.status = -1;
	if (this.errCB) {
		this.errCB(errMap);
	}
};

EncryptAsyncCall.prototype._addcmd = function(cmdMap) {
	if (cmdMap != null) {
		this.cmdQueue.push(cmdMap);
	}
	if (this.status == 0) {
		this.status = 1;
		var x = this;
		setTimeout(function(){x._runcmd();},0);
		return;
	}
};

EncryptAsyncCall.prototype._runcmd = function() {
	if (this.npObj == null) {
		var m = (this.status == 1)?this.cmdQueue.shift():null;
		if (m != null) {
			if (m.cmd == 'then') {
				m.func();
				this.status = 0;
				this._addcmd(null);
			} else if (m.cmd == 'cancelCall') {
				this.cmdQueue = [];
			} else {
				this.status = 2;
				m.smartpkiReq = 'encrypt';
				SMARTPKILib.callChromeAP(m);
			}
		}
	} else {
		this._npruncmd();
	}
};

EncryptAsyncCall.prototype._npruncmd = function() {
	var m = (this.status == 1)?this.cmdQueue.shift():null;
	while (m != null) {
		var retCode = -1;
		var cb = null;
		var cbParam = null;
		switch (m.cmd) {
		case 'Initial':
			retCode = this.npObj.Initial(m.soltIndex, m.driverType, m.style);
			break;
		case 'Close':
			this.npObj.Close();
			retCode = 0;
			break;
		case 'EncryptData':
			cb = m.cb;
			cbParam = this.npObj.EncryptData(m.data, m.cipherId, m.format);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'EncryptFile':
			cb = m.cb;
			cbParam = this.npObj.EncryptFile(m.data, m.cipherId, m.format);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'AddReceiverCertFile':
			retCode = this.npObj.AddReceiverCertFile(m.certFile, m.format);
			break;
		case 'AddReceiverCertData':
			retCode = this.npObj.AddReceiverCertData(m.certData, m.format);
			break;
		case 'cancelCall':
			retCode = 0;
			this.cmdQueue = [];
			break;
		case 'then':
			retCode = 0;
			m.func();
			break;
		}
		if (retCode == 0) {
			if (cb != null) {
				cb(cbParam);
			}
			m = null;
			if (this.status == 1) {
				if (this.cmdQueue.length > 0) {
					m = this.cmdQueue.shift();
				} else {
					this.status = 0;
				}
			}
		} else {
			try {
				this._error({cmd:m.cmd, errorCode:retCode, errorMessage:this.npObj.GetErrorMessage()});
			} catch (e) {
			}
			m = null;
		}
	}
};

/**
 * 取消後續呼叫
 */
EncryptAsyncCall.prototype.cancelCall = function() {
	this.cmdQueue[0] = {cmd:'cancelCall'};
};

/**
 * 執行一個 function
 */
EncryptAsyncCall.prototype.then = function(func) {
	//this.cmdQueue[0] = {cmd:'then', func:func};
	this._addcmd({cmd:'then', func:func});
	return this;
};

/**
 * 初始化讀卡機
 * @param soltIndex - 傳入 -1 則會掃瞄所有讀卡機
 * @param driverType - 驅動類型
 * @param style - PKCS7 屬性
 * @returns {EncryptAsyncCall}
 */
EncryptAsyncCall.prototype.Initial = function (soltIndex, driverType, style) {
	this._addcmd({cmd:'Initial', soltIndex:soltIndex, driverType:driverType, style:style});
	return this;
};

/**
 * 加密資料
 * @param cipherId - 
 * @param format - 
 * @param data - 欲加密文字
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得加密後資料
 */
EncryptAsyncCall.prototype.EncryptData = function (data, cipherId, format, callback) {
	this._addcmd({cmd:'EncryptData', data:data, cipherId:cipherId, format:format, cb:callback});
	return this;
};

/**
 * 加密檔案
 * @param cipherId - 
 * @param format - 
 * @param data - 欲加密檔案路徑
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得加密後資料
 */
EncryptAsyncCall.prototype.EncryptFile = function (data, cipherId, format, callback) {
	this._addcmd({cmd:'EncryptData', data:data, cipherId:cipherId, format:format, cb:callback});
	return this;
};

/**
 * 設定憑證檔案
 * @param certFile - 憑證檔案路徑
 * @param format - 
 */
EncryptAsyncCall.prototype.AddReceiverCertFile = function (certFile, format) {
	this._addcmd({cmd:'AddReceiverCertFile', certFile:certFile, format:format});
	return this;
};

/**
 * 設定憑證
 * @param certData - 憑證
 * @param format - 
 */
EncryptAsyncCall.prototype.AddReceiverCertData = function (certData, format) {
	this._addcmd({cmd:'AddReceiverCertData', certData:certData, format:format});
	return this;
};

/** 釋放資源 */
EncryptAsyncCall.prototype.Close = function() {
	this._addcmd({cmd:'Close'});
	return this;
};

/**
 * 解密用之非同步呼叫組合, 若其中一段發生錯誤, 則後續呼叫不會執行
 * 必須先呼叫 initObject(...), 再呼叫其它 API, 範例:
	var decCall = new DecryptAsyncCall()
	.initObject(document.getElementById('Pkcs7Decrypt'), function (map) {
		alert(map.errorMessage);
		SMARTPKILib.unblockUI();
	});
	decCall.Initial(-1, DRIVER_TYPE_GD, PKCS7_DETACHED|PKCS7_NOATTR)
	.Decrypt(frm.encodestream.value, pkcs7Format, frm.pin.value, function(output) {
		frm.plaintext.value=output;
	}).Close();
 *
 */
function DecryptAsyncCall() {
  this.status = -1;//-1: stop, 0: not-run, 1:run, 2:waiting
  this.cmdQueue = [];
};

/**
 * 初始化物件
 * @param obj - 頁面上嵌入之 <object> 物件或其 id
 * @param errorHandler - 發生錯誤時, 呼叫此 function errorHandler(map) {...}, 可取得 errorCode 及 errorMessage 進行處理
 */
DecryptAsyncCall.prototype.initObject = function(obj, errorHandler) {
	if (isFunction(errorHandler)) {
		this.errCB = errorHandler;
	}
	if (this.errCB == null) {
		this.errCB = function (map) {
			alert(map.errorMessage);
		};
	}
	var cinfo = SMARTPKILib.checkChromeInfo();
	if (cinfo.isChrome) {
		if (cinfo.ready) {
			SMARTPKILib.openChromeAP(this);
			this.status = 2;
		} else {
			this.status = -1;
		}
	} else {
		if (isInstalled(obj)) {
			if (typeof(obj) == "string") {
				this.npObj = document.getElementById(obj);
			} else {
				this.npObj = obj;
			}
			this.status = 0;
		} else {
			this.status = -1;
		}
	}
	return this;
};

//Chrome 瀏覽器專用: 元件連接成功後會呼叫此方法
DecryptAsyncCall.prototype._chromeready = function (msg) {
	if (msg.version < required_chrome_ap) {
		this.status = -1;
		if (confirm('此頁面需要新版 SmartPKI 元件才能使用\n'+"請確認是否要下載安裝程式? 安裝完畢後, 請重新載入此頁面")) {
			location.href = installerChromeAp;
		}
	} else {
		this.status = 0;
		this._addcmd(null);
	}
};

DecryptAsyncCall.prototype._error = function(errMap) {
	this.status = -1;
	if (this.errCB) {
		this.errCB(errMap);
	}
};

DecryptAsyncCall.prototype._addcmd = function(cmdMap) {
	if (cmdMap != null) {
		this.cmdQueue.push(cmdMap);
	}
	if (this.status == 0) {
		this.status = 1;
		var x = this;
		setTimeout(function(){x._runcmd();},0);
		return;
	}
};

DecryptAsyncCall.prototype._runcmd = function() {
	if (this.npObj == null) {
		var m = (this.status == 1)?this.cmdQueue.shift():null;
		if (m != null) {
			if (m.cmd == 'then') {
				m.func();
				this.status = 0;
				this._addcmd(null);
			} else if (m.cmd == 'cancelCall') {
				this.cmdQueue = [];
			} else {
				this.status = 2;
				m.smartpkiReq = 'decrypt';
				SMARTPKILib.callChromeAP(m);
			}
		}
	} else {
		this._npruncmd();
	}
};

DecryptAsyncCall.prototype._npruncmd = function() {
	var m = (this.status == 1)?this.cmdQueue.shift():null;
	while (m != null) {
		var retCode = -1;
		var cb = null;
		var cbParam = null;
		switch (m.cmd) {
		case 'Initial':
			retCode = this.npObj.Initial(m.soltIndex, m.driverType, m.style);
			break;
		case 'Close':
			this.npObj.Close();
			retCode = 0;
			break;
		case 'Decrypt':
			cb = m.cb;
			cbParam = this.npObj.Decrypt(m.p7Data, m.format, m.pin);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'KeyFileDecrypt':
			cb = m.cb;
			cbParam = this.npObj.KeyFileDecrypt(m.p7Data, m.p7Format, m.keyFile, m.keyFormat, m.pin, m.certFile, m.certFormat);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'HWDecrypt':
			cb = m.cb;
			cbParam = this.npObj.HWDecrypt(m.p7Data, m.p7Format, m.certFile, m.certFormat, m.keyIndex);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'HWDecryptUseCard':
			cb = m.cb;
			cbParam = this.npObj.HWDecryptUseCard(m.p7Data, m.p7Format, m.certFile, m.certFormat, m.pin, m.keyIndex);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'cancelCall':
			retCode = 0;
			this.cmdQueue = [];
			break;
		case 'then':
			retCode = 0;
			m.func();
			break;
		}
		if (retCode == 0) {
			if (cb != null) {
				cb(cbParam);
			}
			m = null;
			if (this.status == 1) {
				if (this.cmdQueue.length > 0) {
					m = this.cmdQueue.shift();
				} else {
					this.status = 0;
				}
			}
		} else {
			try {
				this._error({cmd:m.cmd, errorCode:retCode, errorMessage:this.npObj.GetErrorMessage()});
			} catch (e) {
			}
			m = null;
		}
	}
};

/**
 * 取消後續呼叫
 */
DecryptAsyncCall.prototype.cancelCall = function() {
	this.cmdQueue[0] = {cmd:'cancelCall'};
};

/**
 * 執行一個 function
 */
DecryptAsyncCall.prototype.then = function(func) {
	this.cmdQueue[0] = {cmd:'then', func:func};
	return this;
};

/**
 * 初始化讀卡機
 * @param soltIndex - 傳入 -1 則會掃瞄所有讀卡機
 * @param driverType - 驅動類型
 * @param style - PKCS7 屬性
 * @returns {DecryptAsyncCall}
 */
DecryptAsyncCall.prototype.Initial = function (soltIndex, driverType, style) {
	this._addcmd({cmd:'Initial', soltIndex:soltIndex, driverType:driverType, style:style});
	return this;
};

/**
 * 解密
 * @param p7Data
 * @param format 
 * @param pin
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得解密後資料
 */
DecryptAsyncCall.prototype.Decrypt = function (p7Data, format, pin, callback) {
	this._addcmd({cmd:'Decrypt', p7Data:p7Data, format:format, pin:pin, cb:callback});
	return this;
};

/**
 * 解密
 * @param p7Data 
 * @param p7Format
 * @param keyFile
 * @param keyFormat
 * @param pin
 * @param certFile
 * @param certFormat
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得解密後資料
 */
DecryptAsyncCall.prototype.KeyFileDecrypt = function (p7Data, p7Format, keyFile, keyFormat, pin, certFile, certFormat, callback) {
	this._addcmd({cmd:'KeyFileDecrypt', p7Data:p7Data, p7Format:p7Format, keyFile:keyFile, keyFormat:keyFormat, pin:pin, certFile:certFile, certFormat:certFormat, cb:callback});
	return this;
};

/**
 * 解密
 * @param p7Data 
 * @param p7Format
 * @param certFile
 * @param certFormat
 * @param keyIndex
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得解密後資料
 */
DecryptAsyncCall.prototype.HWDecrypt = function (p7Data, p7Format, certFile, certFormat, keyIndex, callback) {
	this._addcmd({cmd:'HWDecrypt', p7Data:p7Data, p7Format:p7Format, certFile:certFile, certFormat:certFormat, keyIndex:keyIndex, cb:callback});
	return this;
};

/**
 * 解密
 * @param p7Data 
 * @param p7Format
 * @param certFile
 * @param certFormat
 * @param pin
 * @param keyIndex
 * @param callback - 成功後呼叫此 function callback(value) {...}, 可取得解密後資料
 */
DecryptAsyncCall.prototype.HWDecryptUseCard = function (p7Data, p7Format, certFile, certFormat, pin, keyIndex, callback) {
	this._addcmd({cmd:'HWDecryptUseCard', p7Data:p7Data, p7Format:p7Format, certFile:certFile, certFormat:certFormat, pin:pin, keyIndex:keyIndex, cb:callback});
	return this;
};

/** 釋放資源 */
DecryptAsyncCall.prototype.Close = function() {
	this._addcmd({cmd:'Close'});
	return this;
};

