<template>
  <div>
    <div class="col-12">
      填寫說明： <br />1.
      如計畫變更或刪減/凍結變更完成後至第1期或第2期截止日前，人力無異動者(如2/10完成刪減/凍結變更，而至4/30止無人力異動情形者)，僅需提供核復函稿日期及文號，無須重複填列人力需求異動表。<br />
      2.
      如計畫人力於第1期時無異動，請勾選『同計畫書』；於第2期時無異動，請勾選『同上期之人力需求異動表』。<br />
      3.
      當期人力有異動或計畫變更或刪減/凍結變更完成後至第1期或第2期截止日前，人力仍有異動者，則需列出計畫所有執行人員資訊(部分人力之人月無異動者，則原投入人月及異動後人月應相同，並且於異動原因點選無異動)<br />
      4. 計畫主持人及派駐人員異動時，請於「異動原因」欄加註工業局核准文號。
      <br />5.
      若有人員離職或新聘人力請於「異動原因」欄以括弧敘明離／到職日期。<br />
    </div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">聘請</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="身分證"
            aria-label="身分證"
            value=""
          />
          <label for="floatingSelect">身分證</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="中文姓名"
            aria-label="中文姓名"
            value=""
          />
          <label for="floatingSelect">中文姓名</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="英文姓名"
            aria-label="英文姓名"
            value=""
          />
          <label for="floatingSelect">英文姓名</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">性別</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect"
            >國籍((外國人士，請填寫護照號碼或居留證號碼))</label
          >
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="出生年"
            aria-label="出生年"
            value=""
          />
          <label for="floatingSelect">出生年(民國年)</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="畢業年/月"
            aria-label="畢業年/月"
            value=""
          />
          <label for="floatingSelect">畢業年/月(民國年/月)</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">專長領域</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">職級((GRB))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">職級((數位發展部))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">參與性質((GRB))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">學歷</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="服務機關"
            aria-label="服務機關"
            value=""
          />
          <label for="floatingSelect">服務機關</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div class="col-6">
            <textarea></textarea>
          </div>
          <label for="floatingSelect">工作經歷</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="工作年資"
            aria-label="工作年資"
            value=""
          />
          <label for="floatingSelect">工作年資((年))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="規畫執行工時"
            aria-label="規畫執行工時"
            value=""
          />
          <label for="floatingSelect">規畫執行工時((人月))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="異動後人月"
            aria-label="異動後人月"
            value=""
          />
          <label for="floatingSelect">異動後人月((人月))</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div class="col-6">
            <textarea></textarea>
          </div>
          <label for="floatingSelect">在本計畫擔任之工作項目</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input type="date" />
          <label for="floatingSelect">離/到職日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">異動原因</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div class="col-6">
            <textarea></textarea>
          </div>
          <label for="floatingSelect">異動原因說明</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">是否為駐點人員</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div class="col-6">
            <textarea></textarea>
          </div>
          <label for="floatingSelect">備註</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="排序"
            aria-label="排序"
            value=""
          />
          <label for="floatingSelect">排序</label>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
