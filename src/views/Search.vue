<template>
    <section class="search">
    <headTop title="搜索"></headTop>
     <form class="search-form" >
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" class="search-submit">
     </form>
    </section>
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
 .search{
   width: 100%;
   height: 100%;
   overflow: hidden;

 }
 .search-form{
   margin-top: 45px;
   background-color: #ffffff;
   padding: 12px 8px;

 }
  .search-input{
    float: left;
    width: 80%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2; 
  }
       
  .search-submit{
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;

  }
          
</style>
