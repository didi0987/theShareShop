<template>
  <div id='app'>
<div class="wrapper row0">
    <topbar></topbar>
    <!-- </div> -->
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row1">
  <!-- <header id="header" class="hoc clear">  -->
  <!--    <1!--  ################################################################################################  --1>  -->
  <!--   <1!--  ################################################################################################  --1>  -->
  <!-- </header> -->
<myheader></myheader>
<!-- <topnav></topnav> -->
</div>
<!-- ################################################################################################ -->
<div class="wrapper row3">
<gallery></gallery>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper bgded overlay" style="background-image:url(' ../../resource/images/demo/backgrounds/01.png');"> -->
<!--     <pageintro></pageintro> -->
<!-- </div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <h6 class="coachtitle">学岛 <div class="bigdot">·</div> 规划家们</h6>
 <main class="hoc container clear">
<div class="content">
     <div class="group demo">
          <div class="one_third first"><coach_stick></coach_stick></div>
          <div class="one_third "><coach_stick></coach_stick></div>
          <div class="one_third "><coach_stick></coach_stick></div>
          <div class="one_third first"><coach_stick></coach_stick></div>
      </div>
</div>
</main>
<div class="clear"></div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
    <moreinfo></moreinfo>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper row2"> -->
<!--   <figure class="hoc container clear">  -->
<!--      <1!--  ################################################################################################  --1>  -->
<!--     <figcaption class="sectiontitle"> -->
<!--       <h6 class="heading">Dictum in non ligula</h6> -->
<!--       <p>Non lectus laoreet accumsan mauris placerat magna.</p> -->
<!--     </figcaption> -->
<!--     <ul class="nospace group"> -->
<!--       <li class="one_quarter first"><a href="#"><img src=" ../../resource/images/demo/222x138.png" alt=""></a></li> -->
<!--       <li class="one_quarter"><a href="#"><img src=" ../../resource/images/demo/222x138.png" alt=""></a></li> -->
<!--       <li class="one_quarter"><a href="#"><img src=" ../../resource/images/demo/222x138.png" alt=""></a></li> -->
<!--       <li class="one_quarter"><a href="#"><img src=" ../../resource/images/demo/222x138.png" alt=""></a></li> -->
<!--     </ul> -->
<!--      <1!--  ################################################################################################  --1>  -->
<!--   </figure> -->
<!-- </div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <div class="wrapper row4 bgded overlay" style="background-image:url(' ../../resource/images/demo/backgrounds/03.png');"> -->
    <div class="wrapper row4">
    <myfooter></myfooter>
    </div>
<!-- </div> -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- <a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a> -->
<!-- JAVASCRIPTS -->
<!-- <script src="layout/scripts/jquery.min.js"></script> -->
<!-- <script src="layout/scripts/jquery.backtotop.js"></script> -->
<!-- <script src="layout/scripts/jquery.mobilemenu.js"></script> -->
<!-- </body> -->
<!-- </html> -->
</template>
    <script>
   import gallery from "../components/gallery/gallery.vue"
   import myheader  from "../components/header/header.vue"
   import topbar  from "../components/topbar.vue"
   //import topnav  from "../components/topnav.vue"
   import pageintro  from "../components/pageintro.vue"
   //import readypackage  from "../components/readypackage.vue"
   import myfooter  from "../components/footer.vue"
   import coach_stick  from "../components/coach_stick/coach_stick.vue"
   import moreinfo  from "../components/moreinfo.vue"

   //import  '../components/coach_stick/coach_stick.js'
export default {
    name:'app',
    components:{
    topbar,
    myheader,
    pageintro,
    coach_stick,
    myfooter,
    moreinfo,
    gallery
    }

}
    </script>
    <style>
    *,*::before,*::after{
    transition:none;
    }
    .image-circle
    {
    border-radius:50%;
    }
    .coach-avatar
    {
    background-color:#FFFFFF;
    height:100px;
    margin-bottom:20px;
    }
    .coach-button
    {
    margin:30px auto 0px auto;
    background-color:#FFFFFF;
    width: 50%;
    height: 35px;
    font-size:14px;
    border-width:0px;
    }
    .coach-strong{
        margin:0px auto;
        display:inline-block;
    }
    .coach-button strong a
    {
    color:#797979;
    display:block;
    }
    .coach-button i
    {
    }
    </style>
