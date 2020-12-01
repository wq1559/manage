<template>
  <div class="home">
    <el-row class="header">
      XXXXXXXXXXXXXXXXXX后台管理系统
    </el-row>
    <el-row class="tac">
      <Menu></Menu>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /srcs
import Menu from '@/components/Menu_list'

export default {
  name: 'Home',
  components: {
    Menu
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
  margin-top: 10px;
}
</style>
