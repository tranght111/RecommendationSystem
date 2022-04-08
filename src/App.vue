<template>

  <div id="app">

    <!-- header inner -->
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <a href="index.html"><img src="./assets/images/logo4.png" alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div class="header_information">
                        <nav class="navigation navbar navbar-expand-md navbar-dark ">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">
                                 <li class="nav-item active">
                                    <a class="nav-link" href="/#/Homepage"> TRANG CHỦ  </a>
                                 </li> 
                                 <li class="nav-item">
                                    <a class="nav-link" href="clients.html">CHUYÊN NGÀNH</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="ourwork.html">GIỚI THIỆU</a>
                                 </li>
                              </ul>
                              <div class="sign_btn"><a href="#">Get A Quote</a></div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    <!-- end header inner -->

<!-- Parallax Section -->
      <div class="parallax-section parallax1">
         <div class="grid grid-pad">
             <div class="col-1-1">
                  <div class="content content-header" >
                     <h2>Hệ thống tư vấn chọn chuyên ngành cho sinh viên khoa Công nghệ Thông tin 
                        trường Đại học Khoa học Tự nhiên</h2>
                     <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, fuga, consectetur sequi consequuntur nisi placeat ullam maiores perferendis. Quod, nihil reiciendis saepe optio libero minus et beatae ipsam reprehenderit sequi.</p> -->
                     <!-- <a target="_blank" class="btn btn-ghost" href="#">Find Out More</a> -->
                 </div>
             </div>
         </div>
     </div>
<!-- End Parallax Section -->

<!-- CurveUp -->
     <svg class="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
     </svg>

      <router-view/>

      <!-- middle-->
      
      <!-- end middle-->
     
      <!--  footer -->
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row border-top">
                  <div class="col-md-6 padding_bottom1   ">
                     <h3>Subscribe Now</h3>
                     <form class="footer_form">
                        <input class="enter" placeholder="Enter your email" type="type" name="Enter your email">
                        <button class="submit">submit</button>
                     </form>
                  </div>
                  <div class="col-md-6">
                     <div class="row">
                        <div class="col-md-5 offset-md-1 padding_bottom1">
                           <h3>Links</h3>
                           <ul class="cont">
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                           </ul>
                        </div>
                        <div class="col-md-5 offset-md-1">
                           <h3>Contact us</h3>
                           <ul class="cont">
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2019 All Rights Reserved. <a href="https://html.design/"> Free Html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <!-- end footer -->

</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import './assets/style.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/responsive.css';
@import './assets/css/jquery.mCustomScrollbar.min.css';
@import './assets/css/jquery-ui.css';
@import './assets/css/font-awesome.min.css';
</style>