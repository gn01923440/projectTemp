package com.dgi.platform.security;

import java.util.Objects;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;


@Component
public class XssPattern {

	public static String cleanXSS(String value) {
		if (Objects.isNull(value)) {
			return value;
		}
		for (Pattern scriptPattern : patterns) {
			value = scriptPattern.matcher(value).replaceAll("");
		}
		return value;
	}

	private static Pattern[] patterns = new Pattern[] {
			// Script fragments
			Pattern.compile("<script>(.*?)</script>", Pattern.CASE_INSENSITIVE),
			// src='...'
			Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'",
					Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			Pattern.compile("src[\r\n]*=[\r\n]*\\\"(.*?)\\\"",
					Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			// lonely script tags
			Pattern.compile("</script>", Pattern.CASE_INSENSITIVE),
			Pattern.compile("<script(.*?)>", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			// eval(...)
			Pattern.compile("eval\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			// expression(...)
			Pattern.compile("expression\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			// javascript:...
			Pattern.compile("javascript:", Pattern.CASE_INSENSITIVE),
			// vbscript:...
			Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE),
			// onload(...)=...
			Pattern.compile("onload(.*?)=", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			Pattern.compile("alert(.*?)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL),
			// Pattern.Pattern("(document|onload|eval|script|img|svg|onerror|javascript|alert)\\\\b")
			Pattern.compile("((alert|on\\w+|function\\s+\\w+)\\s*\\(\\s*(['+\\d\\w](,?\\s*['+\\d\\w]*)*)*\\s*\\))"),
			// Checks any html tags i.e. <script, <embed, <object etc.
			Pattern.compile(
					"|(<(script|iframe|embed|frame|frameset|object|img|applet|body|html|style|layer|link|ilayer|meta|bgsound))") };

}
