<template>
<section class="result u-custom-font u-font-merriweather">
  <div class="result-title">
    <a class="u-custom-font u-font-merriweather"> Xin chào </a>
    <a class="u-custom-font u-font-courier-new u-mssv" style="color: #db545a;"> {{mssv}} </a>
    <a class="u-custom-font u-font-merriweather">! {{TextShowing}}  </a> <br>
    <!-- <div> <a class="loader"></a> </div>
    <div> <a class="loader"></a> </div>
    <div> <a class="loader"></a> </div> -->
  </div>
  <div class="container-fluid">
      <div class="row">
        <div class="col-5">
          <apexchart type="radar" height="650"
                    :options="chartOptions"
                    :series="series"
                  ></apexchart>
        </div>
        <div class="col-7">
          <div class="container">
            <div class="grid-container" v-for="(m, index) in Majors" :key="index">
              <div class="item1" v-if="index === 0">
                <p class="title"> {{index + 1}}. {{m.TenChuyenNganh}} - phù hợp {{m.TongPhanTram}}%</p>
                <p class="note">{{m.GioiThieuChuyenNganh}}</p>
              </div>
              <div class="item2" v-else> 
                <p class="title"> {{index + 1}}. {{m.TenChuyenNganh}} - phù hợp {{m.TongPhanTram}}%</p>
                <p class="note">{{m.GioiThieuChuyenNganh}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';

import VueApexCharts from "vue3-apexcharts";

//ApexChart
export default {
  name: "Result",
  components: {
    apexchart: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
            chart: {
              id: 'radarChart',
              height: 550,
              type: 'radar',
            },
            dataLabels: {
              enabled: true
            },
            plotOptions: {
              radar: {
                size: 230,
                polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  }
                }
              }
            },
            title: {
              text: ''
            },
            colors: ['#FF4560'],
            markers: {
              size: 4,
              colors: ['#425465'],
              strokeColor: '#425465',
              strokeWidth: 2,
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return val
                }
              }
            },
            xaxis: {
              categories: [],
            },
            yaxis: {
              tickAmount: 5,
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                }
              },
              min: 0,
              max: 100
            }
          },
      series: [{
            name: 'percent',
            data: [],
          }],
      mssv : localStorage.SMssv,
      hptPosted: false,
      suggestPosted: false,
      Majors: [],
      MajorNames: [],
      Percents: [],
      TextShowing: 'Hệ thống đang tính kết quả ...',
      fit4uURL: //'https://localhost:44326'
                'https://fit4u-admin.somee.com'
    };
  }, //end data

  mounted(){
    if (localStorage.Tested) {
      this.postHuongPhatTrienSV();
    }
    else this.postSuggestion();
    //this.getRecommandtionResult();
  },

  methods:{
    postHuongPhatTrienSV(){
      axios.post(this.fit4uURL + "/api/HuongPhatTrienSV?mssv=" + this.mssv).then((response) => {
        this.hptPosted = true;
        
        this.postSuggestion();
      })
    },

    postSuggestion(){
      axios.post(this.fit4uURL + "/api/KetQuaChuyenNganh?mssv=" + this.mssv).then((response) => {
        this.suggestPosted = true;
        
        this.getRecommandtionResult();
      })
    },

    getRecommandtionResult(){
      axios.get(this.fit4uURL + "/api/KetQuaChuyenNganh/" + this.mssv).then((response)=>{
            this.Majors = response.data;
            this.TextShowing = 'Gợi ý chuyên ngành dành cho bạn là:';
            this.getChartData();
            this.sortMajors();
            
        });
        
    },

    sortMajors(){

      for (let i = 0; i < this.Majors.length; i++)
        for (let j = i + 1; j < this.Majors.length; j++) {
          //if (this.Majors[i].ThuTu < this.Majors[j].ThuTu){
          if (this.Majors[i].TongPhanTram < this.Majors[j].TongPhanTram){
            let temp = this.Majors[i];
            this.Majors[i] = this.Majors[j];
            this.Majors[j] = temp;
          }
        }
    },

    getChartData(){
      for (let i = 0; i < this.Majors.length; i++){
        this.MajorNames[i] = this.Majors[i].TenChuyenNganh;
        this.Percents[i] = this.Majors[i].PhanTram;
        
      };
      this.series.forEach((serie) => {
          serie.data = this.Percents;
        });
      
      ApexCharts.exec('radarChart', "updateOptions", {
        xaxis: {
          categories: this.MajorNames,
        }
      })
    }
  }
};
</script>