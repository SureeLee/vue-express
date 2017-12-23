<template>

<div style="height:100%">
  <div style="width:100%">
      <el-row>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-col :span="3">
            <el-radio-group style="margin-left:20px;margin-top:10px">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="5" :offset="16">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-col>
        </el-menu>
      </el-row>
  </div>

  <div style="top:61px;bottom:0px;position:absolute;width:200px">
  <el-row style="top:0px;bottom:0px;position:absolute;width:200px">
    <el-col style="top:0px;bottom:0px;position:absolute;width:200px">
    <el-menu
      class="el-menu-vertical-demo"
      mode="vertical"
      default-active="2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
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
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
  </div>
  <div style="margin-left:200px">
    <router-view></router-view>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  methods: {
   
  }
};
</script>

<style>
.height {
  height: 100%;
  width: 200px;
}
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;
}
.el-menu--collapse {
  width: 65px;
  height: 100%;
}
</style>