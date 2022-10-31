<template>
   <div class="row p-5">

     <div class="row">
       <div class="col-6  py-3">
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
           <label for="floatingSelect">研究方法(BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             type="text"
             class="form-control"
             placeholder="執行單位出資"
             aria-label="執行單位出資"
             value=""
           />
           <label for="floatingSelect">執行單位出資(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
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
           <label for="floatingSelect">單位委託(補助)(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             type="text"
             class="form-control"
             placeholder="單位委託(補助)"
             aria-label="單位委託(補助)"
             value=""
           />
           <label for="floatingSelect">單位委託(補助)(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
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
           <label for="floatingSelect">單位委託(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             type="text"
             class="form-control"
             placeholder="單位委託(補助)"
             aria-label="單位委託(補助)"
             value=""
           />
           <label for="floatingSelect">單位委託(補助)(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
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
           <label for="floatingSelect">單位委託(補助)(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             type="text"
             class="form-control"
             placeholder="單位委託(補助)"
             aria-label="單位委託(補助)"
             value=""
           />
           <label for="floatingSelect">單位委託(補助)(%BRG)</label>
         </span>
       </div>
       <div class="col-6  py-3">
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
       <div class="col-6  py-3">
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
       <div class="col-6  py-3">
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
       <div class="col-6  py-3">
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
       <div class="col-6  py-3">
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
       <div class="col-6  py-3">
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
       <div class="col-12  py-3">
         <span class="col">計畫總經費
        </span>
        <span class="px-2 col">1000</span>
        <span class="col py-3">
          <button class="btn  btn-primary rounded-circle p-0" style="width:20px; height:20px; font-size: 14px; font-weight: bold;">?
            <!-- <span class="tips">aaaa</span> -->
            <tips msg="上述經費請依計畫屬性填寫，包含委辦費、自籌款、補助款，若無該欄經費，則填寫0" />
          </button>
        </span>
       </div>
       <div class="col-10  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="全程經費"
             aria-label="全程經費"
             value=""
           />
           <label for="floatingSelect">全程經費(元GRB)</label>
         </span>
       </div>
       <div class="col py-3">
        <button class="btn  btn-primary rounded-circle p-0" style="width:20px; height:20px; font-size: 14px; font-weight: bold;">?
          <!-- <span class="tips">aaaa</span> -->
          <tips msg="若為多年期計畫(如10301-10612三年期)，請將之概估全程經費填入，請注意經費單元為元。 
            若為單一非延續性計畫，則全程期間=本期期間，全程經費=本期經費，請注意經費單元為元。" />
        </button>
       </div>
       
       <div class="col-12 py-3 text-secondary border-bottom border-3 border-secondary h5">
        <span class="col ">資本支出(不含自籌款)(單位：元)
        </span>
        <span class="col py-3">
          <button class="btn  btn-primary rounded-circle p-0" style="width:20px; height:20px; font-size: 14px; font-weight: bold;">?
            <!-- <span class="tips">aaaa</span> -->
            <tips msg="成資本支出及經常支出兩大項，以下各分成三項，總計六項，以元為單位，請就各項經費填寫，其總和應等於「本期經費(不含自籌款)」。" />
          </button>
        </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="土地建築(元GRB)"
             aria-label="土地建築(元GRB)"
             value=""
           />
           <label for="floatingSelect"
             >土地建築(元GRB)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="儀器設備(元GRB)"
             aria-label="_儀器設備(元GRB)"
             value=""
           />
           <label for="floatingSelect"
             >儀器設備(元GRB)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="資本支出(元GRB)(其他)"
             aria-label="資本支出(元GRB)(其他)"
             value=""
           />
           <label for="floatingSelect"
             >資本支出(其他)(元GRB)</label
           >
         </span>
       </div>
       <div class="row col-12 mb-3 py-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          經常支出(不含自籌款)(單位：元)
        </h5>
      </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="人事費"
             aria-label="人事費"
             value=""
           />
           <label for="floatingSelect"
             >人事費(元GRB)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="材料費"
             aria-label="材料費"
             value=""
           />
           <label for="floatingSelect"
             >材料費(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="國內旅費"
             aria-label="國內旅費"
             value=""
           />
           <label for="floatingSelect"
             >國內旅費(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="國外差旅費"
             aria-label="國外差旅費"
             value=""
           />
           <label for="floatingSelect"
             >國外差旅費(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="國外學者來台"
             aria-label="國外學者來台"
             value=""
           />
           <label for="floatingSelect"
             >國外學者來台(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="儀器設備使用費"
             aria-label="儀器設備使用費"
             value=""
           />
           <label for="floatingSelect"
             >儀器設備使用費(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="管理費"
             aria-label="管理費"
             value=""
           />
           <label for="floatingSelect"
             >管理費(元)</label
           >
         </span>
       </div>
       <div class="col-6  py-3">
         <span class="form-floating">
           <input
             required
             type="text"
             class="form-control"
             placeholder="經常支出(其他)"
             aria-label="經常支出(其他)"
             value=""
           />
           <label for="floatingSelect"
             >經常支出(其他)(元)</label
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
</template>

<script setup>
  import tips from "../../../components/tips.vue";
</script>

<style>
  span.tips{
    width: 200px;
  }
</style>
