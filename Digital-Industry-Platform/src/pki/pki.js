﻿"use strict";

var KEY_FILE_TYPE_PKCS8_PEM	=1;
var KEY_FILE_TYPE_PKCS8_ASN1=2;
var KEY_FILE_TYPE_PKCS12	=3;

var MAIN_CERTIFICATE        =1;
var AUXILIARY_CERTIFICATE   =2;

var ENCRYPT_DES             =1;
var ENCRYPT_DES3            =2;
var ENCRYPT_RC2_40          =3;
var ENCRYPT_RC2_128         =4;
var ENCRYPT_RC2_64          =5;
var ENCRYPT_AES128          =6;
var ENCRYPT_AES192          =7;
var ENCRYPT_AES256          =8;


var X509_FILETYPE_PEM	    =1;
var X509_FILETYPE_ASN1	    =2;
var X509_FILETYPE_DEFAULT	=3;

var FORMAT_ASN1             =1;
var FORMAT_PEM              =3;
var FORMAT_PKCS12           =5;
var FORMAT_SMIME            =6;
var FORMAT_ASN1_WITH_BASE64 = 64;

var PKCS7_TEXT          =0x1;
var PKCS7_NOCERTS		=0x2;
var PKCS7_NOSIGS        =0x4;
var PKCS7_NOCHAIN		=0x8;
var PKCS7_NOINTERN		=0x10;
var PKCS7_NOVERIFY		=0x20;
var PKCS7_DETACHED		=0x40;
var PKCS7_BINARY        =0x80;
var PKCS7_NOATTR        =0x100;
var PKCS7_NOSMIMECAP    =0x200;
var PKCS7_NOOLDMIMETYPE	=0x400;
var PKCS7_CRLFEOL		=0x800;

var CERT_NO_DEFINE				        =0;		// No define
var CERT_CHT_PERSON				        =1;		// 自然人憑證
var CERT_CHT_COMPANY			        =2;		// 公司憑證
var CERT_CHT_BRANCH_COMPANY		        =3;		// 分公司憑證
var CERT_CHT_GOVERNMENT_NUIT	        =4;		// 政府單位憑證
var CERT_CHT_SERVER				        =5;		// 伺服器憑證
var CERT_CHT_BUSINESS			        =6;		// 行號憑證
var CERT_CHT_SCHOOL				        =7;		// 學校憑證
var CERT_CHT_JURIDICAL			        =8;		// 社團法人憑證
var CERT_CHT_FREE_JOB			        =9;		// 自由職業事務所憑證
var CERT_CHT_OTHER_GROUP			    =10;	// 其他團體憑證
var CERT_CHT_AUXILIARY_GOVERNMENT_NUIT	=11;	// 附屬機關
var CERT_CHT_GOVERNMENT_JURIDICAL		=12;	// 行政法人
var CERT_CHT_SYNDICATE					=13;	// 財團法人憑證
var CERT_CHT_HEALTH_PERSON				=14;	// 醫事人員憑證
var CERT_CHT_HEALTH_ORGN				=15;	// 醫事機構憑證
var CERT_CHT_FOREIGN				    =16;	// 外來人口憑證
var CERT_CHT_PARTNER_COMPANY			=17;	// 有限合夥公司

var DRIVER_TYPE_GD              =1;     // GD卡driver
var DRIVER_TYPE_NCIPHER         =2;     // nCipher driver
var DRIVER_TYPE_FILE            =4;     // File driver

var required_version = "6.0.1.0";
var required_version_osx = "6.0.0.9";
var installerLocation = 'SmartPKI_Manually_Install.zip';//安裝程式所在位置
var installerLocationOSX = 'SmartPKI_OSX.pkg';
var installerCHTExt="https://moica.nat.gov.tw/rac_plugin.html";
//var installerLocationLinux = '';//需區分 64/32bit
var installerChromeExt = ['https://chrome.google.com/webstore/detail/jhffgcfmcckgmioipfnmbannkpncfipo',
                          'smartpki.xpi',
                          'https://www.microsoft.com/zh-tw/store/'];
var required_chrome_ext = "0.0.1.3";

var installerEdgeExt = "ms-windows-store://pdp/?productid=9PN2THQGWL0V";

var pkiResult = new Object();
pkiResult.errorCode = 0;
pkiResult.errorMessage = "";

// 元件可用
var isPkiReady=false;
function getPkiReady(){
	return isPkiReady;
}

function setPkiReady(ready){
	isPkiReady=ready;
}

function SMARTPKILib(){};

SMARTPKILib.prototype.closeChromeAP = function() {
	this.call = null;
	if (this.nativePort) {
		this.nativePort.disconnect();
		this.nativePort = null;
	}
};

SMARTPKILib.prototype.callChromeAP = function(msg) {
	if (this.nativePort) {
		var cb = null;
		if (msg.cb) {
			cb = msg.cb;
			delete msg.cb;
		}
		this.runCB = cb;
		this.nativePort.postMessage(msg);
		this.runMsgId = msg.msgId;
	}
};

SMARTPKILib.prototype.handleChromeCB = function(msg) {
	var call = this.call;
	var mmid = this.runMsgId;
	if (mmid == 0 || call == null){
		return;
	}
	var retCode = msg.errorCode;
	if (mmid != msg.msgId) {
		call._error({cmd:msg.cmd, errorCode:'20009', errorMessage:'SmartPKI內部處理發生錯誤'});
		return;
	}
	this.runMsgId = 0;
	if (retCode == 0) {
		{
			if (this.runCB != null) {
//				try {
				if (msg.returnValue) {
					this.runCB(msg.returnValue);
				} else {
					var certProp = new CertProp();
					for(var k in msg) {certProp[k]=msg[k];}					
					this.runCB(certProp);
				}
//				} catch (e) {err = e;}
			}
			call.status = 1;
			call._runcmd();
		}
	} else {
		call._error({cmd:msg.cmd, errorCode:retCode, errorMessage:msg.errorMessage});
	}
};

SMARTPKILib.prototype.openChromeAP = function(call) {
	var noReuse = !this.everSuccess;//improve performance but may cause unexpected call...
	if (noReuse && this.nativePort) {
		this.nativePort.disconnect();
		this.nativePort = null;
		setTimeout(SMARTPKILib.openChromeAP(call),0);
		return;
	}
	if (this.call != null) {
		try {
			this.call.cancelCall();
		} catch (e) {}
	}
	this.call = call;
	if (this.nativePort != null) {
		this.nativePort.postMessage({'msgCmd':'info', 'smartpkiReq':'info'});
		return;
	}
	var me = this;
	if (!getNavitgator(navigator).connectSmartPKI) {
		call._error({cmd:'', errorCode:'20001', errorMessage:'呼叫擴充套件失敗，可能原因為此網站不允許使用擴充套件'});
	}
	getNavitgator(navigator).connectSmartPKI().then(function(port) {
		me.nativePort = port;
		port.addMessageListener(function(message) {
			var cmd = message.smartpkiRes;
			if (cmd == 'info') {
				me.everSuccess = true;
				if (message.min_ap_version && message.min_ap_version > required_version) {
				   required_version = message.min_ap_version;
				}
				me.call._chromeready(message);
			} else {
				me.handleChromeCB(message);
			}
		});
		port.addDisconnectListener(function() {
			me.nativePort = null;
			if (call != null) {
				var errCode = me.everSuccess?'20002':'20003';
				var err = me.everSuccess?'SmartPKI連接意外中斷，請重新操作':'無法連接SmartPKI，請確認SmartPKI元件安裝成功';
				call._error({cmd:'', errorCode:errCode, errorMessage:err});
			}
		});
	}, function(err) {
		if (call != null) {
			call._error({cmd:'', errorCode:'20004', errorMessage:'連接SmartPKI元件時發生錯誤: '+err});
		}
	});
};

SMARTPKILib.prototype.checkChromeInfo = function(warning) {
  var info = this.chromeInfo;
  if (info == null) {
    var ag = navigator.userAgent;
    info = {};
    info.isChrome = !!window.chrome;
    var browserType = -1;
    if (info.isChrome) {
      if (ag.indexOf(' Edge/') == -1) {
        browserType = 0;
      } else {
        //browserType = 2;//TODO
      }
    } else {
      var fpos = ag.indexOf("Firefox/");
      if(fpos != -1){
        var ver = parseFloat(ag.substr(fpos+8).split(/[ ;]/));
        if(ver >= 50) {
          browserType = 1;
          info.isChrome=true;
        }
      }
    }
    info.extVersion = "";
    info.ready = false;
    if (ag.indexOf("Intel Mac OS X ") != -1) {
       required_version = required_version_osx;

       var osxPos = ag.indexOf("Intel Mac OS X ");
       var ver = ag.substr(osxPos+15).split(/[;\)]/);
       ver = ver[0].replace(/_/g,".").split(".");
       ver = ver[0]+'.'+ver[1];
       if (ver>="10.15") {
    	   return info;
       }

       if (installerLocationOSX) {
    	   installerLocation = installerLocationOSX;
       } else {
    	   if (warning)
    		   alert("本網站尚未支援您目前使用的作業平台");
    	   return info;
       }
    }
    try {
      var counter = 0;
      var win = window;
      while(win!=win.parent.window && counter<10){
        win = win.parent.window;
        counter++;
      }
      info.extVersion = win.zhaninfo.smartpki.version;
    } catch (e) {}
    if((!info.extVersion) && browserType == 0) {
    	try {
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', 'chrome-extension://jhffgcfmcckgmioipfnmbannkpncfipo/manifest.json', false);
	        xhr.send(null);
	        var manifest = JSON.parse(xhr.responseText);
	        info.extVersion = manifest.version;
	      } catch (e) {}
    }
    if(browserType != -1) {
      this.chromeInfo = info;
      window.addEventListener("beforeunload", function(event) {
        SMARTPKILib.closeChromeAP();
      });
      var promptMsg = null;
      if(info.extVersion) {
        if(info.extVersion < required_chrome_ext) {
          promptMsg = '請更新「SmartPKI 多憑證安控模組擴充套件」再繼續作業';
        } else {
          info.ready = true;
        }
      } else {
        promptMsg = "請確認是否要至Chrome應用程式商店取得「SmartPKI 多憑證安控模組擴充套件」? \n\n安裝完畢後, 請重新載入此頁面";
      }
      if(warning && promptMsg != null && confirm(promptMsg)) {
        location.href = installerChromeExt[browserType];
      }
    }
  }
  return info;
};

SMARTPKILib.prototype.checkANInfo = function(obj) {
  var version = "";
  var promptMsg = null;
  var callOK = false;
  if (obj) {
    if (typeof(obj) == "string") {
       obj = document.getElementById(obj);
    }
    try {
       if (obj.getErrorCode) {
          version = "1.0.0.0";
       }
       version = obj.getVersion();
       callOK = true;
    } catch (e) {}
  }
  if (version == "" && navigator.mimeTypes && navigator.mimeTypes["application/x-smartpki"]) {
    var plugin = navigator.plugins["SmartPKI Browser plugin"];
    if(plugin) {
      var pos = plugin.description.lastIndexOf(" v");
      if (pos != -1) {
         version = plugin.description.substr(pos+2);
      }
    }
  }
  var unsupportMsg = "SmartPKI 元件尚未支援您目前使用的作業平台";
  var ag = navigator.userAgent;
  var osxPos = ag.indexOf("Intel Mac OS X ");
  var isOSX = osxPos != -1;
  var reqver = isOSX?required_version_osx:required_version;
  if (isOSX && installerLocationOSX == "") {
    version = "";
    unsupportMsg = "本網站尚未支援您目前使用的作業平台";
  }
  if (version == "") {
    var unsupport = ag.indexOf("Win") == -1 || new RegExp("(Mobile|ARM)").test(ag);
    if (isOSX) {
      if (installerLocationOSX) {
        var ver = ag.substr(osxPos+15).split(/[;\)]/);
        ver = ver[0].replace(/_/g,".").split(".");
        ver = ver[0]+'.'+ver[1];
        if (ver>="10.15") {
        	installerLocation=installerCHTExt;
        	promptMsg="網頁將引導至內政部憑證管理中心下載「跨平台網頁元件」，";
        	
        	unsupportMsg = "";
        	unsupport = true;
        } else {
     	   if (installerLocationOSX) {
     		  if (ver.length>4 || ver>"10.6") {
     	          unsupport = false;
     	          installerLocation = installerLocationOSX;
     	      }
     		  
     	   }
        
        }
      }
    } else if (ag.indexOf(' Edge/') != -1) {
      unsupport = true;
      unsupportMsg = "SmartPKI 元件尚未支援 Edge瀏覽器, 請改用其它瀏覽器";
    }
    if (!unsupport) {
        unsupportMsg = "";
        promptMsg ="尚未安裝或未啟用SmartPKI元件，請下載並啟用該元件，\n";
        promptMsg +="障礙排除方法：\n";
        promptMsg +="1.下載安裝SmartPKI元件後重啟瀏覽器。\n";
        promptMsg +="2.當瀏覽器詢問是否允許此元件執行時，請務必選擇允許。\n";
        promptMsg +="3.請將本網站設成信任網站。\n";
    }
  } else {
    unsupportMsg = "";
    if (version < reqver) {
      promptMsg = "此頁面需要新版 SmartPKI 元件才能使用\n";
      callOK = false;
    } else if (!callOK) {
      try {
       obj.getErrorCode();
       callOK = true;
      } catch (e) {}
    }
  }
  var ret = {};
  ret.version = version;
  if (callOK) {
     ret.npObj = obj;
  } else {
     ret.npObj = null;
     ret.unsupportMsg = unsupportMsg;
     ret.promptMsg = promptMsg;
  }
  return ret;
}
var SMARTPKILib = new SMARTPKILib();

function isFunction(func) {
  return typeof(func) == typeof(Function);
}

function copyProperty(src, target) {
	target.errorCode = src.GetErrorCode();
	target.errorMessage = src.GetErrorMessage();
	target.serialNumber = src.GetSerialNumber();
	target.isMainCard = src.IsMainCard();
	target.certName = src.GetCertName();
	target.certificate = src.GetCertificate();
	target.id = src.GetID();
	target.certType = src.GetCertType();
	target.subjectName = src.GetSubjectName();
	target.subjectSN = src.GetSubjectSN();
	target.name = src.GetName();
	target.notAfter = src.GetNotAfter();
	target.cardNumber = src.GetCardNumber();
	target.algorithmNid = src.GetAlgorithmNid();
}
function CertProp() {
	this.algorithmNid = 0;
	this.cardNumber = '';
	this.certificate = '';
	this.certName = '';
	this.certType = 0;
	this.id = '';
	this.isMainCard;
	this.name = '';
	this.notAfter = 0;
	this.serialNumber;
	this.subjectName = '';
	this.subjectSN = '';
	this.GetSerialNumber = function() {
		return this.serialNumber;
	};
	this.IsMainCard = function() {
		return this.isMainCard;
	};
	this.GetCertName = function() {
		return this.certName;
	};
	this.GetCertificate = function() {
		return this.certificate;
	};
	this.GetID = function() {
		return this.id;
	};
	this.GetCertType = function() {
		return this.certType;
	};
	this.GetSubjectName = function() {
		return this.subjectName;
	};
	this.GetSubjectSN = function() {
		return this.subjectSN;
	};
	this.GetName = function() {
		return this.name;
	};
	this.GetNotAfter = function() {
		return this.notAfter;
	};
	this.GetCardNumber = function() {
		return this.cardNumber;
	};
	this.GetAlgorithmNid = function() {
		return this.algorithmNid;
	};
	return this;
}
/**
 * 簽章用之非同步呼叫組合, 若其中一段發生錯誤, 則後續呼叫不會執行
 * 必須先呼叫 initObject(...), 再呼叫其它 API, 範例請參照 onSign(...)
 */
function SignAsyncCall() {
  this.status = -1;//-1: stop, 0: not-run, 1:run, 2:waiting
  this.cmdQueue = [];
};

/**
 * 初始化物件
 * @param obj - 頁面上嵌入之 <object> 物件或其 id
 * @param errorHandler - 發生錯誤時, 呼叫此 function errorHandler(map) {...}, 可取得 errorCode 及 errorMessage 進行處理
 */
SignAsyncCall.prototype.initObject = function(obj, errorHandler) {
	if (isFunction(errorHandler)) {
		this.errCB = errorHandler;
	}
	if (this.errCB == null) {
		this.errCB = function (map) {
			alert(map.errorMessage);
		};
	}
	this.status = -1;
	var aninfo = SMARTPKILib.checkANInfo(obj);
	if (aninfo.npObj) {
		this.npObj = aninfo.npObj;
		if (obj.signAsync) {
			this.useAsync = true;
		} else {
			this.useAsync = false;
		}
		this.status = 0;
	} else {
		var cinfo = SMARTPKILib.checkChromeInfo(true);
		if (cinfo.isChrome && cinfo.ready) {
			SMARTPKILib.openChromeAP(this);
			this.status = 2;
		}
	}
	return this;
};

//Chrome 瀏覽器專用: 元件連接成功後會呼叫此方法
SignAsyncCall.prototype._chromeready = function (msg) {
	if (msg.version < required_version) {
		this.status = -1;
		if (confirm('此頁面需要新版 SmartPKI 元件才能使用\n\n請確認是否要下載安裝程式? 安裝完畢後, 請重新載入此頁面')) {
			location.href = installerLocation;
		}
	} else {
		this.status = 0;
		this._addcmd(null);
	}
};

SignAsyncCall.prototype._error = function(errMap) {
	this.status = -1;
	if (this.errCB) {
		this.errCB(errMap);
	}
};

SignAsyncCall.prototype._addcmd = function(cmdMap) {
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

SignAsyncCall.prototype._runcmd = function() {
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
				m.smartpkiReq = 'sign';
				SMARTPKILib.callChromeAP(m);
			}
		}
	} else {
		this._npruncmd();
	}
};

SignAsyncCall.prototype._npruncmd = function() {
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
		case 'LoadCertificate':
			retCode = this.npObj.LoadCertificate();
			cb = m.cb;
			break;
		case 'LoadCertificateByHca':
			retCode = this.npObj.LoadCertificateByHca(m.pin);
			cb = m.cb;
			break;
		case 'Sign':
			if (this.useAsync) {
				var me = this;
				var acb = function(obj) {
					if (me.status == 2) {
						me.status = 1;
					}
					var code = me.npObj.GetErrorCode();
					if (code == 0) {
						me.status = 0;
						me._addcmd(null);
					} else {
						me._error({cmd:m.cmd, errorCode:retCode, errorMessage:me.npObj.GetErrorMessage()});
					}
				};
				if (this.npObj.signAsync(m.pin, m.signTime, acb) == 0) {
					this.status = 2;
					return;
				}
			} else {
				retCode = this.npObj.Sign(m.pin, m.signTime);
			}
			break;
		case 'Output':
			cb = m.cb;
			cbParam = this.npObj.Output(m.format);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'ReadUserData':
			cb = m.cb;
			cbParam = this.npObj.ReadUserData(m.pin);
			retCode = this.npObj.GetErrorCode();
			break;
		case 'LoadContent':
			retCode = this.npObj.LoadContent(m.content);
			break;
		case 'LoadPkcs7':
			retCode = this.npObj.LoadPkcs7(m.content);
			break;
		case 'GetAll':
			retCode = this.npObj.GetErrorCode();
			cb = m.cb;
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
				if (cbParam == null) {
					cbParam = new CertProp();
					copyProperty(this.npObj, cbParam);
				}
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
SignAsyncCall.prototype.cancelCall = function() {
	this.cmdQueue[0] = {cmd:'cancelCall'};
};

/**
 * 執行一個 function
 */
SignAsyncCall.prototype.then = function(func) {
	//this.cmdQueue[0] = {cmd:'then', func:func};
	this._addcmd({cmd:'then', func:func});
	return this;
};

/**
 * 初始化讀卡機
 * @param soltIndex - 傳入 -1 則會掃瞄所有讀卡機
 * @param driverType - 驅動類型
 * @param style - PKCS7 屬性
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.Initial = function (soltIndex, driverType, style) {
	this._addcmd({cmd:'Initial', soltIndex:soltIndex, driverType:driverType, style:style});
	return this;
};

/**
 * 取得卡片憑證
 * @param callback - 成功後呼叫此 function callback(certProp) {...}, 可取得憑證資料
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.LoadCertificate = function (callback) {
	this._addcmd({cmd:'LoadCertificate', cb:callback});
	return this;
};

/**
 * 取得HCA卡片憑證
 * @param pin - 卡片pin
 * @param callback - 成功後呼叫此 function callback(certProp) {...}, 可取得憑證資料
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.LoadCertificateByHca = function (pin, callback) {
	this._addcmd({cmd:'LoadCertificateByHca', pin:pin, cb:callback});
	return this;
};

/**
 * 載入待簽章內容
 * @param content
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.LoadContent = function (content) {		
	this._addcmd({cmd:'LoadContent', content:content});
	return this;
};

/**
 * 載入PKCS7內容
 * @param content
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.LoadPkcs7 = function (content) {
	this._addcmd({cmd:'LoadPkcs7', content:content});
	return this;
};

/**
 * 執行簽章
 * @param pin - 卡片
 * @param signTime - 傳入 0 則使用目前時間
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.Sign = function(pin, signTime) {		
	this._addcmd({cmd:'Sign', pin:pin, signTime:signTime});
//	this._addcmd({cmd:'signAsync', pin:pin, signTime:signTime});
	return this;
};

/**
 * 將簽章結果輸出
 * @param format
 * @param callback 成功後呼叫傳入之 function callback(output) {...}
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.Output = function(format, callback) {
	this._addcmd({cmd:'Output', format:format, cb:callback});
	return this;
};

/**
 * 讀取工商憑證附卡授權資訊
 * @param pin
 * @param callback - 成功後呼叫此 function callback(userData) {...}, 可取得內容
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.ReadUserData = function (pin, callback) {
	this._addcmd({cmd:'ReadUserData', pin:pin, cb:callback});
	return this;
};

/**
 * 取得憑證屬性  
 * @param callback - 成功後呼叫此 function callback(certProp) {...}, 可取得憑證資料
 * @returns {SignAsyncCall}
 */
SignAsyncCall.prototype.GetAll = function(callback) {
	this._addcmd({cmd:'GetAll', cb:callback});
	return this;
};

/** 釋放資源 */
SignAsyncCall.prototype.Close = function() {
	this._addcmd({cmd:'Close'});
	return this;
};

function checkCertType(needCertTypeArray,usetCertType) {
    var errMessage="憑證檢查錯誤, 請插入";
    var needCertName="";
    for (var i=0;i<needCertTypeArray.length;i++)
    {        
        var needCertType=needCertTypeArray[i];
        if (needCertType==usetCertType)
            return null;
            
        if (needCertName=="")
            needCertName+=getCertName(needCertType);
        else
            needCertName+=" 或 " + getCertName(needCertType);
    }
    if ("公司憑證 或 分公司憑證 或 政府單位憑證 或 商號憑證 或 學校憑證 或 社團法人憑證 或 自由職業事務所憑證 或 其他團體憑證 或 附屬機關憑證 或 行政法人憑證 或 財團法人憑證 或 醫事機構憑證"==needCertName)
    	needCertName = "單位憑證";

	return errMessage+needCertName;
}

function getCertName(certType)
{
    switch(certType)
    {
        case CERT_CHT_PERSON :
            return "自然人憑證";
        case CERT_CHT_COMPANY :
            return "公司憑證";
        case CERT_CHT_BRANCH_COMPANY :
            return "分公司憑證";
        case CERT_CHT_GOVERNMENT_NUIT :
            return "政府單位憑證";
        case CERT_CHT_SERVER :
            return "伺服器憑證";
        case CERT_CHT_BUSINESS :
            return "商號憑證";
        case CERT_CHT_SCHOOL :
            return "學校憑證";
        case CERT_CHT_JURIDICAL :
            return "社團法人憑證";
        case CERT_CHT_FREE_JOB :
            return "自由職業事務所憑證";
        case CERT_CHT_OTHER_GROUP :
            return "其他團體憑證";
        case CERT_CHT_AUXILIARY_GOVERNMENT_NUIT :
            return "附屬機關憑證";
        case CERT_CHT_GOVERNMENT_JURIDICAL :
            return "行政法人憑證";
        case CERT_CHT_SYNDICATE :
            return "財團法人憑證";
        case CERT_CHT_HEALTH_PERSON :
            return "醫事人員憑證";
        case CERT_CHT_HEALTH_ORGN :
            return "醫事機構憑證";
        case CERT_CHT_FOREIGN :
            return "外來人口憑證";
        case CERT_CHT_PARTNER_COMPANY :
            return "有限合夥公司";
        default:
            return "其它憑證";
    }
}

/////////////////////////////////////////////////////////////////////////////
//檢查元件是否已安裝
//注意不可在 page onload 內直接呼叫, 必須再延遲一小段時間
/////////////////////////////////////////////////////////////////////////////
function isInstalled(obj) {
	return;
}

function isPkiInstalled(obj, warning) {
	if(!isEdge()){
		//IE
		var aninfo = SMARTPKILib.checkANInfo(obj);
		if (aninfo.npObj != null) {
			setPkiReady(true); //元件已安裝
			return true;
		}
		
		var cinfo = SMARTPKILib.checkChromeInfo(warning);
		if (cinfo.isChrome) {
			if (cinfo.ready) {
				var apcheck = new Object();
				apcheck.cancelCall = function(){};
				apcheck._error = function (msg) {
					setPkiReady(false);
					
					if(warning==false){
						return;
					}
					
					if (msg.errorCode == '20003') {
						if (confirm('尚未安裝或未啟用SmartPKI元件\n請確認是否要下載安裝程式? 安裝完畢後, 請重新載入此頁面')) {
							location.href = installerLocation;
						}
					} else {
						alert(msg.errorMessage);
					}
				};
				
				apcheck._chromeready = function (msg){
					if (msg.version < required_version && confirm('此頁面需要新版 SmartPKI 元件才能使用\n請確認是否要下載安裝程式? 安裝完畢後, 請重新載入此頁面')) {
						location.href = installerLocation;
					}
				};
				SMARTPKILib.openChromeAP(apcheck);
		    } else {
		    	if(warning==false){
					return false;
				}
		    	
		    	if (aninfo.promptMsg) {
			    	if (confirm(aninfo.promptMsg+"請確認是否要下載安裝程式?\n\n安裝完畢後, 請重新載入此頁面")) {
			    		location.href = installerLocation;
			    	}
			    }
		    }
			
			setPkiReady(cinfo.ready);
		    return cinfo.ready;
		} else {
			if(warning==false){
				return;
			}
			
			if (aninfo.unsupportMsg) {
				alert(aninfo.unsupportMsg);
		    } else if (aninfo.promptMsg) {
		    	if (confirm(aninfo.promptMsg+"請確認是否要下載安裝程式? \n\n安裝完畢後, 請重新載入此頁面")) {
		    		location.href = installerLocation;
		    	}
		    } else {// aninfo.npObj == null
		    	alert('偵測到元件已安裝但無法使用，當瀏覽器詢問是否允許此元件執行時，請務必選擇允許。');
		    }
		    return false;
		}
	} else {
		// for Edge
		//啟動提示安裝 Edge 元件 timer
		showInstallerEdge = setTimeout(function(){
			if(warning==false){
				return;
			}
			
			if (getPkiReady()==false && confirm('請確認是否要至市集取得「SmartPKI 多憑證安控延伸模組」? \n\n安裝完畢後, 請重新載入此頁面')) {
				location.href = installerEdgeExt;
			}
		}, 300);
	}

}

//====================
//以下為用戶端 sample code
//====================
function onSignPki(needCertTypeArray) {
	var formObject = getTargetForm();
	if(formObject==null){
		return false; // formObject 不存在
	}
	
	var content=formObject.content.value;
	var pin = formObject.pin.value;
	formObject.signedData.value="";
	
	// 不傳送pin碼至server
	//formObject.pin.value="";
	
	if(!isEdge()){
		var signAsyncCall = new SignAsyncCall();
		signAsyncCall.initObject(document.getElementById('Pkcs7Sign'), function (msg) {
			alert(msg.errorMessage);
			hideBlockUI();
			pkiResult.errorCode = msg.errorCode;
			pkiResult.errorMessage = msg.errorMessage;
		}).then(function() {});
		signAsyncCall.Initial(-1, DRIVER_TYPE_GD, PKCS7_DETACHED|PKCS7_NOATTR);
		if (needCertTypeArray != null) {
			
			// HCA 卡片需要改用LoadCertificateByHca(PIN)
			// HCA卡片讀取憑證前要先輸入PIN碼	
			// 	signAsyncCall.LoadCertificateByHca(pin, function(certProp) {
		signAsyncCall.LoadCertificateByHca(pin, function(certProp) {
			if (needCertTypeArray != null) {
				/*
				var currentTime = new Date();
			    if (certProp.GetNotAfter()*1000<currentTime.getTime())
			    {
			        alert("憑證已經過期!");
			    }
			    if (certProp.GetNotAfter()*1000<=currentTime.getTime()+30*24*60*60*1000)
			        alert("憑證即將到期, 請至所屬的憑證管理中心辦理展延事誼!");
			    */
				var err = checkCertType(needCertTypeArray, certProp.GetCertType());
				if (err != null) {
					signAsyncCall.cancelCall();
					alert(err);
					hideBlockUI();
				}
			}
		});
		}
		signAsyncCall.LoadContent(content)
		.Sign(pin, 0)
		.Output(FORMAT_ASN1_WITH_BASE64, function(output) {
			formObject.signedData.value = output;
		}).GetAll(function(certProp) {
			//fetchCertificateDataToForm(formObject, certProp);
			//hideBlockUI();
			//formObject.submit();
			getCertificateData(formObject, pin);
		});
	} else {
		
		// for Edge
		var requestData={
				cmd: "Sign",
				soltIndex: -1,
				driverType: DRIVER_TYPE_GD,
				style: PKCS7_DETACHED|PKCS7_NOATTR,
				content: content,
				pin: pin,
				signTime: 0,
				format: FORMAT_ASN1_WITH_BASE64,
				loadCertificate: 1, //是否讀取憑證內容, 1:是
				readUserData: 1 //是否讀取屬性憑證憑證內容, 1:是, loadCertificate 必須是 1 
			};
		
		var event = new CustomEvent("SmartPKIAppRequest", { detail: requestData } );
	    document.dispatchEvent(event);
	}
    
	return false;//等非同步呼叫簽章成功後, 才自行 submit form
}
//
function getCertificateData(formObject, pin){
	var signAsyncCall = new SignAsyncCall();
	signAsyncCall.initObject(document.getElementById('Pkcs7Sign'), function (msg) {
		pkiResult.errorCode = msg.errorCode;
		pkiResult.errorMessage = msg.errorMessage;
	})
	.Initial(-1, DRIVER_TYPE_GD, PKCS7_DETACHED|PKCS7_NOATTR)
	.LoadCertificateByHca(pin, function(certProp) {
		fetchCertificateDataToForm(formObject, certProp);
		var certType = certProp.GetCertType();
		if (pin!=null && typeof formObject.attributeCertData != "undefined" && formObject.attributeCertData !=null && 
			(certType==CERT_CHT_COMPANY || certType==CERT_CHT_PARTNER_COMPANY || certType==CERT_CHT_BRANCH_COMPANY || certType==CERT_CHT_BUSINESS) && 
			certProp.IsMainCard()==2)
		{
			signAsyncCall.ReadUserData(pin, function(userData) {
				formObject.attributeCertData.value=userData;
				//讀取完屬性憑證再送
				hideBlockUI();
				formObject.submit();
			});
		}else{
			//沒有屬性憑證，直接送出
			hideBlockUI();
			formObject.submit();
		}
	});
}

//由原本的 getCertificateData(formObject, pin){...} 移出
function fetchCertificateDataToForm(formObject, Pkcs7Sign) {
    // 取得憑證序號
    if (typeof formObject.certSn != "undefined" && formObject.certSn !=null)
        formObject.certSn.value=Pkcs7Sign.GetSerialNumber();
    // 取得憑證卡號
    if (typeof formObject.certCardNumber != "undefined" && formObject.certCardNumber !=null && Pkcs7Sign.GetCertType()!=CERT_CHT_HEALTH_PERSON && Pkcs7Sign.GetCertType()!=CERT_CHT_HEALTH_ORGN)
        formObject.certCardNumber.value=Pkcs7Sign.GetCardNumber();
    // 取得憑證類別(client端無法取得，改從server拿)
    //if (typeof formObject.certCaType != "undefined" && formObject.certCaType !=null)
    //    formObject.certCaType.value=Pkcs7Sign.GetCertType();
    // 取得自然人序號
    if (typeof formObject.subjectSN != "undefined" && formObject.subjectSN !=null && (Pkcs7Sign.GetCertType()==CERT_CHT_PERSON || Pkcs7Sign.GetCertType()==CERT_CHT_HEALTH_PERSON || Pkcs7Sign.GetCertType()==CERT_CHT_FOREIGN))
        formObject.subjectSN.value=Pkcs7Sign.GetSubjectSN();
    // 取得擁有者名稱
    if (typeof formObject.certOwnerName != "undefined" && formObject.certOwnerName !=null)
        formObject.certOwnerName.value=Pkcs7Sign.GetName();
    // 取得憑證擁有者ID
    if (typeof formObject.ownerId != "undefined" && formObject.ownerId !=null)
        formObject.ownerId.value=Pkcs7Sign.GetID();
    // 取得憑證主卡或附卡
    if (typeof formObject.mainCard != "undefined" && formObject.mainCard !=null && Pkcs7Sign.GetCertType()!=CERT_CHT_PERSON && Pkcs7Sign.GetCertType()!=CERT_CHT_HEALTH_PERSON && Pkcs7Sign.GetCertType()!=CERT_CHT_FOREIGN)
        formObject.mainCard.value=Pkcs7Sign.IsMainCard();	
    // 取得憑證主旨
    if (typeof formObject.certSubject != "undefined" && formObject.certSubject !=null)
        formObject.certSubject.value=Pkcs7Sign.GetSubjectName().replace("serialNumber", "SERIALNUMBER");
    // 取得憑證主體
    if (typeof formObject.certBody != "undefined" && formObject.certBody !=null)
        formObject.certBody.value=Pkcs7Sign.GetCertificate();
}

/////////////////////////////////////////////////////////////////////////////
//讀取憑證
/////////////////////////////////////////////////////////////////////////////
function onGetCertificate(formObject, needCertTypeArray, callBack) { 
	var ret = true;
	var signAsyncCall = new SignAsyncCall();
	signAsyncCall.initObject(document.getElementById('Pkcs7Sign'), function (msg) {
		pkiResult.errorCode = msg.errorCode;
		pkiResult.errorMessage = msg.errorMessage;
	})
	.Initial(-1, DRIVER_TYPE_GD, PKCS7_DETACHED|PKCS7_NOATTR)
	.LoadCertificate(function(certProp) {
	fetchCertificateDataToForm(formObject, certProp);
	if(callBack!=null){
		callBack();
	}
	var err = null;
	if(needCertTypeArray!=null){
		err = checkCertType(needCertTypeArray, certProp.GetCertType());
	}
	if (err != null) {
	alert(err);
	signAsyncCall.cancelCall();
	ret = false;
	}  
	}); 
	return ret;
}
/////////////////////////////////////////////////////////////////////////////
//判斷取得navigator
/////////////////////////////////////////////////////////////////////////////
function getNavitgator(nv){
	try{
		var counter = 0;
		var win = window;
		while(win!=parent.window){
			win = parent.window;
			counter++;
			if(counter>10){//異常
				return nv;
			}
		}
		return win.navigator;
	}catch (e) {
		return nv;
	}
}

/////////////////////////////////////////////////////////////////////////////
//for Edge Strat
/////////////////////////////////////////////////////////////////////////////
var showInstallerEdge; //提示安裝 Edge 元件 timer

// 接收 App 回傳
document.addEventListener("SmartPKIAppResponse",
	function (e) {
		if (e.detail && e.detail["cmd"]) {
			var response=e.detail; // 回傳內容
			
			if(response["errorCode"]){
				hideBlockUI();
				console.log(response);
				alert(response["errorMessage"]);
				return;
			}
			
			//憑證登入 form
			var formObject=getTargetForm();
			
			var cmd = response["cmd"];
			switch(cmd) {
				case "ConnectApp":
					//console.log(response);
					setPkiReady(true);
					clearTimeout(showInstallerEdge); //清除 timer
					break;
				case "DisconnectApp":
					//console.log(response);
					alert("SmartPKI App 連線中斷, 請重新進入此網頁");
    				break;
				case "Sign":
					//console.log(response);
					if(formObject){
						fetchCertificateDataToFormFromJson(formObject, response);
						formObject.submit();
					}
					
    				break;
    			/*
				case "LoadCertificate":
					console.log(response);
					fetchCertificateDataToFormFromJson(certLoginForm, response);
    				break;
				case "EncryptData":
    				break;
				case "Decrypt":
    				break;
    			case "ReadUserData":
					console.log(response);
					break;
    			*/
				default:
					console.log("cmd not allow: " + cmd);
					break;
			}
		}
	}, false);

// 是否 Edge
function isEdge(){
	return (navigator.userAgent.indexOf("Edge/") !== -1);
}

//將憑證資料設回 form
function fetchCertificateDataToFormFromJson(formObject, jsonData) {
	// 取得簽章結果
    if (typeof formObject.signedData != "undefined" && formObject.signedData !=null)
        formObject.signedData.value=jsonData["signedData"];
    // 取得憑證序號
    if (typeof formObject.certSn != "undefined" && formObject.certSn !=null)
        formObject.certSn.value=jsonData["serialNumber"];
    // 取得憑證卡號
    if (typeof formObject.certCardNumber != "undefined" && formObject.certCardNumber !=null && jsonData["certType"]!=CERT_CHT_HEALTH_PERSON && jsonData["certType"]!=CERT_CHT_HEALTH_ORGN)
        formObject.certCardNumber.value=jsonData["cardNumber"];
    // 取得憑證類別(client端無法取得，改從server拿)
    if (typeof formObject.certCaType != "undefined" && formObject.certCaType !=null)
        formObject.certCaType.value=jsonData["certType"];
    // 取得自然人序號
    if (typeof formObject.subjectSN != "undefined" && formObject.subjectSN !=null && (jsonData["certType"]==CERT_CHT_PERSON || jsonData["certType"]==CERT_CHT_HEALTH_PERSON || jsonData["certType"]==CERT_CHT_FOREIGN))
        formObject.subjectSN.value=jsonData["subjectSN"];
    // 取得擁有者名稱
    if (typeof formObject.certOwnerName != "undefined" && formObject.certOwnerName !=null)
        formObject.certOwnerName.value=jsonData["name"];
    // 取得憑證擁有者ID
    if (typeof formObject.ownerId != "undefined" && formObject.ownerId !=null)
        formObject.ownerId.value=jsonData["id"];
    // 取得憑證主卡或附卡
    if (typeof formObject.mainCard != "undefined" && formObject.mainCard !=null && jsonData["certType"]!=CERT_CHT_PERSON && jsonData["certType"]!=CERT_CHT_HEALTH_PERSON && jsonData["certType"]!=CERT_CHT_FOREIGN)
        formObject.mainCard.value=jsonData["isMainCard"];	
    // 取得憑證主旨
    if (typeof formObject.certSubject != "undefined" && formObject.certSubject !=null)
        formObject.certSubject.value=jsonData["subjectName"].replace("serialNumber", "SERIALNUMBER");
    // 取得憑證主體
    if (typeof formObject.certBody != "undefined" && formObject.certBody !=null)
        formObject.certBody.value=jsonData["certificate"];
    hideBlockUI();
}

/////////////////////////////////////////////////////////////////////////////
//for Edge End
/////////////////////////////////////////////////////////////////////////////