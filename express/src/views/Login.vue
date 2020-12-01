<template>
    <div>
        <div class='wapper'>
            <el-form label-width="80px" class="login_tac">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">立即登录</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            formData: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            this.$axios.post('/login', this.formData).then(res => {
                if(res.data.code === 200) {
                    this.$store.dispatch('userLogin', res.data);
                    this.$router.push('/');
                }
            }).catch(error => {
                console.log(error)
                this.$message(error);
            });
        },
        reset() {
            this.formData = {
                username: '',
                password: ''
            }
        }
    },
}
</script>

<style lang="less">
 .login_tac{
    width: 18%;
    min-width: 360px;
}
</style>