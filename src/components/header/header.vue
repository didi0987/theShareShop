<template>
    <div id="header" class="hoc clear">

  <div id="sidr">
    <!-- Your content -->
    <ul>
      <li><a href="index.html">首页</a></li>
      <li><a href="./form_readypackage.html">购买 学岛 易选校</a></li>
      <li><a target="_blank" href="http://www.theshare.cn">学岛网</a></li>
    </ul>
  </div>
  <a id="simple-menu" class="toggle" href="#sidr"><i class="fa fa-bars fa-3x"></i></a>
        <div id="logo" class="fl_left">

            <h1><a href="index.html"><img class="logo-img" src="http://theshare.cn/content/globle/images/theshare_logo_large.png"/></a></h1>
    </div>
       </div>

</template>
<style>
#header{padding:10px 0;}

#header #logo *{margin:10px; padding:0; line-height:1;}
#header #logo h1{margin-top:8px; font-size:24px;}
#header #logo p{color:#FFFFFF;margin-top:-2px; font-size:.9rem; text-transform:lowercase;}

#header #quickinfo{font-size:.8rem; text-transform:uppercase;}
#header #quickinfo li{margin-right:50px;}
#header #quickinfo li:last-child{margin-right:0;}
#header #quickinfo strong{display:block; margin:0 0 0px 0; padding:0; font-size:.9rem;}
#header #quickinfo br{display:none;}

 .logo-img{
height:30px;
}
.toggle
{
    float:left;
    padding:3px 0px 0px 0px;
}
.fa-bars
{
    color: white;
    border-style: solid;
    border-width: 1px;
    padding: 5px 7px;
    border-radius: 10%;
}
@media screen and (max-width:750px) {

  #header {height:50px;padding:0px;}
  #header #logo * {margin:0px;}
  #header .fa-3x { font-size: 2em}

}

</style>
<script>
$(document).ready(function() {
  $('#simple-menu').sidr();
});
</script>
