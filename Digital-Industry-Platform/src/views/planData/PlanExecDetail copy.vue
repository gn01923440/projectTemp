<template>
  <div>
    <router-link :to="{ name: 'PlanExecDetailExecution' }"
      >執行進度</router-link
    >
    <router-link :to="{ name: 'PlanExecDetailExecution' }"
      >資安檢核表</router-link
    >
    <router-view></router-view>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <!-- tablist -->

      <li v-if="false" class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="tab10-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab10"
          type="button"
          role="tab"
          aria-controls="tab10"
          aria-selected="true"
        >
          基本資料
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab11-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab11"
          type="button"
          role="tab"
          aria-controls="tab11"
          aria-selected="true"
        >
          執行進度
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab12-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab12"
          type="button"
          role="tab"
          aria-controls="tab12"
          aria-selected="true"
        >
          資安檢核表
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab13-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab13"
          type="button"
          role="tab"
          aria-controls="tab13"
          aria-selected="true"
        >
          執行成果
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab14-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab14"
          type="button"
          role="tab"
          aria-controls="tab14"
          aria-selected="true"
        >
          出國計畫
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab15-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab15"
          type="button"
          role="tab"
          aria-controls="tab15"
          aria-selected="true"
        >
          會計報告
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab16-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab16"
          type="button"
          role="tab"
          aria-controls="tab16"
          aria-selected="true"
        >
          請款管理
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab17-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab17"
          type="button"
          role="tab"
          aria-controls="tab17"
          aria-selected="true"
        >
          延續性計畫評鑑
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab18-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab18"
          type="button"
          role="tab"
          aria-controls="tab18"
          aria-selected="true"
        >
          計畫版本
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab19-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab19"
          type="button"
          role="tab"
          aria-controls="tab19"
          aria-selected="true"
        >
          期中報告
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab20-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab20"
          type="button"
          role="tab"
          aria-controls="tab20"
          aria-selected="true"
        >
          期末報告
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="tab21-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab21"
          type="button"
          role="tab"
          aria-controls="tab21"
          aria-selected="true"
        >
          GRB研究資料公開
        </button>
      </li>
    </ul>
    <!-- tablistEnd -->
    <div
      v-if="false"
      class="tab-pane fade"
      id="tab10"
      role="tabpanel"
      aria-labelledby="tab10-tab"
    >
      <!-- tab -->
      <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <!-- tablist -->

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab0-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab0"
              type="button"
              role="tab"
              aria-controls="tab0"
              aria-selected="true"
            >
              工作進度
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab1-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab1"
              type="button"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              分包&協辦進度
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab2-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab2"
              type="button"
              role="tab"
              aria-controls="tab2"
              aria-selected="true"
            >
              人力需求異動
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab3-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab3"
              type="button"
              role="tab"
              aria-controls="tab3"
              aria-selected="true"
            >
              人力需求&派遣_人力需求
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab4-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab4"
              type="button"
              role="tab"
              aria-controls="tab4"
              aria-selected="true"
            >
              派遣人力
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab5-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab5"
              type="button"
              role="tab"
              aria-controls="tab5"
              aria-selected="true"
            >
              人才培訓
            </button>
          </li>
        </ul>
        <!-- tablistEnd -->
        <div class="row">
          <!-- tabRow -->
          <div class="tab-content" id="myTabContent">
            <!-- tabContent -->
            <div
              class="tab-pane fade show active"
              id="tab0"
              role="tabpanel"
              aria-labelledby="tab0-tab"
            >
              <!-- tab -->
              <div class="row">
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">狀態</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <input type="date" />
                    <label for="floatingSelect">填表日期</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <input type="date" />
                    <label for="floatingSelect">資料期間</label>
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
              </div>
              <div class="row">
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>匯入前期
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>新增工作
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>修改工作
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>存檔
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>刪除工作
                </button>
              </div>
            </div>
            <!-- tabEnd -->
            <div
              class="tab-pane fade"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <!-- tab -->
              <div class="row">
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect"
                      >計畫所有分包/協辦項目名稱
                    </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">預定分包/協力單位</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">實際分包/協辦項目名稱 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">實際分包/協力單位</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">經費來自於(分項計畫) </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">分包/協辦情形 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">計價方式 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">計畫書編列金額  </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">分包/協辦計畫簽約金額</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">政府經費(元) </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">分包/協辦計畫簽約金額</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">自籌款(元) </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">分包/協辦計畫簽約金額</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">合計(含稅) </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">分包/協辦計畫簽約金額</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">合計(未稅) </label>
                  </span>
                </div>
              </div>
              <div class="row">
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>匯出PDF
                </button>
              </div>
            </div>
            <!-- tabEnd -->
            <div
              class="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
            >
              <!-- tab -->
              <div class="row">
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">勾選框</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">聘請</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">身分證字號 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">姓名 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">工作年資</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">職級(GRB) </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">参與性質 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">規劃執行人月 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">異動後人月 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">排序 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">作業</label>
                  </span>
                </div>
              </div>
              <div class="row">
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>匯出PDF
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>新增人力需求異動
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>匯入計畫書人力表
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>批次刪除
                </button>
                <button class="btn" type="button" @click="gotoback">
                  <i class="fa-solid fa-file-signature"></i>匯入前期
                </button>
              </div>
            </div>
            <!-- tabEnd -->
            <div
              class="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
            >
              <!-- tab -->
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
            <!-- tabEnd -->
            <div
              class="tab-pane fade"
              id="tab4"
              role="tabpanel"
              aria-labelledby="tab4-tab"
            >
              <!-- tab -->
              <div class="row">
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">勾選框</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">身分證字號 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">姓名 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">工作年資</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">派遣單位/公司名稱</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">實際執行人月</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">作業</label>
                  </span>
                </div>
              </div>
            </div>
            <!-- tabEnd -->
            <div
              class="tab-pane fade"
              id="tab5"
              role="tabpanel"
              aria-labelledby="tab5-tab"
            >
              <!-- tab -->
              <div class="row">
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">勾選框</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">開班名稱 </label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">預定開班期間</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">實際開班期間</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">人數</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">時數</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">政府經費(元)</label>
                  </span>
                </div>
                <div class="col-6">
                  <span class="form-floating">
                    <label for="floatingSelect">自籌款(元)</label>
                  </span>
                </div>
              </div>
            </div>
            <!-- tabEnd -->
          </div>
          <!-- tabContentEnd -->
        </div>
        <!-- tabRowEnd -->
      </div>
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade show active"
      id="tab11"
      role="tabpanel"
      aria-labelledby="tab11-tab"
    >
      <div>
        <div class="row">
          <div class="col-6">
            <span class="form-floating">
              <label for="floatingSelect">狀態</label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input type="date" />
              <label for="floatingSelect">填表日期</label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <label for="floatingSelect">資料期間</label>
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
        </div>
      </div>

      <div class="row col-12">
        <DataTable
          class="display table table-striped table-hover"
          :columns="columns"
          :data="data"
          :options="options"
          ref="table"
          width="100%"
        />
      </div>

      執行進度
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab12"
      role="tabpanel"
      aria-labelledby="tab12-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab13"
      role="tabpanel"
      aria-labelledby="tab13-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab14"
      role="tabpanel"
      aria-labelledby="tab14-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab15"
      role="tabpanel"
      aria-labelledby="tab15-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab16"
      role="tabpanel"
      aria-labelledby="tab16-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab17"
      role="tabpanel"
      aria-labelledby="tab17-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab18"
      role="tabpanel"
      aria-labelledby="tab18-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab19"
      role="tabpanel"
      aria-labelledby="tab19-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab20"
      role="tabpanel"
      aria-labelledby="tab20-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
    <div
      class="tab-pane fade"
      id="tab21"
      role="tabpanel"
      aria-labelledby="tab21-tab"
    >
      <!-- tab -->
    </div>
    <!-- tabEnd -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "../assets/tableLanguage.js";
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(DataTableBs5);
let dt;

const data = ref([]);

const table = ref();

const options = {
  dom: "tip",

  select: true,

  language: language,

  pageLength: 25,
};
const columns = [
  {
    data: "",
    title: "分項計畫及工作項目 ",
    width: "",
  },
  {
    data: "",
    title: "當期",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定 ",
    width: "",
  },
  {
    data: "",
    title: "當期",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際 ",
    width: "",
  },
  {
    data: "",
    title: "上期累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定",
    width: "",
  },
  {
    data: "",
    title: "上期累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際 ",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定 ",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%差異 ",
    width: "",
  },
  {
    data: "",
    title: "執行摘要說明 ",
    width: "",
  },
  {
    data: "",
    title: "排序 ",
    width: "",
  },
];
</script>
