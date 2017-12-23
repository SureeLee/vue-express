<template>
    <div class="bgp">
        <ul class="menu">  
            <li><router-link :to="{ path:'/'}"><p class="font">主页</p></router-link></li>  
            <li><router-link :to="{ path:'/tag'}"><p class="font">标签</p></router-link></li>  
            <li><router-link :to="{ path:'/about'}"><p class="font">关于</p></router-link></li> 
        </ul>  
        <div class="head">
            {{headline}}
         </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:mapState(['headline'])
}
</script>

<style>
.head {
  font-size: 40px;
  margin-left: 47%;
  padding-top: 8%;
  color: aliceblue;

}
.bgp {
  width: 100%;
  height: 350px;
  margin-top:-20px;
  background: url(../../assets/img/bgp.jpg);
}
.font {
  font-size: 18px;
  margin-left: 50px;
  color:aliceblue;
}
.menu {
  margin-left: 82%;
}
li {
  text-decoration: none;  /*去掉前面的圆点*/  
  list-style: none;  
  float: left;  
}
</style>
