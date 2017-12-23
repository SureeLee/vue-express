<template>
  <div class="login">
    <el-row type="flex" justify="center" class="center">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <span class="font">A Vue Login</span>
          </div>
          <div>
            <el-form :model="user" ref="user" :rules="rules" status-icon label-width="80px">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="sub()">登录</el-button>
                <el-button @click="reg()">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      user: {
        name: '',
        password: ''
      },
      rules:{
          name:[
              {required:true,message:'用户名不能为空',trigger:'change'}
          ],
          password:[
              {required:true,message:'密码不能为空',trigger:'change'}
          ]
      }
    }
  },
  methods: {
    sub (){
      this.$refs.user.validate(valid=>{
          if(valid){
              this.$store.dispatch('UserLogin',this.user)
          }else{
              console.log('submit error')
              return false
          }
      })
    },
    reg (){
      this.$router.push({path:'/reg'})
    }
  }
}
</script>

<style>
.font {
  font-size: 30px
}
.center {
  margin-top: 200px
}
</style>
