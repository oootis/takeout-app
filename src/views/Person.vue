<template>
    <div class="profile">
     <headTop title="我的"></headTop>
      <section class="profile-number">
        <router-link to="/login"  class="profile-link">
          <div class="profile-image">
            <i class="iconfont icon-touxiang"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top">登录/注册</p>
            <p>
              <span class="user-icon">
                <i class="iconfont icon-shouji"></i>
              </span>
              <span class="icon-shouji-number">暂无绑定手机号</span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-arrow-right"></i>
          </span>
          <div class="clear"></div> <!-- 清除浮动 -->
        </router-link>
               
      </section>
      <section class="profile-info-data">
        <ul class="info-data-list">
          <a href="javascript:" class="info-data-link">
            <span class="info-data-top"><span>0.00</span>元</span>
            <span class="info-data-bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info-data-link">
            <span class="info-data-top"><span>0</span>个</span>
            <span class="info-data-bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info-data-link">
            <span class="info-data-top"><span>0</span>分</span>
            <span class="info-data-bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="profile-my-order">
        <!-- 我的订单 -->
        <a href='javascript:' class="my-order">
          <span>
            <i class="iconfont icon-order"></i>
          </span>
          <div class="my-order-div">
            <span>我的订单</span>
            <span class="my-order-icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
        </a>
        <!-- 外卖会员卡 -->
        <a href="javascript:" class="my-order">
          <span>
            <i class="iconfont icon-VIP"></i>
          </span>
          <div class="my-order-div">
            <span>VIP</span>
            <span class="my-order-icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
        </a>
      </section>
      <section class="profile-my-order">
        <!-- 服务中心 -->
        <a href="javascript:" class="my-order">
          <span>
            <i class="iconfont icon-kefu"></i>
          </span>
          <div class="my-order-div">
            <span>服务中心</span>
            <span class="my-order-icon">
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
        </a>
      </section>
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

<style scoped>
.profile{
  width: 100%;
  overflow: hidden; /*设置为无滚动*/
}
.profile-number{
  margin-top: 45.5px;
}
.profile-link{
  display: block;
  background: #02a774;
  padding: 20px 10px;
}
.profile-image{
  float: left;
  width: 50px;
  height: 50px;
 
}
.icon-touxiang{
  border-radius: 50px;
  background: #e4e4e4;
  font-size: 50px;
  color: #02a774;
}
.user-info{
  float: left;
  margin-top: 8px;
  margin-left: 15px;
}
/* 上面的div内的元素设置了浮动，所以要清楚浮动，否则会影响页面
（我遇到的情况就是浮动元素跑出div，并且和下面的div间会出现空白区域） */
.clear{
  clear: both;
}
p{
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}
.user-info-top{
  padding-bottom: 6px;

}
.user-icon{
  display: inline-block;
  margin-left: -10px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
.icon-shouji{
  font-size: 30px;
  vertical-align: auto;
}
.arrow{
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
}
.icon-arrow-right{
color: #fff;
font-size: 5px;
}
.profile-info-data{
  width: 100%;
  background-color: #fff;
  overflow: hidden; 
}       
.info-data-link{
  float: left;
  width: 33%;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}
.info-data-top{
  display: block;
  width: 100%;
  font-size: 14px;
  color: #333;
  padding: 15px 5px 10px;
}
.info-data-top > span{
  font-size: 30px;
  color: #f90;
  font-weight: 700;
  line-height: 30px;
}
.info-data-link:nth-of-type(2) > .info-data-top > span{
  color: #ff5f3e;
}
.info-data-link:nth-of-type(3) > .info-data-top > span{
  color: #6ac20b;
}
a{
  text-decoration: none;
}
.info-data-bottom{
  display: inline-block;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  padding-top: 10px;

}
.profile-my-order{
  margin-top: 10px;
  background-color: #fff;
}
.my-order{
  display: flex;
  align-items: center;
  padding-left: 15px;

}
.my-order > span{
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
}
.my-order .iconfont{
  margin-left: -10px;
  font-size: 30px;
}
.icon-order{
  color: #02a774;
}
.icon-VIP{
  color: #f90;
}
.icon-kefu{
  color: #ffff55;
}
.my-order .icon-arrow-right{
  color: #bbbbbb;
  font-size: 16px;
}
.my-order-div{
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 18px 10px 18px 0;
  font-size: 16px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.my-order-icon{
  width: 10px;
  height: 10px;
}   
</style>






