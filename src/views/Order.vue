<template>
    <div class="order">
    <headTop title="订单列表"></headTop>
    <section class="order-no-login">
      <img src="@/assets/person.png"> 
        <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
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
*{
  margin: 0;
  padding: 0;
}
.order-no-login{
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  
}
img{
  display: block;
  width: 100%;
  height: 30%;
}
h3{
  font-size: 17px;
  color: #6a6a6a;
}
button{
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
        
}

</style>
