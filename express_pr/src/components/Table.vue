<template>
  <div class="table-box">
        <el-row>
          <el-date-picker
            class="datepicker"
            v-model="searchData.startTime"
            align="right"
            type="date"
            placeholder="选择开始日期"
            :picker-options="pickerOptions">
          </el-date-picker>
          <el-date-picker
            class="datepicker"
            v-model="searchData.endTime"
            align="right"
            type="date"
            placeholder="选择结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
          <el-input placeholder="名字、订单号或手机号" v-model="searchData.userInput" class="search_cus" @input='search()'></el-input>
        </el-row>
        <p class="tips">* 点击表格具体行 可查看订单详细信息</p>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
             <el-table-column
                prop="phone"
                label="手机号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="id"
                label="编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
                 <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleCheck(scope.$index, scope.row)">查看</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  props: {
    asycData: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      tableData: this.asycData,
      searchData: {
        startTime: '',
        endTime: '',
        pageNum: '',
        pageSize: '',
        userInput: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  methods: {
    search () {
      const result = this.asycData.filter((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.name == this.searchData.userInput || item.phone == this.searchData.userInput || item.id == this.searchData.userInput) {
          return item
        } else {
        }
      })
      this.tableData = result
    },
    handleCheck (index, row) {
      this.$msgbox({
        message: '是否确定查看？',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then((action) => {
        if (action === 'confirm') console.log(index, row)
      }).catch((err) => {
        this.$message({
          message: `${err} del  ${row.id}`
        })
      })
    },
    handleDel (index, row) {
      console.log(index, row)
    }
  },
  computed: {
  },
  created () {
  },
  updated () {
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
.tips{
  font-size:12px;
  color: #aaa;
  margin-bottom:  10px;
}
.table-box{
  flex:1;
}
.search_cus{
  width: 200px;
  margin: 10px 0;
}
.datepicker{
  width: 150px !important;
  &:nth-child(2){
    margin: 0 10px;
  }
}
</style>
