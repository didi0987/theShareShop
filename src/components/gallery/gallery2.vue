
<template>
  <ul id="school_gallery">
    <li>


      <div v-for="school in schools" class="school">
        <div class="school_mask"></div>
        <div class="gradient"></div>
        <div class="logo_wrap"><img class="school_logo" :src=school.logo_url></div>
      <div class="school_name"><a href="#buybutton">{{school.name}}</a></div>
      <div class="school_content">{{school.introduction}}</div>
      <button>发起提问</button>


    </div>


    </li>
<!--
    <li>
      <div v-for="school in schools" class="school">
        <div class="school_mask"></div>
          <div class="gradient"></div>
        <img class="school_logo" :src=school.logo_url>
      <div class="school_name"><a href="#buybutton">{{school.name}}</a></div>
      <div class="school_content">{{school.introduction}}</div>
      <button>发起提问</button>


    </div>

    </li>
-->
  </ul>
</template>

<script>


export default {

data(){
  return {
    schools:[{name:"Auburn University",logo_url:"https://s-media-cache-ak0.pinimg.com/originals/cc/96/fb/cc96fb3985d9497297caaf75ed8df918.jpg",introduction:"Auburn University is a public research university in Auburn, Alabama, United States. With more than 22,000 undergraduate students and a total enrollment of more than 28,000 with 1,260 faculty members, ... "},
            {name:"University of Iinois Chicago",logo_url:"http://www.wistrans.org/cfire/documents/UIC_logo.jpg",introduction:"Auburn University is a public research university in Auburn, Alabama, United States. With more than 22,000 undergraduate students and a total enrollment of more than 28,000 with 1,260 faculty members, ... "},
            {name:"University of Michigan",logo_url:"http://content.sportslogos.net/logos/32/750/full/emxykwpleshgi2ytw1cfxl5ic.png",introduction:"Auburn University is a public research university in Auburn, Alabama, United States. With more than 22,000 undergraduate students and a total enrollment of more than 28,000 with 1,260 faculty members, ... Auburn University is a public research university in Auburn, Alabam"}
            ]

          }

},
mounted:function(){
$('#school_gallery').slippry(
{
  captions:false
})
}

}


</script>
  <style>
@import "../gallery/slippry.css";
.sy-slides-crop{overflow: inherit;}
#school_gallery .school {width: 33%;border:1px solid;display: inline-block;}
#school_gallery a{color:#fff;}
#school_gallery .logo_wrap{background: white;padding: 10px 0px;margin:20px 0px;}
#school_gallery .school_mask{background-image: url('https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2015/12/15165032/auburn-feat.jpg');opacity: 0.3;position: absolute;z-index: -1; width:inherit;height: 360px}
#school_gallery .school_logo{display:block;width: 80px;height:80px;vertical-align: middle;margin:0px auto;}
#school_gallery .school_name{font-family: sans-serif;font-size:2.0em;margin:20px auto;text-align: center;}
#school_gallery .school_content{padding:15px;height: 190px;overflow: scroll;color: #fff;}
#school_gallery button{-moz-appearance: button;-webkit-appearance: button;margin:12px auto;padding:12px;color: #54ABDC;
                        background-color: #fff;border:1px solid;font-size:1.2em;border-radius: 5px;}
#school_gallery .gradient{
  height: 360px;
  position:absolute;
  z-index:-1;
  width: inherit;
  background: rgba(84,171,220,0.5); /* For browsers that do not support gradients */
  background: -webkit-radial-gradient(circle,#24C6DC,#514A9D); /*Safari 5.1-6*/
  background: -o-radial-gradient(circle,#24C6DC,#514A9D); /*Opera 11.1-12*/
  background: -moz-radial-gradient(circle,#24C6DC,#514A9D); /*Fx 3.6-15*/
  background: radial-gradient(circle, #24C6DC,#514A9D);
  opacity: 0.7;
}
@media screen and (max-width: 976px){

  .sy-slide > a > img {
  max-height: 200px;
  }
}
   </style>
