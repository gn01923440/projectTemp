"use strict";

var postTarget;
var timeoutId;
var doGetUserCert = false; //是否讀取憑證
var chtPkiFunc ; // 操作代碼
var doAndSubmit = false; //執行結束後是否submit
var envirInfo = null; // 環境資訊
var isChtPkiReady = false;// 跨平台元件可用
var MoicaPkiErrMsg = "請安裝內政部憑證管理中心「跨平台網頁元件」並啟用元件，\n安裝元件後請重新啟用網頁，\n若「跨平台網頁元件」執行有問題可以詢問內政部憑證管理中心";

function setChtPkiReady(ready){
	isChtPkiReady=ready;
}

function getChtPkiReady(){
	return isChtPkiReady;
}

function runMoicaPkiSign(){ // 執行簽章，若未安裝跨平台元件，請用戶安裝
	if (isChtPkiReady) {
		makeSignature();
	} else {
		alert(MoicaPkiErrMsg);
		hideBlockUI();
	}
}
function runMoicaPkiGetUserCert(formObject){ // 執行讀取憑證，若未安裝跨平台元件，請用戶安裝
	if (isChtPkiReady) {
		onlyGetUserCert(formObject);
	} else {
		alert(MoicaPkiErrMsg);
		hideBlockUI();
	}
}

function postData(target, data) {
	if (!http.sendRequest) {
		return null;
	}
	http.url = target;
	http.actionMethod = "POST";
	var code = http.sendRequest(data);
	if (code != 0)
		return null;
	return http.responseText;
}

function checkFinish() {
	if (postTarget) {
		postTarget.close();
	}
}

function makeSignature() {
	doAndSubmit=true;
	var ua = window.navigator.userAgent;
	if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1) //is IE, use ActiveX
	{
		var tbsPackage = getTbsPackage();
		var data = postData("http://localhost:61161/sign", "tbsPackage=" + tbsPackage);
		if (data)
			setSignature(data);
	} else {
		postTarget = window.open("http://localhost:61161/popupForm", "簽章中",
				"height=200, width=200, left=100, top=20");
		timeoutId = setTimeout(checkFinish, 3500);
	}
}

function getTbsPackage() {
	var tbsData = {};
	
	var formObject=getTargetForm();
	if(formObject){
		tbsData["tbs"] = encodeURIComponent(formObject.content.value);
		tbsData["tbsEncoding"] = "NONE";
		tbsData["hashAlgorithm"] = "SHA256";
		tbsData["withCardSN"] = "false";
		tbsData["pin"] = encodeURIComponent(formObject.pin.value);
		tbsData["nonce"] = "";
		tbsData["func"] = "MakeSignature";
		tbsData["signatureType"] = "PKCS7";
	}
	
	var json = JSON.stringify(tbsData);
	return json;
}

function setSignature(signature) {
	var ret = JSON.parse(signature);

	if (ret.ret_code != 0) {
		var msg = "簽章檢測失敗, 代碼=" + ret.ret_code.toString(16) + ", 原因:"
				+ ret.message;
		if (ret.last_error)
			msg = msg + ", 次代碼=" + ret.last_error + ", 次原因:" + ret.message2;
		alert(msg);
		hideBlockUI();
	} else {
		//簽章成功後執行
		var formObject=getTargetForm();
		if(formObject){
			formObject.signedData.value = ret.signature;
			
			// 取得加密憑證
			if (typeof formObject.encrypCert != "undefined"
				&& formObject.encrypCert != null) {
				doGetUserCert = true;
			}
			
			// 取得卡號
			if (typeof formObject.certCardNumber != "undefined"
				&& formObject.certCardNumber != null) {
				doGetUserCert = true;
			}
			
			if(doGetUserCert){
				getUserCert();
			} else {
				if(doAndSubmit){
					formObject.submit();
				}
			}
			
		}
	}
	
}

// 只做取憑證資訊動作
function onlyGetUserCert(formObject) {
	//doGetUserCert=true;
	chtPkiFunc = "GetUserCert";
	doAndSubmit=false;
	setTargetForm(formObject);
	getUserCert();
}

// 檢查憑證資訊
function checkEnvir() {
	chtPkiFunc = "CheckEnvir";
	doAndSubmit=false;
	var ua = window.navigator.userAgent;
	if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1) {// is IE
    	var data = postData("http://localhost:61161/pkcs11info", "");
    	if (data){
			setChtPkiReady(true); // 跨平台網頁元件已啟用
		}
	} else { // is not ie
		postTarget = window.open("http://localhost:61161/popupForm", "元件檢查中", "height=200, width=200, left=100, top=20");
		timeoutId = setTimeout(checkFinish, 500);
	}
	
}

function getUserCert() {
	var ua = window.navigator.userAgent;
	if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1) //is IE, use ActiveX
	{
		var data = postData("http://localhost:61161/pkcs11info?withcert=true", "");
		if (data)
			setUserCert(data);
	} else {
		postTarget = window.open("http://localhost:61161/popupForm", "憑證讀取中", "height=200, width=200, left=100, top=20");
		timeoutId = setTimeout(checkFinish, 3500);
	}
}

function setUserCert(certData) {
	var ret = JSON.parse(certData);

	if (ret.ret_code != 0) {
		var msg = "簽章檢測失敗, 代碼=" + ret.ret_code.toString(16) + ", 原因:"
				+ ret.message;
		if (ret.last_error)
			msg = msg + ", 次代碼=" + ret.last_error + ", 次原因:" + ret.message2;
		alert(msg);
		return;
	}
	
	var formObject=getTargetForm();
	if(!formObject){
		return;
	}
	
	fetchCertificateData(formObject, ret);
}

function receiveMessage(event) {

	//安全起見，這邊應填入網站位址檢查
	if (event.origin != "http://localhost:61161")
		return;
	try {
		var ret = JSON.parse(event.data);
		if (ret.func) {
			if (ret.func == "getTbs") {
				clearTimeout(timeoutId);

				switch (chtPkiFunc) {
					case "CheckEnvir" : 
						//讀取pkcs11 資訊
						var tbsData = {
							"func" : "CheckEnvir"
						};
						var json = JSON.stringify(tbsData);
						postTarget.postMessage(json, "*");
						break;
					case "GetUserCert" : 
						//讀取憑證
						var tbsData = {
							"func" : "GetUserCert"
						};
						var json = JSON.stringify(tbsData);
						postTarget.postMessage(json, "*");
						break;
					default:
						//簽章
						var json = getTbsPackage();
						postTarget.postMessage(json, "*");
						break;
					
				}
				/*
				if (doGetUserCert == true) {
					//讀取憑證
					var tbsData = {
						"func" : "GetUserCert"
					};
					var json = JSON.stringify(tbsData);
					postTarget.postMessage(json, "*");
					doGetUserCert = false;
				} else {
					//簽章
					var json = getTbsPackage();
					postTarget.postMessage(json, "*");
				}
				*/

			} else if (ret.func == "sign") {
				setSignature(event.data);
			} else if (ret.func == "pkcs11info") {
				switch (chtPkiFunc) {
					case "CheckEnvir" : 
						setChtPkiReady(true); // 跨平台網頁元件已啟用
						envirInfo = event.data;
					case "GetUserCert" : 
						//讀取憑證
						setUserCert(event.data);
						break;
				}
				
			}
		} else {
			if (console)
				console.error("no func");
		}
		
	} catch (e) {
		//errorhandle
		if (console)
			console.error(e);
	}
}

if (window.addEventListener) {
	window.addEventListener("message", receiveMessage, false);
} else {
	//for IE8
	window.attachEvent("onmessage", receiveMessage);
}

//for IE8
var console = console || {
	"log" : function() {
	},
	"debug" : function() {
	},
	"error" : function() {
	}
};

//將憑證資料設回 form
function fetchCertificateData(formObject, jsonData) {
	var usage1 = "digitalSignature"; // 簽章憑證
	var usage2 = "keyEncipherment|dataEncipherment"; // 加密憑證
	var slots = jsonData.slots;
	var findCert=false;
	for ( var index in slots) {
		if (slots[index].token == null || slots[index].token === "unknown token")
			continue;

		// 取得卡號
		if (typeof formObject.certCardNumber != "undefined" && formObject.certCardNumber != null) {
			if (slots[index].token instanceof Object) {
				formObject.certCardNumber.value = slots[index].token.serialNumber;
			}
		}

		var certs = slots[index].token.certs;
		for ( var indexCert in certs) {
			if (certs[indexCert].usage == usage1) {
				// 簽章憑證資訊
				findCert=true;
				
				// 取得憑證序號
			    if (typeof formObject.certSn != "undefined" && formObject.certSn !=null) {
			    	formObject.certSn.value=certs[indexCert].sn;
			    }

			    // 取得憑證主旨
			    if (typeof formObject.certSubject != "undefined" && formObject.certSubject !=null) {
			    	formObject.certSubject.value=certs[indexCert].subjectDN.replace("serialNumber", "SERIALNUMBER");
			    }
			    
			    // 取得自然人序號
				if (typeof formObject.subjectSN != "undefined"
						&& formObject.subjectSN != null) {
					var subjectTokens = certs[indexCert].subjectDN.split(",");
					var serialNumber = subjectTokens[subjectTokens.length - 1]
							.split("=");
					if (serialNumber[0] == "serialNumber") {
						formObject.subjectSN.value = serialNumber[1];
					}
				}

			    // 取得憑證主體
			    if (typeof formObject.certBody != "undefined" && formObject.certBody !=null) {
			    	formObject.certBody.value=certs[indexCert].certb64;
			    }
			    
			    // 取得擁有者名稱
			    if (typeof formObject.certOwnerName != "undefined" && formObject.certOwnerName !=null) {
			    	formObject.certOwnerName.value=certs[indexCert].subjectCN;
			    }
			        
			    // 取得憑證擁有者ID
			    if (typeof formObject.ownerId != "undefined" && formObject.ownerId !=null) {
			    	formObject.ownerId.value=certs[indexCert].subjectID;
			    }

			}
			
			if (certs[indexCert].usage == usage2) {
				// 加密憑證資訊
				findCert=true;
				
				//設定加密憑證
				if (typeof formObject.encrypCert != "undefined" && formObject.encrypCert != null) {
					formObject.encrypCert.value = certs[indexCert].certb64;
				}
			}
		}
	}
	
	if(findCert){
		if(doAndSubmit){
			formObject.submit();
		}
	} else {
		alert("讀卡機沒插卡");
	}
	hideBlockUI();
}