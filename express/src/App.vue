<template>
  <div id="app">
    <el-row class="tac" type='flex'>
      <el-col 
        class="menu"
        :span='4'
      >    <Clock />
          <Menu></Menu>
      </el-col>
      <el-col class="content">
        <Tabs />
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

// @ is an alias to /srcs
<script>
import Menu from '@/components/Menu_list'
import Clock from '@/components/clock'
import Tabs from '@/components/tabs'

export default {
  name: 'Home',
  components: {
    Menu,
    Clock,
    Tabs
  }
}
</script>

<style lang="less">
.home{
  background-color: #ddd;
  display: flex;
  flex-direction: column;
}
.header{
  height: 72px;
  background-color: chocolate;
}
.menu{
  height: 100%;
  background-color: rgb(84, 92, 100);
  min-width: 240px;
}
.tac{
  height: 1080px;
}
.content{
   width: 100%;
   background-color: #DCDFE6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
</style>
