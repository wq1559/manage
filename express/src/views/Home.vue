<template>
  <div class="home">
    <el-row class="header">
      XXXXXXXXXXXXXXXXXX后台管理系统
    </el-row>
    <el-row class="tac">
      <el-col :span="3" class="menu">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col  :span='18' class="content">

        </el-col>
      </el-row>
  </div>
</template>

<script>
// @ is an alias to /srcs

export default {
  name: 'Home',
  components: {
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
