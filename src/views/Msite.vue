<template>
    <div class="msite">
     <headTop title="虹口区万安路">
       <span class="header-search" slot="left">
          <i class="iconfont icon-location"></i>
       </span>
       <span class="header-login" slot="right">
          <span class="header-login-text">登录|注册</span>
       </span>
     </headTop>
     <div class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/3.jpg">
              </div>
              <span>美食</span>
            </a> 
              <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/4.jpg">
              </div>
              <span>水果</span>
            </a>
              <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/5.jpg">
              </div>
              <span>跑腿代购</span>
            </a>
              <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/6.jpg">
              </div>
              <span>星选好店</span>
            </a>
              <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/7.jpg">
              </div>
              <span>大牌想吃</span>
            </a>
              <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/8.jpg">
              </div>
              <span>美食</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/9.jpg">
              </div>
              <span>夜宵</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/10.jpg">
              </div>
              <span>速餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/11.jpg">
              </div>
              <span>预定</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/12.jpg">
              </div>
              <span>包子粥</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/13.jpg">
              </div>
              <span>鸭脖卤味</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/14.jpg">
              </div>
              <span>烧烤</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/1.jpg">
              </div>
              <span>油炸</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../assets/3.jpg">
              </div>
              <span>医药</span>
            </a>
          </div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
     </div>
  </div>
</template>

<script>
import headTop from '../components/headTop'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted(){
    new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
  },
  components:{
    headTop
 }
}
</script>

<style scoped>
.msite{
  width: 100%;
  height: 100%;
}
.header-search{
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%); /*垂直居中*/
  width: 10%;
  height: 50%;
}
.icon-location{
  font-size: 25px;
  color: #fff;
}
.header-login{
   color: #fff;
   position: absolute;
   right: 15px;
   top: 50%;
   transform: translateY(-50%);
 }
.header-login-text{
  font-size: 15px;
  color: #fff;
}
.msite_nav{
  height: 200px;
  margin-top: 45px;
  background: #fff;
}
.swiper-container{
  width: 100%;
  height: 100%;
}
.swiper-wrapper{
  width: 100%;
  height: 100%;
}
.swiper-slide{
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-wrap: wrap;
}  
a{
  text-decoration: none;
}
.link_to_food{
  width: 25%;
}     
.food_container{
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
.food_container img{
   display: inline-block;
   width: 50px;
   height: 50px;
}            
.link_to_food span{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: black;
}            
</style>


