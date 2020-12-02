<template>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" class="custom-tabs">
        <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
        >
        </el-tab-pane>
    </el-tabs>
</template>

<script>
  export default {
    name: 'Tabs',
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: '订单管理',
          name: '1',
          content: '订单管理'
        }, {
          title: 'Tab 2',
          name: '2',
          content: '权限管理'
        }, {
          title: '123',
          name: '3',
          content: ''
        }, {
          title: '56',
          name: '4',
          content: 'Tab 2 content'
        }, {
          title: 'Tab 2',
          name: '5',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>

<style lang="less">
    .custom-tabs{
        background: #fff;
        margin: 10px 0;
    }
</style>