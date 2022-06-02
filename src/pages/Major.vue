<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <section class="u-major-section-1 u-major-sticky">
                  <div class="u-container-style u-group u-radius-15 u-shape-round u-white u-group-1">
                    <div class="u-container-layout u-valign-top u-container-layout-2">
                      <div class="u-container-style u-group u-shape-rectangle u-group-2">
                        <div class="u-container-layout u-container-layout-3">
                          <h3 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-palette-1-dark-2 u-text-1">Chuyên Ngành</h3>
                        </div>
                      </div>
                      <div class="u-expanded-width u-list u-list-1">
                        <div class="u-repeater u-repeater-1">
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-4">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-2"><span class="u-icon u-major-icon"><img src="../assets/images/knowledge.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480107)">Công nghệ Tri thức </a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-5">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-3"><span class="u-icon u-major-icon"><img src="../assets/images/database.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480104)">Hệ thống Thông tin</a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-7">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-5"><span class="u-icon u-major-icon"><img src="../assets/images/science.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480106)">Khoa học Dữ liệu</a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-8">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-6"><span class="u-icon u-major-icon"><img src="../assets/images/computer.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480101)">Khoa học Máy tính</a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-6">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-4"><span class="u-icon u-major-icon"><img src="../assets/images/coding.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480103)">Kỹ thuật Phần mềm</a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-9">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-7"><span class="u-icon u-major-icon"><img src="../assets/images/network.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480102)">Mạng máy tính &amp; Viễn thông</a></h5>
                            </div>
                          </div>
                          <div class="u-container-style u-list-item u-repeater-item">
                            <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-10">
                              <h5 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-8"><span class="u-icon u-major-icon"><img src="../assets/images/vision.png" alt=""></span>
                                <a class="u-btn u-button-link u-button-style u-none u-text-hover-palette-1-dark-1 u-btn-major" @click="setMajorID(7480105)">Thị giác Máy tính</a></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
      </div>

      <div class="col-9">
        <section class="u-clearfix u-major-section-1" id="sec-d396">
        <div class="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-col">
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-image u-layout-cell u-size-60 u-image-1" data-image-width="1590" data-image-height="800">
                    <div class="u-container-layout u-container-layout-12">
                      <h2 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-9">{{ChuyenNganh.TenChuyenNganh}}</h2>
                      <p class="u-align-left u-custom-font u-font-merriweather u-text u-text-10"> {{ChuyenNganh.GioiThieuChuyenNganh}} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-layout-cell u-shape-rectangle u-size-60 u-layout-cell-4">
                    <div class="u-container-layout u-valign-top u-container-layout-13">
                      <div class="u-video u-video-contain u-video-1">
                        <div class="embed-responsive embed-responsive-1">
                          <iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" class="embed-responsive-item" :src="linkVid" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

      <section class="u-clearfix u-major-section-2" id="sec-1bd2">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-col">
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width="7626" data-image-height="5000">
                    <div class="u-container-layout u-container-layout-1"></div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div class="u-container-layout u-container-layout-2">
                      <h4 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-palette-1-dark-2 u-text-1">Lĩnh vực đào tạo</h4>
                      <p class="u-custom-font u-font-merriweather u-text u-text-2"> {{ChuyenNganh.LinhVucNghienCuu}} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                    <div class="u-container-layout u-container-layout-3">
                      <h4 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-palette-1-dark-2 u-text-3">Cơ hội nghề nghiệp</h4>
                      <div v-for="c in CHNN" :key="c">
                        <p class="u-custom-font u-font-merriweather u-text u-text-4"> {{c.TenCoHoi}} </p>
                      </div>
                    </div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
                    <div class="u-container-layout u-container-layout-4">
                      <img class="u-expanded-height u-image u-image-2" src="../assets/images/59a3af94a77d78ce4530b4fb824b4ba87fc2efa3c6d6ee02c5c7ca1b6a24df9e84ce4ddeba9fe6d3789d02ea2beb763059ecc827d83166354b279b_1280.png" data-image-width="1280" data-image-height="1280">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section class="u-clearfix u-major-section-2" id="sec-1bd2">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-col">
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width="7626" data-image-height="5000">
                    <div class="u-container-layout u-container-layout-1"></div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div class="u-container-layout u-container-layout-2">
                      <h4 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-palette-1-dark-2 u-text-1">Định hướng nghiên cứu</h4>
                      <div v-for="dh in DHNC" :key="dh">
                        <p class="u-custom-font u-font-merriweather u-text u-text-2"> {{dh.TenDinhHuong}}: </p>
                        <p class="u-custom-font u-font-merriweather u-text u-text-21"> - {{dh.ChuDeNghienCuu}}: {{dh.DuAnNghienCuu}}</p>
                        <!-- <p class="u-custom-font u-font-merriweather u-text u-text-22"> {{dh.DuAnNghienCuu}} </p> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                    <div class="u-container-layout u-container-layout-3">
                      <h4 class="u-custom-font u-font-roboto-slab u-text u-text-default u-text-palette-1-dark-2 u-text-3">Các học phần bắt buộc của chuyên ngành</h4>
                      <div v-for="mh in MonHoc" :key="mh">
                        <p class="u-custom-font u-font-merriweather u-text u-text-4">- {{mh.TenMonHoc}} </p>
                      </div>
                    </div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-4">
                    <div class="u-container-layout u-container-layout-4">
                      <img class="u-expanded-height u-image u-image-4" src="../assets/images/59a3af94a77d78ce4530b4fb824b4ba87fc2efa3c6d6ee02c5c7ca1b6a24df9e84ce4ddeba9fe6d3789d02ea2beb763059ecc827d83166354b279b_1280.png" data-image-width="1280" data-image-height="1280">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section> <br>
      </div>
    </div>
  </div>
                

    
    
</template>

<script>
import axios from 'axios'
export default {
    name: 'Major',
    data() {
      return {
        majorID: '',
        ChuyenNganh: [],
        linkVid: '',
        CHNN: [],
        DHNC: [],
        MonHoc: []
      }
    },

    methods: {
      setMajorID(id) {
        localStorage.MajorId = id,
        this.majorID = localStorage.MajorId,
        this.getChuyenNganh(),
        this.getCoHoiNgheNghiep(),
        this.getDinhHuongNghienCuu(),
        this.getMonHocBatBuoc()
      },

      getChuyenNganh() {
        axios.get("https://localhost:44326/api/ChuyenNganh/" + this.majorID).then((response) => {
          this.ChuyenNganh = response.data;
          this.linkVid = "https://www.youtube.com/embed/" + this.ChuyenNganh.LinkVideo + "?mute=1&amp;showinfo=0&amp;controls=0&amp;start=0";
        });
      },

      getCoHoiNgheNghiep() {
        axios.get("https://localhost:44326/api/CoHoiNgheNghiepChuyenNganh/" + this.majorID).then((response) => {
          this.CHNN = response.data;
        });
      },

      getDinhHuongNghienCuu() {
        axios.get("https://localhost:44326/api/DinhHuongNghienCuu/" + this.majorID).then((response) => {
          this.DHNC = response.data;
        });
      },

      getMonHocBatBuoc() {
        axios.get("https://localhost:44326/api/MonHocChuyenNganh/" + this.majorID).then((response) => {
          this.MonHoc = response.data;
        });
      }
    },

    mounted() {
      this.majorID = localStorage.MajorId,
      this.getChuyenNganh();
      this.getCoHoiNgheNghiep();
      this.getDinhHuongNghienCuu();
      this.getMonHocBatBuoc();
    }
}
</script>