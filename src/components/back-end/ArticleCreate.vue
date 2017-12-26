<template>
  <div style="width:99%">
    <el-row style="margin-bottom:20px"> 
      <el-col :span="1">
        <div style="font-size:18px;padding-top:5px">标题：</div>
      </el-col>
      <el-col :span="3">
        <el-input
        placeholder="请选择日期">
        </el-input>
      </el-col>
      <el-col :span="1" :offset="1">
       <div style="font-size:18px;padding-top:5px">分类：</div>
      </el-col>
      <el-col :span="5">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="1" :offset="12">
        <el-button type="primary">保存</el-button>
      </el-col>
    </el-row>
    <div>
      <mavon-editor :class="height" v-model="value" :subfield	="true" @save="save" @fullscreen="full" @htmlcode="htmlcode">
        
      </mavon-editor>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height:{
          height:'750px',
          width:'100%'
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    methods:{
      htmlcode(flag,code){
        let htmlCode = document.getElementsByClassName("v-show-content scroll-style")[0].innerHTML;
        console.log(htmlCode)
      },
      full(flag,code){
        if(flag == true){
          this.height.height = '100%'
          this.height.width = '100%'
        }else{
          this.height.height = '750px'
          this.height.width = '100%'
        }
      },
      save(value,render){
        alert(value)
        console.log(render)
      }
    }
  }
</script>

<style>
.height {
  height: 750px;
  width: 100% 
}
</style>
