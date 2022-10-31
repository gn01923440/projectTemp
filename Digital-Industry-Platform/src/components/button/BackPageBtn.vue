<template>
  <button
    class="btn backing-out"
    style="width: 6rem"
    type="button"
    @click="gotoback"
  >
    <i class="fas fa-undo-alt"></i>
    <slot name="description">返回</slot>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoback = () => {
  router.go(-1);
};
</script>

<style></style>
