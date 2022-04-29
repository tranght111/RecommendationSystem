<template>

  <div id="app">

  <body class="u-body u-xl-mode">
     <!-- Header -->
     <header class="u-clearfix u-header u-palette-1-light-2 u-sticky u-sticky-e93e u-header" id="sec-b84c">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse u-custom-font u-font-merriweather" style="font-size: 1rem; letter-spacing: 0px; text-transform: uppercase; font-weight: 700;">
            <a class="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-color u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#" style="padding: 3px 4px; font-size: calc(1em + 6px);">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
              <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g>
                 <rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect>
              <rect y="13" width="16" height="2"></rect>
</g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-custom-font u-font-merriweather u-nav u-spacing-30 u-unstyled u-nav-1">
               <li class="u-nav-item">
                  <a>
                     <router-link to="/" tag="span" class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" 
                  style="padding: 8px 36px;"> TRANG CHỦ  </router-link>
                  </a>
                  <!-- href="Trang-chủ.html" style="padding: 8px 36px;">Trang chủ</a> -->
</li><li class="u-nav-item">
  <a class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" style="padding: 8px 36px;">Chuyên ngành <i class="fa fa-caret-down" aria-hidden="true"></i></a>

                     <!-- <router-link to="/Majors" tag="span" class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"  -->
                  <!-- style="padding: 8px 36px;"> CHUYÊN NGÀNH  <i class="fa fa-caret-down" aria-hidden="true"></i></router-link>  -->
                  <!-- </a> -->

<div class="u-nav-popup">
   <ul class="u-h-spacing-20 u-nav u-unstyled u-v-spacing-12 u-nav-2">
   <li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2"  href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=83D3SQKHWTg%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Công nghệ Tri thức</a>
</li><li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2" href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=pqUpLNAPlak%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Hệ thống Thông tin</a>
</li><li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2" href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=83D3SQKHWTg%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Khoa học Máy tính</a>
</li><li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2" href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=7%2fqa26dddOg%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Kỹ thuật Phần mềm</a>
</li><li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2" href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=kcEqLQ2P%2fYA%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Mạng máy tính &amp; Viễn thông</a>
</li><li class="u-nav-item"><a class="u-active-palette-1-light-2 u-button-style u-hover-palette-1-dark-1 u-nav-link u-palette-1-dark-2" href="https://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=83D3SQKHWTg%3d&amp;tabid=1133&amp;mid=3838" target="_blank">Thị giác Máy tính</a>
</li></ul>
</div>
</li><li class="u-nav-item"><a>
                     <router-link to="/About" tag="span" class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" 
                  style="padding: 8px 36px;"> GIỚI THIỆU  </router-link>
                  </a>
   <!-- href="Giới-thiệu.html" style="padding: 8px 36px;">Giới thiệu</a> -->
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3"><li class="u-nav-item"><a class="u-button-style u-nav-link" ><router-link to="/" tag="span" class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" 
                  style="padding: 8px 36px;"> TRANG CHỦ  </router-link></a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" > CHUYÊN NGÀNH </a>
<!-- </li><li class="u-nav-item"><a class="u-button-style u-nav-link" > <router-link to="/Majors" tag="span" > CHUYÊN NGÀNH </router-link> </a> -->
   <div class="u-nav-popup"><ul class="u-h-spacing-20 u-nav u-unstyled u-v-spacing-12 u-nav-4">
      <li class="u-nav-item"><a class="u-button-style u-nav-link">Công nghệ Tri thức</a>
</li><li class="u-nav-item"><a  class="u-button-style u-nav-link">Hệ thống Thông tin</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link">Khoa học Máy tính</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link">Kỹ thuật Phần mềm</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link">Mạng máy tính &amp; Viễn thông</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link">Thị giác Máy tính</a>
</li></ul>
</div> 
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" ><router-link to="/About" tag="span" class="u-border-3 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" 
                  style="padding: 8px 36px;"> GIỚI THIỆU  </router-link></a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        <a data-page-id="1791089" class="u-border-no-bottom u-border-no-left u-border-no-top u-border-none u-border-palette-2-base u-btn u-btn-round u-button-style u-custom-font u-font-merriweather u-none u-radius-6 u-text-palette-1-dark-1 u-btn-1"> <router-link to="/" tag="span" > Gợi&nbsp;ý chuyên ngành  </router-link>  </a>
      </div>
</header>
<!-- End Header -->

    <router-view/>
    
    <footer class="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-footer u-grey-80" id="sec-df29"><div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-valign-top u-container-layout-1">
                  <a class="u-border-no-bottom u-border-no-left u-border-no-top u-border-none u-border-palette-2-base u-btn u-btn-round u-button-style u-custom-font u-font-merriweather u-none u-radius-6 u-text-palette-1-dark-1 u-btn-1"> Gợi&nbsp;ý chuyên ngành </a>
                  <p class="u-align-left u-custom-font u-font-merriweather u-text u-text-1">Website gợi ý chuyên ngành cho sinh viên khoa Công nghệ Thông tin trường Đại học Khoa học Tự nhiên</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-top-lg u-valign-top-xl u-container-layout-2">
                  <h2 class="u-align-left u-custom-font u-font-merriweather u-subtitle u-text u-text-palette-1-dark-1 u-text-2">Liên hệ</h2>
                  <p class="u-align-left u-text u-text-3"><span class="u-file-icon u-icon u-text-white u-icon-1"><i class="fa fa-phone" aria-hidden="true"></i></span>&nbsp;​&nbsp;+84 23456789
                  </p>
                  <p class="u-align-left u-text u-text-4"><span class="u-file-icon u-icon u-text-white u-icon-2"><i class="fa fa-envelope" aria-hidden="true"></i></span> contact@support.com
                  </p>
                  <p class="u-align-left u-text u-text-5">Copyright&nbsp;&nbsp;<span class="u-file-icon u-icon u-text-white u-icon-3"><i class="fa fa-copyright" aria-hidden="true"></i></span> 2022. All rights reserved
                  </p>
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
export default {
  name: 'App',
}
</script>

<style>
@import './assets/style.css';
/* @import './assets/css/bootstrap.min.css'; */
@import './assets/css/responsive.css';
@import './assets/css/jquery.mCustomScrollbar.min.css';
@import './assets/css/jquery-ui.css';
@import './assets/css/font-awesome.min.css';

@import './assets/css/nicepage.css';
@import './assets/css/homepage.css';
@import './assets/css/upload.css';
@import './assets/css/result.css';
@import './assets/css/test.css';
@import './assets/css/about.css';
</style>