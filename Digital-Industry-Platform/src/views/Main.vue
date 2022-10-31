<template>
  <div class="row col-12">
    <div class="menu shadow">
      <Menu :menuList="menuList" />
    </div>
    <div class="menucontent">
      <!--<Content></Content>-->
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </div>
  </div>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useUserStore } from "../stores/user";
const store = useUserStore();
const { menuList } = storeToRefs(store);
onMounted(() => {
  store.getMenuStore();
});
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.menu {
  width: 300px;
  /* position:fixed; */
  height: 100vh;
  overflow: auto;
}

.menucontent {
  width: calc(100% - 300px);
  height: 100vh;
  overflow: auto;
}
</style>
