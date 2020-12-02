<template>
    <el-container>
        <el-header 
          class="search"
          height='auto'
        >
            <div class="btn">
                <el-input 
                    placeholder='请输入xx' 
                    clearable
                >
                </el-input>
            </div>
            <div class="btn">
                <el-input 
                    placeholder='请输入xx'
                    clearable
                >
                </el-input>
            </div>
            <div class="btn">
                <el-date-picker
                    v-model="startTime"
                    type="date"
                    placeholder="开始日期"
                >
                </el-date-picker>
            </div>
            <div class="btn">
                <el-date-picker
                    v-model="endTime"
                    type="date"
                    placeholder="结束日期"
                >
                </el-date-picker>
            </div>
            <div class="btn">
                <el-button type='primary'>搜索</el-button>
            </div>
            <div class="btn">
                <el-button >导出</el-button>
            </div>
        </el-header>
        <el-main>
            <el-table 
                :data='tableList'
                stripe
            >
            </el-table>
        </el-main>
    </el-container>
</template>

<script>

//默认查询参数
let params = {
    pagNum: 1,
    pageSize: 10
}

export default {
    name: 'oderReport',
    data() {
        return {
            params:{
                startTime: '',
                endTime: '',
                ...params
            },
            tableList: [],
        }
    },
    methods: {
        
    },
}
</script>

<style lang="less">
    .search{
        display: flex;
        .btn{
            min-width: 50px;
            margin-right: 10px;
        }
        .el-date-editor{
            width: 100%;
        }
    }
</style>