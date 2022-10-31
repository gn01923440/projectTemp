<template>
  <vee-form :validation-schema="schema" @submit="changePw">
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">姓名</p></span
      ><span class="">大傑</span>
    </div>
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">帳號</p></span
      ><span class="">aabbcc1234</span>
    </div>
    <!-- Password -->
    <div class="col-6">
      <span class="form-floating">
        <vee-field
          type="password"
          :bails="false"
          class="form-control"
          name="password"
        />
        <label for="floatingSelect">新密碼</label>
      </span>
      <ErrorMessage class="text-danger" name="password" />
    </div>
    <!-- Confirm Password -->
    <div class="col-6">
      <span class="form-floating">
        <vee-field
          type="password"
          class="form-control"
          name="confirm_password"
        />
        <label for="floatingSelect">確認密碼</label>
      </span>
      <ErrorMessage class="text-danger" name="confirm_password" />
    </div>
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">密碼強度規定</p></span
      ><span class=""
        >密碼必須包含數字、字母大小寫、特殊符號三種
        長度至少12位，密碼不能與前三次相同</span
      >
    </div>
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">
          密碼到期日剩餘天數
        </p></span
      ><span class="">41天</span>
    </div>
    <button class="btn" type="submit">Submit</button>
  </vee-form>
</template>

<script setup>
const schema = {
  password: "required|min:12|max:16|password_regex",
  confirm_password: "passwords_mismatch:@password",
};

const changePw = (values) => {
  console.log(values);
};
</script>

<style></style>
