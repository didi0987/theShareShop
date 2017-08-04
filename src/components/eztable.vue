<template>
<div class="pricing-table">
<div class="pricing-row">

  <h6 class="title">学岛 <div class="bigdot">·</div> 易选校</h6>

</div>
<div class="pricing-row price">
<i class="fa fa-rmb"></i>  279 元
</div>
<div class="pricing-row content">
<strong>3</strong> 份选校定位方案以及留学服务报价 </br>
(仅英国、澳洲、新西兰、香港)
</div>
<div class="pricing-row content">
均赠送1小时顾问1对1选校答疑时间
</div>
<div name="buybutton" class="pricing-row">
<button @click="onBuy">立刻购买</button>
</div>
</div>


</template>

<style>
.pricing-table {
    text-align: center;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,.07);
    background-color: #fff;
    margin: 2rem auto;
    width:50%;
}
@media screen and (max-width:976px) {
.pricing-table {width:90%;}
}
.pricing-table .pricing-row {
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
}
.pricing-table .title {
    margin:10px auto;
    font-weight: bold;
}
.pricing-table .price {
    font-size: 1.4rem;
}
.pricing-table .content {
    font-size: 1.1rem;
}
.pricing-table button{background-color: #FF8939;padding: 20px 30px;border-radius: 3px;color: #fff;text-align: center;border:0;max-width:250px;width:200px;font-size:1.2rem; margin:10px auto;}
</style>
<script>
function isWeixinBrowser(){

  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}
export default {
  methods:{
    onBuy:function(){

      if(isWeixinBrowser()){

        alert("暂不支持微信浏览器购买,请点击右上方,选择用第三方浏览器(Safari,Chrome等)打开,或在电脑上访问学岛网站购买.")
      }
      else{
          window.location.href="http://www.theshare.cn/ez/buy_ez";
      }

    }

  }

}

</script>
