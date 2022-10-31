<template>
    <div>
      <h2>計畫簽約/變更/查詢作業-修改</h2>
    </div>
  
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <!-- tablist -->
  
        <li class="nav-item" role="presentation">
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
            預期成果
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
            分項計畫
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
            人力需求派遣
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
            分包協辦計畫
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
            經費預算
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
            計畫書
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
            GRB
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
            送審
          </button>
        </li>
      </ul>
      <!-- tablistEnd -->
      <div
        class="tab-pane fade show active"
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
                class="nav-link active"
                id="tab0-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab0"
                type="button"
                role="tab"
                aria-controls="tab0"
                aria-selected="true"
              >
                計畫資料
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
                簽約金額
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
                領域及關鍵詞
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
                中英文摘要
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
                計畫變更明細表_修改
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
                      <radio>有</radio>
                      <radio>否</radio>
                      <label for="floatingSelect">有資訊處理相關作業</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫執行年度"
                        aria-label="計畫執行年度"
                        value=""
                      />
                      <label for="floatingSelect">計畫執行年度</label>
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
                      <label for="floatingSelect">標案-契約編號</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="計畫中文名稱"
                        aria-label="計畫中文名稱"
                        value=""
                      />
                      <label for="floatingSelect">計畫中文名稱</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="計畫英文名稱"
                        aria-label="計畫英文名稱"
                        value=""
                      />
                      <label for="floatingSelect">計畫英文名稱</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="委託/執行單位"
                        aria-label="委託/執行單位"
                        value=""
                      />
                      <label for="floatingSelect">委託/執行單位</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="共同得標廠商"
                        aria-label="共同得標廠商"
                        value=""
                      />
                      <label for="floatingSelect">共同得標廠商</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="執行單位簽約人"
                        aria-label="執行單位簽約人"
                        value=""
                      />
                      <label for="floatingSelect">執行單位簽約人</label>
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
                      <label for="floatingSelect">經費及承攬類型</label>
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
                      <label for="floatingSelect">計價方式</label>
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
                      <label for="floatingSelect">計畫類型</label>
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
                      <label for="floatingSelect">計畫依據</label>
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
                      <label for="floatingSelect">研究性質</label>
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
                      <label for="floatingSelect">研究目的</label>
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
                      <label for="floatingSelect">計畫屬性</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input type="date" />
                      <label for="floatingSelect">本年度期間_起</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input type="date" />
                      <label for="floatingSelect">本年度期間_訖</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input type="date" />
                      <label for="floatingSelect">全程期間_起</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input type="date" />
                      <label for="floatingSelect">全程期間_訖</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_姓名"
                        aria-label="計畫主持人_姓名"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_姓名</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_職稱"
                        aria-label="計畫主持人_職稱"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_職稱</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_電話"
                        aria-label="計畫主持人_電話"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_電話</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_傳真"
                        aria-label="計畫主持人_傳真"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_傳真</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_參與人月"
                        aria-label="計畫主持人_參與人月"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_參與人月</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_ GRB用戶帳號"
                        aria-label="計畫主持人_ GRB用戶帳號"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_ GRB用戶帳號</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫主持人_電子郵件"
                        aria-label="計畫主持人_電子郵件"
                        value=""
                      />
                      <label for="floatingSelect">計畫主持人_電子郵件</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 姓名"
                        aria-label="計畫連絡人_ 姓名"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 姓名</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 職稱"
                        aria-label="計畫連絡人_ 職稱"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 職稱</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 電話"
                        aria-label="計畫連絡人_ 電話"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 電話</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 傳真"
                        aria-label="計畫連絡人_ 傳真"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 傳真</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 服務機關"
                        aria-label="計畫連絡人_ 服務機關"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 服務機關</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 電子郵件"
                        aria-label="計畫連絡人_ 電子郵件"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 電子郵件</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="計畫連絡人_ 地址"
                        aria-label="計畫連絡人_ 地址"
                        value=""
                      />
                      <label for="floatingSelect">計畫連絡人_ 地址</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input type="text" />
  
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
                      <label for="floatingSelect">計畫主持人</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="系統通知信連絡人_姓名"
                        aria-label="系統通知信連絡人_姓名"
                        value=""
                      />
                      <label for="floatingSelect">系統通知信連絡人_姓名</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="系統通知信連絡人_電話"
                        aria-label="系統通知信連絡人_電話"
                        value=""
                      />
                      <label for="floatingSelect">系統通知信連絡人_電話</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="系統通知信連絡人_電子郵件"
                        aria-label="系統通知信連絡人_電子郵件"
                        value=""
                      />
                      <label for="floatingSelect"
                        >系統通知信連絡人_電子郵件</label
                      >
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
                      <label for="floatingSelect">狀態</label>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>填寫資訊系統
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i
                    >系統通知信連絡人_新增
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>存檔
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>匯出pdf
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>返回清單
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
                      <label for="floatingSelect">研究方法</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="執行單位出資"
                        aria-label="執行單位出資"
                        value=""
                      />
                      <label for="floatingSelect">執行單位出資(%)</label>
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
                      <label for="floatingSelect">單位委託(補助)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="單位委託(補助)"
                        aria-label="單位委託(補助)"
                        value=""
                      />
                      <label for="floatingSelect">單位委託(補助)(%)</label>
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
                      <label for="floatingSelect">單位委託(補助)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="單位委託(補助)"
                        aria-label="單位委託(補助)"
                        value=""
                      />
                      <label for="floatingSelect">單位委託(補助)(%)</label>
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
                      <label for="floatingSelect">單位委託(補助)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="單位委託(補助)"
                        aria-label="單位委託(補助)"
                        value=""
                      />
                      <label for="floatingSelect">單位委託(補助)(%)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="工業局經費-委辦費"
                        aria-label="工業局經費-委辦費"
                        value=""
                      />
                      <label for="floatingSelect">工業局經費-委辦費(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="工業局經費-補助費"
                        aria-label="工業局經費-補助費"
                        value=""
                      />
                      <label for="floatingSelect">工業局經費-補助費(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="工業局-自籌款"
                        aria-label="工業局-自籌款"
                        value=""
                      />
                      <label for="floatingSelect">工業局-自籌款(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="其他單位經費-委辦費"
                        aria-label="其他單位經費-委辦費"
                        value=""
                      />
                      <label for="floatingSelect">其他單位經費-委辦費(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="其他單位經費-補助費"
                        aria-label="其他單位經費-補助費"
                        value=""
                      />
                      <label for="floatingSelect">其他單位經費-補助費(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="其他單位-自籌款"
                        aria-label="其他單位-自籌款"
                        value=""
                      />
                      <label for="floatingSelect">其他單位-自籌款(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <label for="floatingSelect">計畫總經費</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="全程經費"
                        aria-label="全程經費"
                        value=""
                      />
                      <label for="floatingSelect">全程經費(元)</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <label for="floatingSelect"
                        >資本支出(不含自籌款)(單位：元)
                      </label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="資本支出(不含自籌款)(單位：元) _土地建築"
                        aria-label="資本支出(不含自籌款)(單位：元) _土地建築"
                        value=""
                      />
                      <label for="floatingSelect"
                        >資本支出(不含自籌款)(單位：元) _土地建築(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="資本支出(不含自籌款)(單位：元) _儀器設備"
                        aria-label="資本支出(不含自籌款)(單位：元) _儀器設備"
                        value=""
                      />
                      <label for="floatingSelect"
                        >資本支出(不含自籌款)(單位：元) _儀器設備(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="資本支出(不含自籌款)(單位：元) _資本支出(其他)"
                        aria-label="資本支出(不含自籌款)(單位：元) _資本支出(其他)"
                        value=""
                      />
                      <label for="floatingSelect"
                        >資本支出(不含自籌款)(單位：元) _資本支出(其他)(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_人事費"
                        aria-label="經常支出(不含自籌款)(單位：元)_人事費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_人事費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_材料費"
                        aria-label="經常支出(不含自籌款)(單位：元)_材料費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_材料費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_國內旅費"
                        aria-label="經常支出(不含自籌款)(單位：元)_國內旅費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_國內旅費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_國外差旅費"
                        aria-label="經常支出(不含自籌款)(單位：元)_國外差旅費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_國外差旅費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_國外學者來台"
                        aria-label="經常支出(不含自籌款)(單位：元)_國外學者來台"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_國外學者來台(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_儀器設備使用費"
                        aria-label="經常支出(不含自籌款)(單位：元)_儀器設備使用費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_儀器設備使用費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_管理費"
                        aria-label="經常支出(不含自籌款)(單位：元)_管理費"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_管理費(元)</label
                      >
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        required
                        type="text"
                        class="form-control"
                        placeholder="經常支出(不含自籌款)(單位：元)_經常支出(其他)"
                        aria-label="經常支出(不含自籌款)(單位：元)_經常支出(其他)"
                        value=""
                      />
                      <label for="floatingSelect"
                        >經常支出(不含自籌款)(單位：元)_經常支出(其他)(元)</label
                      >
                    </span>
                  </div>
                </div>
                <div class="row">
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>存檔
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>返回清單
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
                      <label for="floatingSelect">研究領域</label>
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
                      <label for="floatingSelect">研究領域</label>
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
                      <label for="floatingSelect">研究領域</label>
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
                      <label for="floatingSelect">研究領域</label>
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
                      <label for="floatingSelect">研究領域</label>
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
                      <label for="floatingSelect">研究領域</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="中文關鍵詞"
                        aria-label="中文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">中文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="英文關鍵詞"
                        aria-label="英文關鍵詞"
                        value=""
                      />
                      <label for="floatingSelect">英文關鍵詞</label>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>存檔
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>返回清單
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
                      <div class="col-6">
                        <textarea></textarea>
                      </div>
                      <label for="floatingSelect">中文摘要</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <div class="col-6">
                        <textarea></textarea>
                      </div>
                      <label for="floatingSelect">英文摘要</label>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>存檔
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>返回清單
                  </button>
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
                      <radio>有</radio>
                      <radio>否</radio>
                      <label for="floatingSelect">分項類型</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="分項計畫名稱"
                        aria-label="分項計畫名稱"
                        value=""
                      />
                      <label for="floatingSelect">分項計畫名稱</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <div class="col-6">
                        <textarea></textarea>
                      </div>
                      <label for="floatingSelect">計算方式說明</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <div class="col-6">
                        <textarea></textarea>
                      </div>
                      <label for="floatingSelect">變更後計畫驗收標的</label>
                    </span>
                  </div>
                  <div class="col-6">
                    <span class="form-floating">
                      <label for="floatingSelect">(規格、功能、效益說明)</label>
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
                <div class="row">
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>存檔
                  </button>
                  <button class="btn" type="button" @click="gotoback">
                    <i class="fa-solid fa-file-signature"></i>返回清單
                  </button>
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
        class="tab-pane fade"
        id="tab11"
        role="tabpanel"
        aria-labelledby="tab11-tab"
      >
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
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const gotoback = () => {
    console.log("aaa");
    router.go(-1);
  };
  </script>
  
  <style></style>
  