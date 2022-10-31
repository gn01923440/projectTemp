<template>
  <div>
    <!-- <img src="../assets/modalogo-b.svg" alt="logo"> -->
    <h2 class="text-center deeper-blue my-3">計畫管理系統</h2>
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item rounded-0 border-0"
        v-for="menu in menuList"
        :key="menu.menuNo"
      >
        <h1 class="accordion-header py-1" :id="menu.menuNo">
          <button
            class="accordion-button rounded-0 collapsed"
            style="font-size: 18px"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + menu.menuNo"
            aria-expanded="false"
            :aria-controls="'collapse' + menu.menuNo"
          >
            <i :class="menu.menuLogo" class="mx-2"></i>{{ menu.menuName }}
          </button>
        </h1>
        <div
          :id="'collapse' + menu.menuNo"
          class="accordion-collapse collapse"
          :aria-labelledby="menu.menuNo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-0">
            <ul>
              <li
                v-for="subMenu in menu.detail"
                :key="subMenu.menuNo"
                class="p-2"
              >
                <router-link
                  :to="`${subMenu.menuHref}`"
                  class="link-secondary text-decoration-none"
                >
                  {{ subMenu.menuName }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn">登出</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["menuList"]);
</script>

<style scoped>
/* .accordion-button::after {
  background-image: none;
} */
</style>
