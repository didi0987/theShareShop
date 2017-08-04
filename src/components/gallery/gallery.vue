
<template>
  <ul id="slippry-demo">
    <li>
      <a href="#buybutton"><img src="http://www.theshare.cn/Content/globle/images/shop/gallery1.jpg" alt="Welcome to Slippry!"></a>
    </li>
    <li>
      <a href="#buybutton"><img src="http://www.theshare.cn/Content/globle/images/shop/gallery2.jpg"  alt="This is an awesome jQuery slider plugin."></a>
    </li>
    <li>
      <a href="#buybutton"><img src="http://www.theshare.cn/Content/globle/images/shop/gallery3.jpg" alt="Check it out, you are going to <span class='red'>♥</span> it :)"></a>
    </li>
  </ul>
</template>

<script>


export default {
mounted:function(){
$('#slippry-demo').slippry(
{
  captions:false
})
}

}


</script>
  <style>
@import "../gallery/slippry.css";
.sy-slide > a > img {max-height: 480px;}


@media screen and (max-width: 976px){

  .sy-slide > a > img {
  max-height: 200px;
  }
}
   </style>
