<template>
    <section class="u-clearfix u-upload-section-1" id="sec-e3ae">
      <div class="u-clearfix u-sheet u-sheet-2">
        <div class="u-container-style u-group u-white u-group-1">
        <form action="">
          <div class="u-container-layout u-container-layout-1">
            <h1 class="u-custom-font u-font-merriweather u-text u-text-default u-title u-text-11">Thông tin bảng&nbsp;điểm </h1>
            <div class="u-form u-form-1">
                        <div class="u-form-group u-form-group-15">
                          <label for="text-871d" class="u-label u-label-1">Mã số sinh viên</label>
                          <input type="number" placeholder="Nhập vào MSSV" required id="text-871d" autofocus name="mssv" v-model="mssv" @change="setMSSV(mssv)" :style="MssvStyle" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                        </div>
                      </div>
            <p class="u-text u-text-22"> Lưu ý: Sinh viên chỉ chọn 1 trong 2 lựa chọn bên dưới&nbsp;để cung cấp thông tin bảng điểm của mình.&nbsp;</p>
            
            <div class="u-text u-text-default u-text-palette-1-dark-1 u-text-3">
            <input type="radio" id="p1" value="Plan1" v-model="PlanPicked"  checked="checked"/>
            <span v-if="PlanPicked === 'Plan2'">
              <label :style="StylePlanNonDisplay" for="p1">&nbsp; Lựa chọn 1: Tải lên bảng điểm dạng Excel</label>
            </span>
            <span v-else>
              <label for="p1">&nbsp; Lựa chọn 1: Tải lên bảng điểm dạng Excel</label>
              
            </span>
            </div>
            <!-- PLAN 1 -->
            <div v-if="PlanPicked === 'Plan1'">
            <div class="u-accordion u-collapsed-by-default u-accordion-1">
              <div class="u-accordion-item">
                <a class="u-accordion-link u-button-style u-text-hover-palette-1-dark-1 u-text-active-palette-1-dark-1 u-text-palette-1-light-1 u-accordion-link-1" id="link-3b8b" aria-controls="3b8b" aria-selected="false">
                  <span class="u-accordion-link-text">Hướng dẫn&nbsp;</span><span class="u-accordion-link-icon u-accordion-link-icon-hidden u-icon u-text-grey-40 u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 16" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-036a"></use></svg><svg class="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-036a"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	                  c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
                </a>
                <div class="u-accordion-pane u-container-style u-shape-rectangle u-accordion-pane-1" id="3b8b" aria-labelledby="link-3b8b">
                  <div class="u-container-layout u-container-layout-2">
                    <p class="u-text u-text-4">Truy cập vào trang Portal​&nbsp;của trường, chọn <i>Qu</i>
                      <span style="font-style: italic;">ản lý học tập</span>&nbsp;=&gt; chọn <span style="font-style: italic;">Tra cứu kết quả học tập</span>=> chọn "--Tất cả--" trong ô
                      <span style="font-style: italic;">Năm học</span>. Copy bảng
                      <span style="font-style: italic;">Danh Sách Kết Quả Học Tập</span> vào Excel. Lưu file và tải file lên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              <input type="file" accept=".xls,.xlsx" required v-on:change="uploadFile($event)" style="padding-left: 55px" id="fileExcel">
              <!-- <span style="font-weight: 400; font-style: italic; color: red; font-size: 1.125rem">(chỉ chấp nhận tệp tin Excel)</span> -->
              <!-- <a class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1"><i class="fa fa-upload" aria-hidden="true"></i>&nbsp;Tải tệp tin</a> -->
          
            </div>
            <!-- END PLAN 1 -->
            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
            <div class="u-text u-text-default u-text-palette-1-dark-1 u-text-5">
            <input type="radio" id="p2" value="Plan2" v-model="PlanPicked" />
            <span v-if="PlanPicked === 'Plan1'">
              <label :style="StylePlanNonDisplay" for="p2">&nbsp; Lựa chọn 2: Nhập các thông tin điểm bên dưới </label></span>
            <span v-else>
              <label for="p2">&nbsp; Lựa chọn 2: Nhập các thông tin điểm bên dưới </label> </span>
            </div>
            <!-- PLAN 2 -->
            <div v-if="PlanPicked === 'Plan2'"> 
              <div class="row"> 
                <div class="col-6">
                  <div v-for="(mh, index) in MonHocs" :key="index">
                    <div class="point-input" v-if="index <= MonHocs.length/2 - 1">
                      <label :for="mh.MonHocId"> {{mh.TenMonHoc}} </label>
                      <input type="number" min="0" max="10" :id="mh.MonHocId" placeholder="Nhập điểm" v-model="Diem[index]" :style="inputAlerts[index]" @change="defaultInputClass(index)" required class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"> 
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div v-for="(mh, index) in MonHocs" :key="index">
                    <div class="point-input" v-if="index > MonHocs.length/2 - 1">
                      <label :for="mh.MonHocId"> {{mh.TenMonHoc}} </label>
                      <input type="number" min="0" max="10" :id="mh.MonHocId" placeholder="Nhập điểm" v-model="Diem[index]" :style="inputAlerts[index]" @change="defaultInputClass(index)" required class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END PLAN 2 -->
            <div class="u-align-center">
              <br>
              <a :style="alertClass" class="u-custom-font u-font-merriweather notice"> {{alertContent}} </a><br>
              <div v-if="PlanPicked === 'Plan1'">
                <input type="button" value="LƯU" v-on:click="submitFile()" class="u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-4">
              </div>
              <div v-else>
                <input type="button" value="LƯU" v-on:click="submitDiem()" class="u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-4">
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </section>


</template>

<script>
import axios from 'axios'

export default {
    name: 'Upload',
    data() {
      return {
        StylePlanNonDisplay: {
          color: '#adcce9',
        },
        PlanPicked: 'Plan1',
        fileDiem: null,
        mssv: '',
        MonHocs: [],
        Diem: [],
        isComplete: false,
        alertClass: {
          color: 'white',
        },
        alertContent: '',
        inputAlertClass: {
          border: '1px solid red'
        },
        inputAlerts:[],
        isChangeMssv: false,
        isUploadFile: false,
        MssvStyle: '',
        fit4uURL: //'https://localhost:44326'
                  'https://fit4u-admin.somee.com'
      }
    },

    mounted() {
      this.getMonHocXetChuyenNganh();
    },

    methods: {
      setMSSV(mssv) {
        localStorage.SMssv = mssv;
        this.isChangeMssv = true;
        this.MssvStyle = '';
      },

      uploadFile(event){
        this.fileDiem = event.target.files[0];
        this.isUploadFile = true;
      },

      getMonHocXetChuyenNganh() {
        axios.get(this.fit4uURL + "/api/MonHocCSNvaToan?selectlatest=true").then((response)=>{
            this.MonHocs = response.data;
        });
        
      },

      putDiemTBCSN(){
        axios.put(this.fit4uURL + "/api/SinhVien?mssv=" + localStorage.SMssv).then((response) => {
          this.alertClass.color = 'green';
          this.alertContent = 'Đã lưu thông tin điểm của bạn!';

          this.goToTest();
          this.deleteOldSuggest();
        })
      },

      submitFile(){
        let formData = new FormData();
        formData.append("formFile", this.fileDiem);

        if (!this.isChangeMssv) {
          this.MssvStyle = this.inputAlertClass;
        }
        if (this.fileDiem != null && this.isChangeMssv==true && this.isUploadFile == true) {
          this.alertClass.color = 'green';
          this.alertContent = 'Đang lưu điểm...';
          axios.post(this.fit4uURL + "/api/SinhVien?mssv=" + localStorage.SMssv);

          axios.post(this.fit4uURL + "/api/ReadStudentExcelFile?MSSV=" + localStorage.SMssv, formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
            this.putDiemTBCSN();
          })

          // this.alertClass.color = 'blue';
          // this.alertContent = 'Đã lưu thông tin điểm của bạn!';
          // this.goToTest();
            
        }
        else {
          this.alertClass.color = 'red';
          this.alertContent = 'Vui lòng nhập đầy đủ thông tin!';
        }
      },

      goToTest(){
        setTimeout(() => window.location = "/Test", 1500)
      },

      submitDiem(){
        this.isComplete = true;
        if (!this.isChangeMssv) {
          this.MssvStyle = this.inputAlertClass;
        }

        for (let i = 0; i < this.MonHocs.length; i++) {
          if (!this.Diem[i] || this.Diem[i] < 0 || this.Diem[i] > 10) {
            this.isComplete = false;
            this.inputAlerts[i] = this.inputAlertClass;
          }
        }
        
        if (!this.isComplete || !this.isChangeMssv) {
          this.alertClass.color = 'red';
          this.alertContent = 'Vui lòng nhập đầy đủ thông tin!';
        }
        else if (this.isComplete && this.isChangeMssv)
        {
          this.alertClass.color = 'green';
          this.alertContent = 'Đang lưu điểm...';
          //post SinhVien
          axios.post(this.fit4uURL + "/api/SinhVien?mssv=" + localStorage.SMssv);
          let resCount = 0;
          for (let i = 0; i < this.Diem.length; i++) {
            axios.post(this.fit4uURL + "/api/Diem", {
              MonHocId: this.MonHocs[i].MonHocId,
              MSSV: localStorage.SMssv,
              DiemMH: this.Diem[i]
            }).then((response) => {
              resCount = resCount + 1;
              console.log(resCount);
              //Xu ly K-Means
              if (resCount == this.Diem.length)
                this.putDiemTBCSN();
            })
          }
        }
      },

      deleteOldSuggest(){
        axios.delete(this.fit4uURL + "/api/KetQuaChuyenNganh/" + localStorage.SMssv).then((response) => {
          this.postKMeans();
        })
      },

      postKMeans(){
        axios.post(this.fit4uURL + "/api/KetQuaChuyenNganh?mssv=" + localStorage.SMssv).then((response) => {
        })
      },

      defaultInputClass(id) {
        this.inputAlerts[id] = '';
      }
    },
}



</script>

