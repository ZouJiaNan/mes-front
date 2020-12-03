<template>
    <div class="box">
      <el-container>
        <el-header style="height:8%;padding:0px">
          <el-button type="primary" size="small">相机选择</el-button>
          <el-button type="primary" size="small">参数设置</el-button>
        </el-header>

        <el-main style="background-color: #F5F5F5;height:60%;width:100%">
          <el-container>
            <el-aside class="main-body-window-aside" style="width:25%;height:100%;background-color: #FFFFFF;"> 
              <el-table :data="tableData" style="margin-bottom:10px;height:90%" max-height="300">
                <el-table-column prop="number" label="序号">
                </el-table-column>
                <el-table-column prop="url" label="图片">
                </el-table-column>
                <el-table-column  label="操作">
                <el-button type="text" size="small">删除</el-button>
                </el-table-column>
              </el-table>
                <el-button type="primary" size="small" style="margin-left:20%;">清空图片</el-button>
                <el-button type="primary" size="small">开始标定</el-button>
            </el-aside>
            
            <el-container style="margin-left:1%">
              <el-header class="main-body-window-main-header" style="width:100%;background-color: #FFFFFF;font-weight:600;padding:0.5%;" height="10%">图片展示</el-header>
              <el-main class="main-body-window-main-body" style="width:100%;height:90%;overflow: hidden;">
                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
              </el-main>
            </el-container>
          </el-container>
        </el-main>

        <el-footer style="background-color: #FFFFFF; height:25%;margin-top:1%;padding:0px">
          <el-header style="background-color: #F5F5F5; height:20%;padding:0.5%;font-weight:600">日志展示</el-header>
          <el-main style="height:74%;padding:0.5%">
            <p>开始标定内参</p>
            <p>第一张图片标定中......</p>
          </el-main>
        </el-footer>

      </el-container>
    </div> 
</template>

<style scoped>
    .box{
        height:100%;
    }
    /* .el-main{
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    } */
    .main-body-window{
      background-color:#FFFFFF;
      height:90%;
      margin-top: 1%;
      margin-left: 1%;
      padding: 0px;
    }
    .main-body-window-main-header{
      width:100%;
      background-color: #F5F5F5;
      margin-top: 0px;
      padding-top:1%;
    }
    .main-body-window-main-body{
      padding:0px;
      margin-top: 0px;
    }

</style>

<script>
import picture1 from '../assets/picture1.png';
export default {
  data() {
        return {
          tableData: [{
            number: 1,
            url: 'XXX.JPG',
          }, {
            number: 1,
            url: 'XXX.JPG',
          }, {
            number: 1,
            url: 'XXX.JPG',
          }, {
            number: 1,
            url: 'XXX.JPG',
          }],
          logoimg:picture1
        }
}
}
</script>
