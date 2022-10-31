package com.dgi.platform.security;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class XssStringJsonDeserializer extends JsonDeserializer<String> {

	@Override
	public Class<String> handledType() {
		return String.class;
	}

	@Override
	public String deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
		return XssPattern.cleanXSS(jsonParser.getValueAsString());
	}
}
