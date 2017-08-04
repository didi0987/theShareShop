<template>
  <div id="timeline">
    <div class="container">
    <div class="row">
        <div class="col-md-11">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-icon">
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="timeline-content">
                        <h2 class="title">购买学岛易选校并提供个人资料</h2>
                        <p class="description">填写留学需求，下单并支付。</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-icon">
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="timeline-content right">
                        <h2 class="title">提供评估报告以及参考报价</h2>
                        <p class="description">获得1-3位留学顾问的最优选校方案及留学服务报价。</p>

                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-icon">
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="timeline-content">
                        <h2 class="title">你的反馈意见</h2>
                        <p class="description">
                          选择最满意的一份留学方案并与顾问进一步沟通（赠送1小时顾问1对1答疑时间）。

                        </p>

                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
</script>
<style>
.main-timeline{
    position: relative;
    -webkit-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}
.main-timeline:before{
    content: "";
    width: 3px;
    height: 100%;
    background: #54ABDC;
    position: absolute;
    top: 0;
    left: 50%;
}
.main-timeline .timeline{
    margin-bottom: 50px;
    position: relative;
}
.main-timeline .timeline:before,
.main-timeline .timeline:after{
    content: "";
    display: block;
    width: 100%;
    clear: both;
}
.main-timeline .timeline-icon{
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #54ABDC;
  overflow: hidden;
  margin-left: -18px;
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
}
.main-timeline .timeline-icon i{
  font-size: 13px;
  line-height: 35px;
  color: #fff;
}
.main-timeline .timeline-content{
    width: 45%;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
.main-timeline .timeline-content:before{
  content: "";
border-left: 7px solid #54ABDC;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
position: absolute;
left: 45%;
top: 2px;
}
.main-timeline .title{
    font-size: 12px;
    font-weight: 300;
    color: #fff;
    padding: 5px;
    background: #54ABDC;
    border-radius: 3px 3px 0 0;
    margin: -20px -20px 10px;
}
.main-timeline .description{
    font-size: 12px;
    color: #726f77;
    text-align: -webkit-left;
    text-align:left;
}

.main-timeline .read-more:hover{
    top: 2px;
    left: 2px;
    box-shadow: none;
}
.main-timeline .timeline-content.right{
    float: right;
}
.main-timeline .timeline-content.right:before{
    content: "";
    right: 45%;
    left: inherit;
    border-left: 0;
    border-right: 7px solid #54ABDC;
}
@media only screen and (max-width: 990px){
    .main-timeline .title{
        font-size: 12px;
    }
    .main-timeline .timeline-content::before{
        top: 16px;
    }
}
@media only screen and (max-width: 767px){
    .main-timeline{ margin-left: 20px; }
    .main-timeline:before{ left: 0; }
    .main-timeline .timeline-content{
        width: 90%;
        float: right;
    }
    .main-timeline .timeline-content:before,
    .main-timeline .timeline-content.right:before{
        left: 10%;
        right: inherit;
        margin-left: -6px;
        border-left: 0;
        border-right: 7px solid #54ABDC;
    }
    .main-timeline .timeline-icon{
        left: 0;
    }
}
@media only screen and (max-width: 479px){
    .main-timeline .timeline-content{
        width: 85%;
    }
    .main-timeline .timeline-content:before,
    .main-timeline .timeline-content.right:before{
        left: 15%;
    }
    .main-timeline .title{
        font-size: 12px;
    }
    .main-timeline .timeline-content:before{
        top: 4px;
    }
}
</style>
