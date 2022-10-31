<template>
  <div>輔導廠商</div>
  <div class="row">
    <button class="btn btn-danger col-2">送審</button>
    <button class="btn btn-danger col-2">審查日誌</button>
    <button class="btn btn-danger col-2">匯出(Excel)</button>
    <button class="btn btn-danger col-2">推薦(PDF)</button>
  </div>
  <div class="text-danger">
    1.
    輔導廠商明細表於108年度進行調整及簡化，並「務必先行下載手冊格式詳閱說明」(首頁/相關文件/科技計畫作業手冊/第四章/格式4-13-04)
  </div>
  <div class="text-danger">
    2.
    手冊格式「非」系統批次匯入檔案格式，請勿使用手冊格式進行填寫資料匯入系統，系統批次匯入檔案格式請至執行成果/輔導廠商頁面中點選批次匯入的按鈕進行下載
  </div>
  <br />
  <h6>期未狀態:</h6>

  <div class="row">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'DevSubsidy' }"
          >研發補助</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'TechConsult' }"
          >技術輔導</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link class="nav-link btn" role="tab" :to="{ name: 'FirmVisit' }"
          >訪視諮詢</router-link
        >
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
