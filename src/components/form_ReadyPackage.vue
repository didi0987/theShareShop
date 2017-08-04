<template>
  <div class="container">

  <div class="stepwizard">
      <div class="stepwizard-row setup-panel">
        <div class="stepwizard-step">
          <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
          <p>个人信息</p>
        </div>
        <div class="stepwizard-step">
          <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
          <p>学术背景</p>
        </div>
        <div class="stepwizard-step">
          <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
          <p>联系方式</p>
        </div>
      </div>
    </div>

    <form role="form" v-on:submit.prevent="onSubmit">
      <div class="row setup-content" id="step-1">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="col-md-12">
            <h3> 个人信息</h3>
            <div class="form-group">
              <label class="control-label">姓名</label>
              <input  id="cname" v-model="cname" maxlength="100" type="text" required="required" class="form-control"/>
            </div>
            <div class="form-group">
              <label class="control-label">现居地</label>
              <input v-model="clocation" maxlength="100" type="text" required="required" class="form-control"/>
            </div>
            <div class="form-group">
              <label class="control-label">年龄</label>
              <input v-model="cage" class="form-control" placeholder="选填,请填写数字"></textarea>
            </div>
            <button class="btn btn-primary nextBtn btn-lg" type="button" >下一步</button>
          </div>
        </div>
      </div>
      <div class="row setup-content" id="step-2">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="col-md-12">
            <h3> 学术背景</h3>
            <div class="form-group">
              <label class="control-label">现就读学校</label>
              <input v-model="curr_school" maxlength="200" type="text" required="required" class="form-control" placeholder="必填" />
            </div>
            <div class="form-group">
              <label class="control-label">现就读专业</label>
              <input v-model="curr_major" maxlength="200" type="text" required="required" class="form-control"  placeholder="必填"/>
            </div>
            <div class="form-group">
              <label class="control-label">现就读年级</label>
              <input v-model="curr_grade"maxlength="200" type="text" required="required" class="form-control"  placeholder="必填"/>
            </div>
            <div class="form-group">
              <label class="control-label">雅思分数</label>
              <input v-model="ielts" maxlength="200" type="text" class="form-control"  placeholder="选填,请填写数字"/>
            </div>
            <div class="form-group">
              <label class="control-label">目前绩点(GPA)</label>
              <input v-model="gpa" maxlength="200" type="text" required="required" class="form-control" placeholder="必填,请填写数字" />
            </div>
            <div class="form-group">
              <label class="control-label">目标申请国家</label>
              <input v-model="tar_country" maxlength="200" type="text" class="form-control" placeholder="英国,澳洲,新西兰,香港"/>
            </div>
            <div class="form-group">
              <label class="control-label">理想目标申请学校</label>
              <input v-model="tar_school" maxlength="200" type="text" class="form-control"   placeholder="选填"/>
            </div>
            <div class="form-group">
              <label class="control-label">理想目标申请专业</label>
              <input v-model="tar_major" maxlength="200" type="text" class="form-control" placeholder="选填"/>
            </div>
            <div class="form-group">
                  <label class="control-label">获得任何比赛或竞赛奖项</label>
                  <textarea v-model="award" type="text" class="form-control" placeholder="选填" />
                </div>
            <button class="btn btn-primary nextBtn btn-lg" type="button" >下一步</button>
          </div>
        </div>
      </div>
      <div class="row setup-content" id="step-3">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="col-md-12">
            <h3> 联系方式</h3>
            <p>为了尽快能够联系到你,请保持联系方式畅通</p>
            <div class="form-group">
              <label class="control-label">手机</label>
              <input v-model="c_phone" maxlength="200" type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label class="control-label">微信</label>
              <input v-model="c_wechat" maxlength="200" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label class="control-label">QQ</label>
              <input v-model="c_qq" maxlength="200" type="text" class="form-control"  />
            </div>
            <div class="form-group">
              <label class="control-label">其他联系方式</label>
              <input v-model="c_other_name" maxlength="200" type="text" class="form-control" placeholder="如果有,请输入此联系方式名称" />
              <input v-model="c_other_number" maxlength="200" type="text" style="margin-top:10px;" class="form-control" placeholder="如果有,请输入此联系方式号码,id等" />
            </div>

            <button class="btn btn-success btn-lg"  type="submit">提交并付款</button>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>
    <script>
    import VueResource from 'vue-resource'
  Vue.use(VueResource);

export default{
  data(){
return {
  cname:'',
  clocation:'',
  cage:'',
  curr_school:'',
  curr_major:'',
  curr_grade:'',
  ielts:'',
  gpa:'',
  tar_country:'',
  tar_school:'',
  tar_major:'',
  award:'',
  c_phone:'',
  c_wechat:'',
  c_qq:'',
  c_other_name:'',
  c_other_number:''
          }
                },
methods:{

    onSubmit(){
        Vue
        console.log(this.cname,this.clocation,this.cage,this.curr_school,this.curr_major,this.curr_grade,this.ielts,this.gpa,this.tar_country,
        this.tar_school,this.tar_major,this.award,this.c_phone,this.c_wechat,this.c_qq,this.c_other_name,this.c_other_number);
        var posturl="http://www.theshare.cn/ez/put_ez";
        var data = {'name':this.cname,'age':this.cage,'location':this.clocation,'curr_school':this.curr_school,'curr_major':this.curr_major,'curr_grade':this.curr_grade,
                    'ielts':this.ielts,'gpa':this.gpa,'tag_country':this.tar_country,'tar_school':this.tar_school,'tar_major':this.tar_major,'award':this.award,
                    'phone':this.c_phone,'wechat':this.c_wechat,'qq':this.c_qq,'other_name':this.c_other_name,'other_number':this.c_other_number
                  };

                     //下面message的值怎么与上面表单的值绑定？

                     console.log(data);
                    //window.location.href='http://www.google.com';

                     Vue.http.post(posturl, data, { emulateJSON: true}).then((response) => {
                         // success callback
                         console.log('Response: '+response);
                        // Vue.router.push('/Pay?CT=5&prid=14&Au=0&FromType=2');
                        window.location.href='/Pay?CT=5&prid=14&Au=0&FromType=2';

                     }, (response) => {
                         // error callback
                         alert('提交表单失败,请再次提交');
                     });

      }

},
mounted:function(){
  $(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
  });

}


}
    </script>
    <style>
    .stepwizard-step p {
    margin-top: 10px;
}
.stepwizard-row {
    display: table-row;
}
.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}
.stepwizard-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}
.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-order: 0;
}
.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
}
.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}
@media screen and (max-width: 960px){
/*  .col-xs-6
  {
    width:100%;
  }*/
}

    </style>
