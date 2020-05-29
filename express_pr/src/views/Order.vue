<template>
  <div>
      <el-container>
          <el-header id="myChart" height='400px'></el-header>
          <Table :asycData='tableData' v-if="tableData.length>0"></Table>
      </el-container>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
  name: 'order',
  data () {
    return {
    }
  },
  components: {
    Table
  },
  computed: {
    chartData: function () {
      return this.$store.state.chartData
    },
    tableData: function () {
      return this.$store.state.tableData
    }
  },
  mounted () {
    this.drawLine()
  },
  updated () {
  },
  methods: {
    drawLine () {
      var echarts = require('echarts')
      var myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: '单日可'
        },
        tooltip: {},
        xAxis: {
          data: ['圆通', '韵达', '中通', '申通', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '入库量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style>
.el-header{
    text-align: center;
}

</style>
