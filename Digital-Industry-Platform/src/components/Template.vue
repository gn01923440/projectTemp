<template>
  template page
  <DetailTemplate :objList="objList">
    <template v-slot:title> browsers </template>
  </DetailTemplate>
  <SelectTemplate :optList="optList"> </SelectTemplate>
  <vee-form
    :validation-schema="schema"
    @submit="register"
    :initial-values="userData"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button> </vee-form
  ><datepicker-lite
    :id-attr="datepickerSetting.id"
    :name-attr="datepickerSetting.name"
    :class-attr="datepickerSetting.class"
    :value-attr="datepickerSetting.value"
    :placeholder-attr="datepickerSetting.placeholder"
    :is-button-type="datepickerSetting.isButtonType"
    :year-minus="datepickerSetting.yearMinus"
    :years-range="10"
    :from="datepickerSetting.fromDate"
    :to="datepickerSetting.toDate"
    :disabled-date="datepickerSetting.disabledDate"
    :locale="datepickerSetting.locale"
    @value-changed="datepickerSetting.changeEvent"
    :disable-input="datepickerSetting.disableInput"
    :show-bottom-button="true"
  />
</template>
<script setup>
import { ref } from "vue";
import DetailTemplate from "./DetailTemplate.vue";
import SelectTemplate from "./SelectTemplate.vue";
import DatepickerLite from "vue3-datepicker-lite";
const ddate = ref("2020/02/10");
const datepickerSetting = {
  id: "birthday2",
  name: "birthday2",
  class: "myDateInput",
  value: ddate.value,
  placeholder: "Select",
  isButtonType: false,
  yearMinus: 1911,
  fromDate: "10/02/2020",
  toDate: "10/02/2021",
  disabledDate: [
    "02/10/2020",
    "03/10/2020",
    "04/10/2020",
    "05/10/2020",
    "06/10/2020",
  ],
  locale: {
    format: "YYYY-MM-DD",
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    startsWeeks: 0,
    todayBtn: "Today",
    clearBtn: "Clear",
    closeBtn: "Close",
  },
  changeEvent: (value) => {
    console.log(value + " selected!");
  },
  disableInput: false,
};
const objList = ref([
  { id: 1, value: "Chrome" },
  { id: 2, value: "Firefox" },
  { id: 3, value: "Internet Explorer" },
  { id: 4, value: "Opera" },
  { id: 5, value: "Safari" },
]);
const optList = ref([
  { id: 1, value: 108 },
  { id: 2, value: 109 },
  { id: 3, value: 110 },
  { id: 4, value: 111 },
  { id: 5, value: 112 },
]);

const schema = {
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
};
const userData = {
  country: "USA",
};
const register = async (values) => {
  try {
    console.log(values);
  } catch (error) {
    console.log("error");
    return;
  }
};
</script>
