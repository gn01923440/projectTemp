import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  numeric,
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  alpha_num as alphaNum,
  alpha_dash as alphaDash,
  not_one_of as excluded,
  confirmed,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("excluded", excluded);
    defineRule("menu_excluded", excluded);
    defineRule("year", numeric);
    defineRule("sysno", alphaDash);
    defineRule("numeric", numeric);
    defineRule("passwords_mismatch", confirmed);
    defineRule("password_regex", (value) => {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-])[a-zA-Z\d!@#$%^&*()\-]{12,16}$/.test(
        value
      );
    });

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `必填欄位`,
          min: `長度過短`,
          max: `長度過長`,
          alpha_spaces: `只可輸入字符及空白`,
          email: `錯誤郵件地址`,
          min_value: `數值過低`,
          max_value: `數值過高`,
          excluded: `不可使用此字詞`,
          menu_excluded: `未選擇`,
          numeric: `僅可輸入數字`,
          year: `請輸入正確年份`,
          sysno: `請輸入正確系統編號，例: MP11102-0018`,
          passwords_mismatch: `密碼不符合`,
          password_regex: `密碼須由12-16字母大小寫、數字、特殊符號組成`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
