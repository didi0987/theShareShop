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

<div class="wrapper row3">
    <h6 class="heading coachtitle">学岛 <div class="bigdot">·</div>  规划家</h6>
    <main class="hoc container clear">
<div class="content">
    <coachfull></coachfull>
</div>
</main>
<div class="clear"></div>
</div>

<!--End coach_full-->
<div class="wrapper row3">
    <moreinfo></moreinfo>
</div>
<!-- <div class="wrapper row4 bgded overlay" style="background-image:url(' ../../resource/images/demo/backgrounds/03.png');"> -->
 <div class="wrapper row4"> <myfooter></myfooter>
</div>   <!-- </div> -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear">
    <p class="fl_left">Copyright &copy; 2016 - All Rights Reserved - <a href="#">Domain Name</a></p>
  </div>
</div>
</div>
</template>
    <script>
   //import gallery from "../components/gallery/gallery.vue"
   import myheader  from "../components/header/header.vue"
   import topbar  from "../components/topbar.vue"
   //import topnav  from "../components/topnav.vue"
   //import pageintro  from "../components/pageintro.vue"
   //import readypackage  from "../components/readypackage.vue"
   import myfooter  from "../components/footer.vue"
   //import coach_stick  from "../components/coach_stick/coach_stick.vue"
   import moreinfo  from "../components/moreinfo.vue"
import coachfull  from "../components/coach_full/coach_full.vue"
   import '../components/coach_full/assets/js/smoothscroll.js'
   import '../components/coach_full/assets/js/Chart.js'
   import "../components/coach_full/assets/js/bootstrap.js"
  export default {
    name:'app',
    components:{
    coachfull,
    topbar,
    myheader,
    myfooter,
    moreinfo
    }

}
    </script>
    <style>
       </style>
