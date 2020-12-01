<template>
    <el-col :span="3" class="menu">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
            <!-- <el-submenu index="1">
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
                <span slot="title">系统 设置</span>
            </el-menu-item> -->
            <MenuList :menuData='dataList'></MenuList>
        </el-menu>
    </el-col>
</template>

<script>
import MenuList from './module/MenuList';

export default {
    name: 'Menu',
    data() {
        return {
            dataList:[{
                title: '123',
                children: [{
                    title:'213'
                }]
            },{
                title: '456',
            },{
                title: '798',
                children: [{
                    title: '54',
                    children: [{
                        title: '565156'
                    }]
                }]
            }]
        }
    },
    components: {
        MenuList
    },
    methods: {
        genMenu(list){
            let dom = '';
            for(let i =0;i<list.length; i++) {
                if(list[i].children.length> 0) {
                    this.genMenu(list[i].children);
                }else{
                    flag = 1;
                }
            }
        }
    }
}
</script>

