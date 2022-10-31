<template>
  <div>新增出國計畫</div>
  <div class="row">
    <div>備註： 交通費：出差人員坐飛機、船舶及長途大眾陸運工具所需費用。</div>
    <div>
      生活費：出差人員之住宿費、膳食費及零用費(包含市區火車票費、市區公共汽車車票費、市區捷運車票費、洗衣費、小費及其他與生活有關之各費用)。
    </div>
    <div>辦公費：出差人員出國之手續費、保險費、行政費、禮品及交際費、雜費</div>
    <div>
      出國經費採實報實支，旅費預算合計金額，請加計於契約第2條實報實支價金中(不含乙方自籌經費及代管甲方補助款)。
    </div>
    <div>
      出國經費採實報實支，請依行政院「國外出差旅費報支要點」(請參閱作業手冊附錄15)規定辦理。
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-6">
      <n-checkbox-group v-model:value="cities">
        <n-space item-style="display: flex;"
          >出國類別:
          <n-checkbox value="Beijing" label="開會" />
          <n-checkbox value="Shanghai" label="訪問" />
          <n-checkbox value="Guangzhou" label="談判" />
          <n-checkbox value="Shenzen" label="考察" />
          <n-checkbox value="Shenzen" label="其他" />
          <n-input></n-input>
        </n-space>
      </n-checkbox-group>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="擬前往地區(國家或城市或其它) "
          aria-label="擬前往地區(國家或城市或其它) "
          value=""
        />
        <label for="floatingSelect">擬前往地區(國家或城市或其它) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="城市 "
          aria-label="城市 "
          value=""
        />
        <label for="floatingSelect">城市 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">出國內容重點 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">出國效益 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="預計天數 "
          aria-label="預計天數 "
          value=""
        />
        <label for="floatingSelect">預計天數 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="擬派人數 "
          aria-label="擬派人數 "
          value=""
        />
        <label for="floatingSelect">擬派人數 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="旅費預算-交通費(未稅) "
          aria-label="旅費預算-交通費(未稅) "
          value=""
        />
        <label for="floatingSelect">旅費預算-交通費(未稅) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="旅費預算-生活費(未稅) "
          aria-label="旅費預算-生活費(未稅) "
          value=""
        />
        <label for="floatingSelect">旅費預算-生活費(未稅) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="旅費預算-辦公費(未稅) "
          aria-label="旅費預算-辦公費(未稅) "
          value=""
        />
        <label for="floatingSelect">旅費預算-辦公費(未稅) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="旅費總計(未稅) "
          aria-label="旅費總計(未稅) "
          value=""
        />
        <label for="floatingSelect">旅費總計(未稅) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="旅費總計(含稅) "
          aria-label="旅費總計(含稅) "
          value=""
        />
        <label for="floatingSelect">旅費總計(含稅) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">歸屬預算科目 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">歸屬預算科目(舊格式) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">備註 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">排序 </label>
      </span>
    </div>
  </div>
  <save-btn></save-btn>
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
