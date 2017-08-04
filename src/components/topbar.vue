<template>
<div id="topbar" class="hoc clear">
    <!-- ################################################################################################ -->
    <div class="fl_left">
      <ul>
        <li><i class="fa fa-weixin"></i> 13817475196</li>
        <li><i class="fa fa-qq"></i> 277189023</li>
        <li><i class="fa fa-envelope"></i> hi@theshare.cn</li>

      </ul>
    </div>
    <!-- <div class="fl_right"> -->
    <!--   <ul> -->
    <!--     <li><a href="#"><i class="fa fa-lg fa-home"></i></a></li> -->
    <!--     <li><a href="#">Login</a></li> -->
    <!--     <li><a href="#">Register</a></li> -->
    <!--   </ul> -->
    <!-- </div> -->
    <!-- ################################################################################################ -->
    </div>
</template>
<style>
#topbar{padding:5px 0; font-size:.8rem; text-transform:uppercase;}
#topbar *{margin:0; padding:0; list-style:none;}
#topbar ul li{display:inline-block; margin-right:10px; padding-right:15px; border-right:1px solid;}
#topbar ul li:last-child{margin-right:0; padding-right:0; border-right:none;}
#topbar i{margin:0 5px 0 0; line-height:normal;}
#topbar, #topbar ul li{border-color:rgba(255,255,255,.2);}
#topbar > div:last-of-type li:first-child a{color:#FFFFFF;}
@media screen and (max-width:750px) {
#topbar > div:last-of-type ul{ margin-bottom: 0px;}
#topbar ul li{margin:0px; padding-right: 2px}
}
</style>
