package com.dgi.platform.security;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.springframework.web.servlet.HandlerMapping;

/**
 * XssHttpServletRequestWrapper
 */
public class XssHttpServletRequestWrapper extends HttpServletRequestWrapper {

	public XssHttpServletRequestWrapper(HttpServletRequest request) {
		super(request);
	}

	/**
	 * @param name
	 * @return
	 */
	@Override
	public String getHeader(String name) {
		String value = super.getHeader(name);
		return XssPattern.cleanXSS(value);
	}

	/**
	 * @param name
	 * @return
	 */
	@Override
	public String getParameter(String name) {		
		String value = super.getParameter(name);
		return XssPattern.cleanXSS(value);
	}

	/**
	 * @param name
	 * @return
	 */
	@Override
	public String[] getParameterValues(String name) {
		String[] values = super.getParameterValues(name);
		if (values != null) {
			int length = values.length;
			String[] escapseValues = new String[length];
			for (int i = 0; i < length; i++) {
				escapseValues[i] = XssPattern.cleanXSS(values[i]);
			}
			return escapseValues;
		}
		return super.getParameterValues(name);
	}


	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Object getAttribute(String name) {
		if (HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE.equals(name)) {
			Map uriTemplateVars = (Map) super.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
			if (Objects.isNull(uriTemplateVars)) {
				return uriTemplateVars;
			}
			Map newMap = new LinkedHashMap<>();
			uriTemplateVars.forEach((key, value) -> {
				if (value instanceof String) {
					newMap.put(key, XssPattern.cleanXSS((String) value));
				} else {
					newMap.put(key, value);

				}
			});
			return newMap;
		} else {
			return super.getAttribute(name);
		}
	}
}