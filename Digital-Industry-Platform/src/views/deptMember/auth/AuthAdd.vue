<template>
  <div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="角色名稱 "
            aria-label="角色名稱 "
            value=""
          />
          <label for="floatingSelect">角色名稱 (  )</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>綱要計畫管理 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">綱要計畫查詢(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >綱要計畫查詢(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>標案計畫管理 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">綱要經費切割(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >綱要經費切割(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">標案計畫清單(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >標案計畫清單(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>計畫資料管理 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫簽約/變更/查詢作業(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >計畫簽約/變更/查詢作業(查詢+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫執行管理(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫執行管理(查詢+編輯) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">期中/期末會議紀錄(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>計畫審查作業 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">待審清單(審查) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫業務審查狀態(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">主持人查看送審狀態(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫審查管理(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >計畫審查管理(查詢+編輯+退件+發送稽催信) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">計畫審查狀態(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>圖表/報表清單 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">圖表/報表清單(匯出) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>組織及用戶管理 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">組織單位(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">組織單位(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">系統權限(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">部會用戶(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">部會用戶(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>業務相關設定 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">經費科目設定(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >經費科目設定(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">委辦單位管理(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >委辦單位管理(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">輔導廠商管理(查詢) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect"
            >輔導廠商管理(查詢+新增+編輯+刪除) </label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">發信模板(編輯) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>首頁管理 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">網頁樣板(編輯) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">部會公告(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">相關連結(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">檔案管理(查詢+新增+編輯+刪除) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div>個人資料 </div>
          <label for="floatingSelect">區塊 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">個人資料修改(編輯) </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox size="small" label="small" /> </n-space
          ><label for="floatingSelect">密碼修改(編輯) </label>
        </span>
      </div>
    </div>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>存檔 
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>返回 
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
