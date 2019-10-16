<template>
    <div class="foot">
        <span class="guide-item" :class="{on: '/msite' === $route.path}" @click="goTo('/msite')">
           <span class="icon-item">
              <i class="iconfont icon-gouwuche"></i>
           </span>
           <span>首页</span>
        </span>

        <span class="guide-item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
           <span class="icon-item">
              <i class="iconfont icon-sousuo"></i>
           </span>
           <span>搜索</span>
        </span>

        <span class="guide-item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
           <span class="icon-item">
              <i class="iconfont icon-dingdan"></i>
           </span>
           <span>订单</span>
        </span>

        <span class="guide-item" :class="{on: '/person' === $route.path}" @click="goTo('/person')">
           <span class="icon-item">
              <i class="iconfont icon-geren"></i>
           </span>
           <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(path){
            this.$router.replace(path)
        }
    }

}
</script>

<style scoped>
.foot{
    position: fixed;
    z-index: 100 ; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    width: 100%;
    height: 50px;
    display: flex;

  
}
.guide-item{
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999; 

}
.on{
    color: #02a774;
}
      
span{
    font-size: 12px;
    margin-top: 1px;
    margin-bottom: 1px;

}
      
.iconfont{
    font-size: 22px;
}
        
   
</style>
