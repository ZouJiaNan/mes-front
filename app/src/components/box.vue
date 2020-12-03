<template>
    <div id="boxapp" class="box">
    <el-container>
        <!--侧边栏-->
        <el-aside class="aside" style="width: 15%;height:100%">
          <el-header class="aside-header" style="width:100%" height=5%> 
            <!-- <img v-bind:src="logoimg"/> -->
            XXX智能视觉系统
          </el-header>
          <el-main class="aside-body" style="padding:0;width:100%;height:95%">
            <!--导航栏-->
            <el-menu class="aside-body-menu">
              <el-submenu index="1" class="aside-body-menu-submeu">
                <div slot="title" class="aside-body-menu-title">
                  <i class="el-icon-camera"></i>
                  <span>标定</span>
                </div>

                <el-menu-item-group>
                <router-link to="/calInside" tag="p"><el-menu-item index="1-1">标定内参</el-menu-item></router-link>
                <router-link to="/calOutside" tag="p"><el-menu-item index="1-2">标定外参</el-menu-item></router-link>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2" class="aside-body-menu-submeu">
                <div slot="title" class="aside-body-menu-title">
                  <i class="el-icon-camera-solid"></i>
                  <span>定位</span>
                </div>
              </el-submenu>

            </el-menu>
          </el-main>
        </el-aside>

        <!--主体-->
        <el-container class="main">
            <el-header class="main-header" style="width:100%;padding-top:1%;text-align:right;" height=5%>
              <div class="el-icon-user-solid" style="font-size:20px;margin-left:1%"></div>
              <div class="el-icon-message-solid" style="font-size:20px;margin-left:1%"></div>
            </el-header>
            <el-main class="main-body" style="width:100%;height:95%">
              <router-view></router-view>
            </el-main>
        </el-container>

    </el-container>
    </div>
</template>

<style>
    html,body,#boxapp,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }
    /* 侧边栏样式 */
    .aside{
      background-color: #001529;
      text-align: center;
    }
    .aside-header{
      color:#FFFFFF;
      text-align: center;
      padding:20px;
    }
    .el-menu{
      border-right:0!important;/* 去掉导航栏右边线 */
    }
    .aside-body-menu-submeu{
      background-color: #001529;
    }
    .aside-body-menu-title{
        color:#A5ACB3;
    }

    /* 主体区域样式 */
    .main{
        height: 100%;
    }
    .main-header{
      background-color:#FFFFFF;
    }
    .main-body{
      background-color:#ECECEF;
      padding:1%;
    }

    img{
        height:100%;
        width:100%;
    }
</style>
<script>
import logo from '../assets/logo.jpg';
import calInside from '../components/calInside.vue';
import calOutside from '../components/calOutside.vue';

export default {
    components:{calInside,calOutside},
    data(){
        return{
          logoimg:logo
        }
    },
    methods:{
      
    }
}
</script>