<template>
  <section class="u-test">
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <h2 class="u-custom-font u-font-merriweather u-subtitle u-text u-text-2">Bài&nbsp;đánh giá sở thích nghề nghiệp</h2>
        </div>
        <div class="col-2">
          <a href="/Result" class="u-btn u-button-style u-hover-palette-1-dark-1 u-btn-1">Bỏ qua Bài đánh giá</a>
        </div>
      </div>
      
      <!-- <button class="btn btn-secondary">Bỏ qua bài đánh giá </button> -->
      
      <div class="row">
        <div class="col-3">
          <div class="grid-container u-question-sheet">
            <div v-for="(q, index) in Questions" :key="index">
              <a :href="'#'+ q.BaiDanhGiaDinhHuongNgheNghiepId" v-if="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]" class="quesNav a-ques picked">{{index + 1}}</a>
              <a :href="'#'+ q.BaiDanhGiaDinhHuongNgheNghiepId" v-else class="a-ques" :style="alertClass">{{index + 1}}</a>
            </div>
          </div>
        </div>
        <div class="col-8 u-test-sheet">
          <p class="u-align-left u-text u-custom-font u-font-merriweather u-text-palette-1-dark-1 u-text-3">Hãy chọn mức độ hứng thú của bạn cho các câu sau:</p>
          <div class="u-answer" v-for="(q, index) in Questions" :key="index">
            <p class="u-text u-custom-font u-font-merriweather u-ques-text" :id="q.BaiDanhGiaDinhHuongNgheNghiepId">Câu {{index + 1}}: {{q.TenCauHoi}}</p>
            <!-- Answer -->
            <input type="radio" id="a1" :name="q.BaiDanhGiaDinhHuongNgheNghiepId" value="3" v-model="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]">
            <label class="u-text u-custom-font u-font-merriweather" for="a1">Rất hứng thú</label>
            <input type="radio" id="a2" :name="q.BaiDanhGiaDinhHuongNgheNghiepId" value="2" v-model="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]">
            <label class="u-text u-custom-font u-font-merriweather" for="a2">Hứng thú</label>
            <input type="radio" id="a3" :name="q.BaiDanhGiaDinhHuongNgheNghiepId" value="1" v-model="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]">
            <label class="u-text u-custom-font u-font-merriweather" for="a3">Ít hứng thú</label>
            <input type="radio" id="a4" :name="q.BaiDanhGiaDinhHuongNgheNghiepId" value="0" v-model="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]">
            <label class="u-text u-custom-font u-font-merriweather" for="a4">Không hứng thú</label>
            <!-- End Answer -->
          </div> <!--End v-for -->
          <div class="u-align-center u-next" style="padding: 30px 0;" @click="commitAnswers()" >
            <a v-if="isComplete" href="/Result" class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-custom-font u-font-merriweather u-btn-next">Lưu</a>
            <a v-else class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-custom-font u-font-merriweather u-btn-next">Lưu</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Test',

  data () {
    return {
      Questions: [],
      quesNav: [,],
      alertColor: {
        background: 'darkred',
        color: 'white',
      },
      alertClass: '',
      isComplete: false,
      mssv: localStorage.SMssv,
    };
  },

  mounted() {
    this.refreshData();
  },

  methods:{
    refreshData(){
        axios.get("https://localhost:44326/api/BaiDanhGiaDinhHuongNgheNghiep").then((response)=>{
            this.Questions = response.data;
        });
    },

    postAnswer(MucDo,QuesId, Mssv) {
      axios.post("https://localhost:44326/api/KetQuaBaiDanhGia", MucDo,parseInt(QuesId), Mssv);
    },

    commitAnswers() {
      this.isComplete = true;

        for (let i = 0; i < this.Questions.length; i++) {
          this.quesNav[i, this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId] = 3;
        }
      
      for (let i = 0; i < this.Questions.length; i++) {
        if (!this.quesNav[i,this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId]) {
          this.isComplete = false;
          break;
        }
      }

      if (!this.isComplete) {
        this.alertClass = this.alertColor;
        alert("Vui lòng trả lời tất cả câu hỏi để sang bước tiếp theo!");
      }
      else {
        for (let i = 0; i < this.Questions.length; i++) {
          axios.post("https://localhost:44326/api/KetQuaBaiDanhGia", {
            MucDo: ""+ this.quesNav[i,this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId],
            MSSV: this.mssv,
            BaiDanhGiaDinhHuongNgheNghiepId: this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId
          })
          .then((Response) => {
            if (Response.data == "") this.isComplete = false;
          })
        }

        if (!this.isComplete) alert("Đã xảy ra lỗi, vui lòng thử lại!");
      }
    }
  }
}

</script>
