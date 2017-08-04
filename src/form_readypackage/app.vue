<template>
  <div id='app'>
<div class="wrapper row0">
    <topbar></topbar>
    <!-- </div> -->
</div>
<div class="wrapper row1">
<myheader></myheader>
<!-- <topnav></topnav> -->
</div>
<!--Start coach_full-->

<div class="wrapper row3" id="form_ez">
    <h6 class="heading coachtitle">购买 学岛 <div class="bigdot">·</div>  易选校</h6>
    <h4><p>请如实填写我们的背景资料表格,并留下你的联系方式,付款完成之后,我们会尽快联系到你</p></h4>
<div class="hoc clear">
    <form_rp></form_rp>
</div>
<div class="clear"></div>
</div>

<!--End coach_full-->
<!-- <div class="wrapper row4 bgded overlay" style="background-image:url(' ../../resource/images/demo/backgrounds/03.png');"> -->
 <div class="wrapper row4 bgded overlay" style="background-image:url('http://www.theshare.cn/Content/globle/images/shop/footer-top.jpg');">
   <myfooter></myfooter>
</div>   <!-- </div> -->

</div>
</template>
    <script>
   import myheader  from "../components/header/header.vue"
   import topbar  from "../components/topbar.vue"
   import myfooter  from "../components/footer.vue"
   import moreinfo  from "../components/moreinfo.vue"
   import coachfull  from "../components/coach_full/coach_full.vue"
   import form_rp  from "../components/form_ReadyPackage.vue"
  export default {
    name:'app',
    components:{
    coachfull,
    topbar,
    myheader,
    myfooter,
    form_rp,
    moreinfo
    }

}
    </script>
    <style>
#form_ez .coachtitle{font-size:1.6rem;}
       </style>
