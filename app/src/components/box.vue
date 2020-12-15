<template>
    <div id="boxapp" class="box">
    <el-container>
        <!--侧边栏-->
        <el-aside class="aside" style="width: 15%;height:100%;overflow:hidden;">
          <el-header class="aside-header" style="width:100%" height=5%> 
            <!-- <img v-bind:src="logoimg"/> -->
            XXX智能视觉系统
          </el-header>
          <el-main class="aside-body" style="padding:0;width:100%;height:95%">
            <!--导航栏-->
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#001529"
              text-color="#A5ACB3"
              active-text-color="#fff"
              router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-camera"></i>
                  <span>标定</span>
                </template>
                <el-menu-item-group style="background-color:#001529">
                  <template slot="title"></template>
                  <el-menu-item index="/calInside">标定内参</el-menu-item>
                  <el-menu-item index="/calOutside">标定外参</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-promotion"></i>
                  <span>定位</span>
                </template>
                <el-menu-item-group style="background-color:#001529">
                  <template slot="title"></template>
                  <el-menu-item index="/position">定位结果</el-menu-item>
                </el-menu-item-group>
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
      opacity:0.95;
      /* text-align: center; */
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
    
</style>
<script>
import logo from '../assets/logo.jpg';

export default {
    data(){
        return{
          logoimg:logo
        }
    },
    methods:{
      
    }
}
</script>