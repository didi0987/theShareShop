<template>
    <div class="edu">
	<div class="col-lg-8">
        <img :src="logo_url"></img>
                <p><div class="degree">{{degree}}</div>
                    {{school}} <br/>
					</p>
				</div>
				<div class="col-lg-3">
                    <p><sm>{{graduate}} YEARS AGO</sm><br/>
					</p>
				</div>
    </div>
</template>
    <script>
    export default{
        data(){
        
            return{
                logo_url:"http://static1.1.sqspcdn.com/static/f/276323/26779418/1452294955600/Denver+Law+Logo_Denver+Law+Review.png?token=Djzckl8dBrrCetIWSbKqjFBWzKA%3D",
                degree:"Master of Science",
                school:"University of Denver",
                graduate:"5"

            }
        }
    
    }

    </script>
    <style>
    .edu  img {
    height:60px;
    float:left;
    }
    .degree{
        font-weight:700;
        color:#34495e;
        padding-top:5px;
    }
    .edu{
    margin:20px 0px;
    }
    </style>
