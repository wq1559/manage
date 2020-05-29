<template>
  <div>
      <Table :asycData="[{name:'王小二'}]"></Table>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
  name: 'Output',
  components: {
    Table
  },
  method: {
  },
  mounted () {
  }
}
</script>

<style>

</style>
