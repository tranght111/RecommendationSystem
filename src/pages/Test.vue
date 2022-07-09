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
              <a :href="'#'+ q.BaiDanhGiaDinhHuongNgheNghiepId" v-if="quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]==='0' || quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]==='1' || quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]==='2'|| quesNav[index, q.BaiDanhGiaDinhHuongNgheNghiepId]==='3'" 
                class="quesNav a-ques picked">{{index + 1}}</a>
              <a :href="'#'+ q.BaiDanhGiaDinhHuongNgheNghiepId" v-else class="a-ques" :style="alertQuesClass">{{index + 1}}</a>
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
          <div class="u-align-center"><br>
            <a :style="alertClass" class="u-custom-font u-font-merriweather notice"> {{alertContent}} </a>
          </div>
          <div class="u-align-center u-next" style="padding: 0 0 20px;" @click="commitAnswers()">
            <a class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-custom-font u-font-merriweather u-btn-next">Lưu</a>
          </div>
          <div v-if="questionsLength != 0 && postCount >= questionsLength" v-bind="WaitPostResult()"> </div>
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
      questionsLength: 0,
      quesNav: [,],
      alertColor: {
        background: 'darkred',
        color: 'white',
      },
      alertQuesClass: '',
      isComplete: false,
      mssv: localStorage.SMssv,
      alertClass: {
          color: 'white',
        },
      alertContent: '',
      action: false,
      postCount: 0,
      fit4uURL: //'https://localhost:44326'
                'https://fit4u-admin.somee.com'
    };
  },

  mounted() {
    this.refreshData();
    localStorage.Tested = false;
  },

  methods:{
    refreshData(){
        axios.get(this.fit4uURL + "/api/BaiDanhGiaDinhHuongNgheNghiep").then((response)=>{
            this.Questions = response.data;
            this.questionsLength = this.Questions.length;
            this.setAnswer();
        });
    },

    setAnswer(){
      for (let i = 0; i < this.questionsLength; i++){
        this.quesNav[i, this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId] = -1;
      }
    },

    postAnswer(MucDo,QuesId, Mssv) {
      axios.post(this.fit4uURL + "/api/KetQuaBaiDanhGia", MucDo,parseInt(QuesId), Mssv);
    },

    goToResult(){
      setTimeout(() => window.location = "/Result", 1000)
    },

    commitAnswers() {
      this.isComplete = true;

      //test
      // for (let i = 0; i < this.questionsLength; i++) {
      //     this.quesNav[i, this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId] = 
      //     Math.floor(Math.random() * (3 - 0 + 1)) + 0; 
      //   }
      
      for (let i = 0; i < this.questionsLength; i++) {
        let t = this.quesNav[i,this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId];
        if ( t != '0' && t != '1' && t != '2' && t != '3'){ 
          this.isComplete = false;
          break;
        }
      }

      if (this.isComplete == false) {
        this.alertQuesClass = this.alertColor;
        this.alertClass.color = 'red';
        this.alertContent = 'Vui lòng trả lời tất cả câu hỏi để sang bước tiếp theo!';
      }
      else {
        for (let i = 0; i < this.questionsLength; i++) {
          axios.post(this.fit4uURL + "/api/KetQuaBaiDanhGia", {
            MucDo: ""+ this.quesNav[i,this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId],
            MSSV: this.mssv,
            BaiDanhGiaDinhHuongNgheNghiepId: this.Questions[i].BaiDanhGiaDinhHuongNgheNghiepId
          })
          .then((response) => {
            this.postCount = this.postCount + 1;
            console.log(this.postCount);
          })
        }

        this.alertClass.color = 'green';
        this.alertContent = 'Đang lưu câu trả lời...';
      }
    },

    WaitPostResult() {
      this.alertClass.color = 'green';
          this.alertContent = 'Đã lưu câu trả lời của bạn!';
          localStorage.Tested = true;
          this.goToResult(); //delay
    }
  }
}

</script>
