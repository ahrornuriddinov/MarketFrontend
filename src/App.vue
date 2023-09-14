<template>
  <div id="app">
     <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <HeaderAppDemo></HeaderAppDemo>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <AsideAppDemo></AsideAppDemo>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
<!--          <el-footer>footer</el-footer>-->
        </el-container>
     </el-container>
  </div>
</template>

<script>




import HeaderAppDemo from "@/layout/HeaderAppDemo.vue";
import AsideAppDemo from "@/layout/AsideAppDemo.vue";

export default {
  name: 'App',
  components: {
    AsideAppDemo,
    HeaderAppDemo

  }
}
</script>

<style>
.el-header, .el-footer {
  background-color: #37c531;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  //line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
