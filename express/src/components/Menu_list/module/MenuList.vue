<template>
    <div>
       <div v-for="(item, index) in menuList" :key='item.title'>
            <el-submenu v-if="item.children && item.children.length" :index='String(index)'>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>
                <MenuList
                    :menuData='item.children'
                >
                </MenuList>
            </el-submenu>
            <el-menu-item v-else>
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MenuList',
    props:{
        menuData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        menuList() {
            return this.menuData;
        },
    }
    // methods: {
       
    // }
}
</script>