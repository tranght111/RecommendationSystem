<template>
    <section class="u-clearfix u-upload-section-1" id="sec-e3ae">
      <div class="u-clearfix u-sheet u-sheet-2">
        <div class="u-container-style u-group u-white u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h1 class="u-custom-font u-font-merriweather u-text u-text-default u-title u-text-11">Thông tin bảng&nbsp;điểm </h1>
            <div class="u-form u-form-1">
                        <div class="u-form-group u-form-group-15">
                          <label for="text-871d" class="u-label u-label-1">Mã số sinh viên</label>
                          <input type="text" placeholder="Nhập vào MSSV" id="text-871d" name="mssv" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                        </div>
                      </div>
            <p class="u-text u-text-22"> Lưu ý: Sinh viên chỉ chọn 1 trong 2 lựa chọn bên dưới&nbsp;để cung cấp thông tin bảng điểm của mình.&nbsp;</p>
            
            <div class="u-text u-text-default u-text-palette-1-dark-1 u-text-3">
            <input type="radio" id="p1" value="Plan1" v-model="PlanPicked" />
            <span v-if="PlanPicked === 'Plan2'">
              <label :style="StylePlanNonDisplay" for="p1">&nbsp; Lựa chọn 1: Tải lên bảng điểm&nbsp;</label>
              <!-- <span :style="StylePlanNonDisplay" style="font-weight: 400; font-style: italic;">(chỉ chấp nhận tệp tin Excel)</span> -->
            </span>
            <span v-else>
              <label for="p1">&nbsp; Lựa chọn 1: Tải lên bảng&nbsp;điểm&nbsp; </label>
              <span style="font-weight: 400; font-style: italic; color: red; font-size: 1.125rem">(chỉ chấp nhận tệp tin Excel)</span>
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
            <a href="/" class="u-btn u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-1"><i class="fa fa-upload" aria-hidden="true"></i>&nbsp;Tải tệp tin
            </a>
            <!-- </div> -->
            </div>
            <!-- END PLAN 1 -->
            <!-- <p class="u-text u-text-palette-1-dark-1 u-text-22" style="font-size: 16px; padding-left: 20px"><i class="fa fa-arrow-down" aria-hidden="true"></i> Nhập MSSV bên dưới và nhấn Lưu </p> -->
            <div class="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
            <!-- <p class="u-text u-text-default u-text-5">Lựa chọn 2: Nhập các thông tin&nbsp;điểm bên dưới</p> -->
            <div class="u-text u-text-default u-text-palette-1-dark-1 u-text-5">
            <input type="radio" id="p2" value="Plan2" v-model="PlanPicked" />
            <span v-if="PlanPicked === 'Plan1'">
              <label :style="StylePlanNonDisplay" for="p2">&nbsp; Lựa chọn 2: Nhập các thông tin điểm bên dưới </label></span>
            <span v-else>
              <label for="p2">&nbsp; Lựa chọn 2: Nhập các thông tin điểm bên dưới </label> </span>
            </div>
            <!-- PLAN 2 -->
            <div v-if="PlanPicked === 'Plan2'"> 
            <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
              <div class="u-layout">
                <div class="u-layout-row">
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                    <div class="u-container-layout u-container-layout-3">
                      <div class="u-form u-form-1">
                        <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style="padding: 10px;">
                          <div class="u-form-group u-form-name">
                            <label for="name-7f32" class="u-label u-label-1">Cơ sở trí tuệ nhân tạo</label>
                            <input type="text" placeholder="Nhập điểm" id="name-7f32" name="cosotrituenhantao" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white">
                          </div>
                          <div class="u-form-group">
                            <label for="email-7f32" class="u-label u-label-2">Nhập môn lập trình</label>
                            <input type="text" placeholder="Nhập điểm" id="email-7f32" name="nhapmonlaptrinh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group">
                            <label for="message-7f32" class="u-label u-label-3">Kỹ thuật lập trình</label>
                            <input placeholder="Nhập điểm" rows="1" cols="50" id="message-7f32" name="kythuatlaptrinh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"   type="text">
                          </div>
                          <div class="u-form-group u-form-group-4">
                            <label for="text-9df3" class="u-label u-label-4">Phương pháp lập trình hướng đối tượng</label>
                            <input type="text" id="text-9df3" name="phuongphaplaptrinhhuongdoituong" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"   placeholder="Nhập điểm">
                          </div>
                          <div class="u-form-group u-form-group-5">
                            <label for="text-69d1" class="u-label u-label-5">Cấu trúc dữ liệu và giải thuật</label>
                            <input type="text" placeholder="Nhập điểm" id="text-69d1" name="cautrucdulieuvagiaithuat" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group u-form-group-6">
                            <label for="text-b499" class="u-label u-label-6">Cơ sở dữ liệu</label>
                            <input type="text" placeholder="Nhập điểm" id="text-b499" name="cosodulieu" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group u-form-group-7">
                            <label for="text-5ea4" class="u-label u-label-7">Hệ điều hành</label>
                            <input type="text" placeholder="Nhập điểm" id="text-5ea4" name="hedieuhanh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <!-- <div class="u-align-left u-form-group u-form-submit">
                            <a href="#" class="u-btn u-btn-submit u-button-style">Submit</a>
                            <input type="submit" value="submit" class="u-form-control-hidden">
                          </div> -->
                          <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                          <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                          <input type="hidden" value="" name="recaptchaResponse">
                        </form>
                      </div>
                        
                    </div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div class="u-container-layout u-valign-top u-container-layout-4">
                      <div class="u-form u-form-2">
                        <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form-1" style="padding: 10px;">
                          <div class="u-form-group u-form-name">
                            <label for="name-0c26" class="u-label u-label-1">Mạng máy tính</label>
                            <input type="text" placeholder="Nhập điểm" id="name-0c26" name="mangmaytinh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" >
                          </div>
                          <div class="u-form-group">
                            <label for="email-0c26" class="u-label u-label-1">Hệ thống máy tính</label>
                            <input type="text" placeholder="Nhập điểm" id="email-0c26" name="hethongmaytinh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group">
                            <label for="message-0c26" class="u-label u-label-1">Đại số tuyến tính</label>
                            <input placeholder="Nhập điểm" rows="4" cols="50" id="message-0c26" name="daisotuyentinh" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"   type="text">
                          </div>
                          <div class="u-form-group u-form-group-12">
                            <label for="text-c140" class="u-label u-label-1">Xác suất thống kê</label>
                            <input type="text" placeholder="Nhập điểm" id="text-c140" name="xacsuatthongke" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group u-form-group-13">
                            <label for="text-9aed" class="u-label u-label-1">Vi tích phân 1B</label>
                            <input type="text" placeholder="Nhập điểm" id="text-9aed" name="vitichphan1b" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <div class="u-form-group u-form-group-14">
                            <label for="text-871d" class="u-label u-label-1">Vi tích phân 2B</label>
                            <input type="text" placeholder="Nhập điểm" id="text-871d" name="vitichphan2b" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"  >
                          </div>
                          <!-- <div class="u-align-right u-form-group u-form-submit">
                            <a href="#" class="u-btn u-btn-submit u-button-style">Lưu</a>
                            <input type="submit" value="submit" class="u-form-control-hidden">
                          </div> -->
                          <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                          <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                          <input type="hidden" value="" name="recaptchaResponse">
                        </form>
                      </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
            </div>
            <!-- END PLAN 2 -->
            <div class="u-align-center">
              <a href="/Test" class="u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-4"> Lưu </a>
              <!-- <button type="button" class="u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-btn-4" data-toggle="modal" data-target="#saveModal"> Lưu
              </button> -->
              <!-- <input type="submit" value="submit" class="u-form-control-hidden"> -->
            </div>
            <div id="saveModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Lưu bảng điểm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                  </div>
                <div class="modal-body">
                  <h5 class="font-16">Đã lưu thông tin bảng điểm!</h5>
                  <p></p>
                  </div>
                <div class="modal-footer">
                  <!-- <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button> -->
                  <button type="button" class="btn btn-primary waves-effect waves-light">Làm bài đánh giá</button>
                </div>
              </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- modal -->                        
  

</template>

<script>
/* eslint-disable */
export default {
    name: 'Upload',
    data() {
      return {
        StylePlanNonDisplay: {
          color: '#adcce9',

        },
        PlanPicked: 'Plan1',
      }
    }
}
</script>

<style>
  
</style>