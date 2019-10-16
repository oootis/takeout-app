<template>
    <header class="header">
       <!-- 插槽是父组件与子组件的通讯方式，子组件中的slot可以显示父组件传递给子组件的内容 -->
      <slot name="left"></slot>
      <span class="header-title">
        <span class="header-title-text">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    props: {
        title: String
    }

}
</script>

<style>
.header{
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
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
</style>
