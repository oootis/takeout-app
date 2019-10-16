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
    </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
 components:{
   headTop
 }

}
</script>

<style>
.msite{
  width: 100%;
}

.header{
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
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

.header-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);/*水平垂直居中*/
  width: 50%;
  color: #fff;
  text-align: center;
}
 .header-title-text{
   font-size: 20px;
   color: #fff;
   display: block;
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
</style>


