<template>
  <div class="root">
      <div class="login-form">
          <h1>xx系统登录</h1>
          <el-input type="text" class="user" placeholder="请输入用户名" v-model="user.userName"></el-input>
          <el-input type="password" class="user-pass" placeholder="请输入密码" v-model="user.password"></el-input>
          <el-button  value="登录" @click="user_login()">登录</el-button>
      </div>
      <div class="ice"></div>
      <div class="orange"></div>
  </div>
</template>

<script>
import { doLogin } from '../api/api.js'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    user_login () {
      const loginParams = {
        username: this.user.userName,
        password: this.user.password
      }
      doLogin(loginParams).then(() => {
        this.user.userName = ''
        this.user.password = ''
        this.$router.push('/Home')
      })
    }
  }
}
</script>

<style lang='scss'>
$primary-color:rgba(63,230,153);
body,html{
    height: 100%;
}
.root{
    margin: 0 auto;
    width: 100%;
    min-width: 1400px;
    position: relative;
    position: absolute;
    height: 100%;
}
input{
    width: 20px;
}
.login-form{
    display: flex;
    width: 240px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-top: 20%;
    >h1{
        font-size: 20px;
        background: $primary-color;
        color: #fff;
        padding: 10px 0;
        margin-bottom: 6px;
    }
    .el-input{
        margin-bottom: 10px;
        &:last-child{
            margin:0px;
        }
    }
}
.ice{
    width: 400px;
    height: 400px;
    background: url(../assets/img/ice.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    bottom: 200px;
    right: 400px;
    transform: rotate(-60deg);
    z-index: -1;
}
.orange{
    width: 200px;
    height: 220px;
    background: url(../assets/img/orange.png) no-repeat center center;
    background-size: contain;
    position: absolute;
    top: 200px;
    left: 100px;
    z-index: -1;
}
</style>
