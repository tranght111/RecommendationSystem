<template>

  <div id="app">

  <body class="u-body u-xl-mode">
     <!-- Header -->
     <header class="u-clearfix u-header u-palette-1-light-2 u-sticky u-sticky-e93e u-header" id="sec-b84c">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a data-page-id="1791089" class="u-image u-logo u-image-1" data-image-width="250" data-image-height="70" title="Trang chủ">
            <router-link to="/" tag="span" >
              <img src="./assets/images/logoRS1.png" class="u-logo-image u-logo-image-1">
            </router-link>
          </a>
        <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse u-custom-font u-font-merriweather" style="font-size: 1rem; letter-spacing: 0px; text-transform: uppercase; font-weight: 700;">
            <a class="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-color u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#" style="padding: 3px 4px; font-size: calc(1em + 6px);">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
              <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g>
                 <rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect>
              <rect y="13" width="16" height="2"></rect></g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-custom-font u-font-merriweather u-nav u-spacing-30 u-unstyled u-nav-1">
              <li class="u-nav-item">
                <a class="u-border-3 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/" style="padding: 8px 36px;">Trang chủ</a>
              </li>
              <li class="u-nav-item">
                <a class="u-border-3 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" style="padding: 8px 36px;">Chuyên ngành&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <div class="u-nav-popup">
                  <ul class="u-h-spacing-20 u-nav u-unstyled u-v-spacing-12 u-nav-2">
                    <li class="u-nav-item" v-for="(cn, index) in ChuyenNganh" :key="index">
                      <a class="u-active-palette-1-light-2 u-button-style u-hover-custom-color-6 u-nav-link u-palette-1-dark-2" @click="setMajorId(cn.ChuyenNganhId)" href="/Major" target="_blank"> {{cn.TenChuyenNganh}} </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="u-nav-item"><a class="u-border-3 u-border-active-palette-1-light-1 u-border-hover-palette-1-light-1 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/About" style="padding: 8px 36px;">Giới thiệu</a>
              </li>
            </ul>
          </div>
          
        </nav>
        </div>
</header>
<!-- End Header -->

    <router-view/>
    
    <footer class="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-footer u-grey-80" id="sec-df29"><div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <img class="u-image u-image-default u-preserve-proportions u-image-1" src="./assets/images/footerlogo.png" alt="" data-image-width="200" data-image-height="70">
                  <p class="u-align-left u-custom-font u-font-merriweather u-text u-text-1">Website gợi ý chuyên ngành cho sinh viên khoa&nbsp; Công nghệ Thông tin trường Đại học Khoa học Tự nhiên.</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2">
                  <h2 class="u-align-left u-custom-font u-font-merriweather u-subtitle u-text u-text-palette-1-dark-1 u-text-2">Chuyên ngành</h2>
                  <div class="u-list u-list-1">
                    <div class="u-repeater u-repeater-1">
                      <div class="u-container-style u-list-item u-repeater-item" v-for="(cn, index) in ChuyenNganh" :key="index">
                        <div class="u-container-layout u-similar-container u-container-layout-3">
                          <a class="u-text u-custom-font u-font-merriweather u-text-default u-text-3" @click="setMajorId(cn.ChuyenNganhId)" href="/Major" target="_blank"> {{cn.TenChuyenNganh}} </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
                <div class="u-container-layout u-container-layout-10">
                  <h2 class="u-align-left u-custom-font u-font-merriweather u-subtitle u-text u-text-palette-1-dark-1 u-text-10">Liên hệ</h2>
                  <div class="u-list u-list-2">
                    <div class="u-repeater u-repeater-2">
                      <div class="u-container-style u-list-item u-repeater-item">
                        <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-11">
                          <p class="u-align-left u-text u-text-11"> &nbsp;<span class="u-file-icon u-icon u-text-white u-icon-1"><i class="fa fa-phone" aria-hidden="true"></i></span>+84 23456789
                          </p>
                        </div>
                      </div>
                      <div class="u-container-style u-list-item u-repeater-item">
                        <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-12">
                          <p class="u-align-left u-text u-custom-font u-font-merriweather u-text-12"> &nbsp;<span class="u-file-icon u-icon u-text-white u-icon-2"><i class="fa fa-envelope" aria-hidden="true"></i></span>contact@support.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></footer>
    
   <span style="height: 64px; width: 64px; margin-left: 0px; margin-right: auto; margin-top: 0px; background-image: none; right: 20px; bottom: 20px; padding: 14px;" class="u-back-to-top u-icon u-icon-circle u-opacity u-opacity-85 u-palette-1-base u-spacing-15" data-href="#">
        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 551.13 551.13"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-1d98"></use></svg>
        <svg class="u-svg-content" enable-background="new 0 0 551.13 551.13" viewBox="0 0 551.13 551.13" xmlns="http://www.w3.org/2000/svg" id="svg-1d98"><path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path></svg>
   </span>
  </body>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data(){
    return{
      ChuyenNganh: [],
      fit4uURL: 'https://fit4u-admin.somee.com'

    }
  },

  mounted(){
    this.getChuyenNganh();
  },

  methods: {
    setMajorId(id) {
      localStorage.MajorId = id;
    },

    getChuyenNganh() {
        axios.get(this.fit4uURL + "/api/ChuyenNganh").then((response) => {
          this.ChuyenNganh = response.data;
          localStorage.SLChuyenNganh = this.ChuyenNganh.length;
        });
      },
  }
}
</script>

<style>
@import './assets/style.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/responsive.css';
@import './assets/css/jquery-ui.css';
@import './assets/css/font-awesome.min.css';
@import './assets/css/metismenu.min.css';
/* @import './assets/js/popper.min.js'; */

@import './assets/css/nicepage.css';
@import './assets/css/homepage.css';
@import './assets/css/upload.css';
@import './assets/css/result.css';
@import './assets/css/test.css';
@import './assets/css/about.css';
@import './assets/css/major.css';
</style>