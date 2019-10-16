<template>
    <div id="app">
        <!--路由组件的视图位置 -->
        <router-view></router-view> 
        <foot v-show="$route.meta.showfoot"></foot>
    </div>
</template>

<script>
// 导入foot组件并注册
import foot from './components/foot'
export default {
    components: {
        foot
    }

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
html, body {
  width: 100%;
  height: 100%;/*不设此项，实际高度会变为0*,样式无法覆盖整个div*/
}
#app{
    height: 100%;
    width: 100%;
    background: #f5f5f5;
}
</style>
