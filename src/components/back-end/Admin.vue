<template>

<div style="height:100%">
  <div>
    <div style="width:100%;z-index:1500">
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
  </div>
  

  <div style="top:61px;bottom:0px;position:absolute;width:200px">
  <el-row style="top:0px;bottom:0px;position:absolute;width:200px">
    <el-col style="top:0px;bottom:0px;position:absolute;width:200px">
    <el-menu
      class="el-menu-vertical-demo"
      mode="vertical"
      default-active="2">
        <template v-for="(item,index) in $store.state.permission.routers" v-if="!item.hidden">
          <router-link v-if="!item.hidden&&item.noChildren" :to="item.path">
            <el-menu-item :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </router-link>
          <el-submenu :index="index+''" v-if="!item.noChildren">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <template v-for="child in item.children"  v-if="!child.hidden">
              <router-link :to="item.path+'/'+child.path">
                <el-menu-item :index="item.path+'/'+child.path"><i :class="child.icon"></i>{{child.name}}</el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    </el-row>
  </div>
  <div style="margin-left:210px;margin-top:20px;">
    <el-row>
      <el-col :span='24' class="breadcrumb">
        <el-breadcrumb separator="/" style='float:left'>
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="index">
            <router-link v-if='index==levelList.length-1' to="" >{{item.name}}</router-link>
            <router-link v-else :to="item.path">{{item.name}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
  <div style="margin-left:210px;margin-top:20px">
    <router-view></router-view>
  </div>
</div>
</template>


<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  methods: {
    //待研究
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [{ name: '首页', path: '/admin' }].concat(matched)
      }
      this.levelList = matched;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
}
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
.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>