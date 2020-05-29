<template>
        <el-container class="">
            <el-header><i></i>title</el-header>
            <el-container>
                  <keep-alive>
                        <el-aside>
                        <el-row>
                            <el-col>
                                <el-menu>
                                        <el-submenu index="1">
                                        <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>库存管理</span>
                                        </template>
                                        <el-menu-item index="1-1" @click="pathChange('/Stock/output')">出库</el-menu-item>
                                        <el-menu-item index="1-2" @click="pathChange('/Stock/input')">入库</el-menu-item>
                                    </el-submenu>
                                    <el-submenu index="2" @click="pathChange('/Order')" >
                                        <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>订单管理</span>
                                        </template>
                                    </el-submenu>
                                       <el-submenu index="3">
                                        <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>用户管理</span>
                                        </template>
                                    </el-submenu>
                                    <el-submenu index="4">
                                        <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>广告位</span>
                                        </template>
                                    </el-submenu>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </el-aside>
                  </keep-alive>
                <el-main>
                    <Order></Order>
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer></el-footer>
        </el-container>
</template>
<script>
import Order from '../views/Order.vue'
import { getData } from '../api/api'
export default {
  name: 'Home',
  components: {
    Order
  },
  methods: {
    pathChange (url) {
      this.$router.push(url)
    }
  },
  created () {
    getData().then((res) => {
      this.$store.dispatch('getData', res.data.data)
    })
  }
}
</script>

<style lang="scss">
.el-header{
    border-bottom: 5px solid #000;
    display: flex;
    align-items: center;
    >i{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../assets/img/icon_home.png) no-repeat center center;
        background-size: contain;
        margin-right: 5px;
    }
}
.el-menu{
  position: sticky;
}
</style>
