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
                              <a href="/#/Home"><img src="./assets/images/logo4.png" alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div class="header_information">
                        <nav class="navigation navbar navbar-expand-md navbar-dark " data-spy="affix" data-offset-top="197">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">
                                 <li class="nav-item active">
                                    <a class="nav-link" href="/#/Home"> TRANG CHỦ  </a>
                                 </li> 
                                 <li class="nav-item">
                                    <a class="nav-link" href="/#/">CHUYÊN NGÀNH</a>
                                 </li>
                                 <li class="nav-item">
                                    <router-link to="/About" tag="span" class="nav-link" >GIỚI THIỆU</router-link>
                                 </li>
                              </ul>
                              <!-- <div class="sign_btn"><a href="#">Get A Quote</a></div> -->
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    <!-- end header inner -->


      <router-view/>

     
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