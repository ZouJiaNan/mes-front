<template>
    <div id="boxapp" class="box">
        <el-container>
            <el-header style="width:100%;height:5%;">
                <el-button type="primary" size="small">模型加载</el-button>
                <el-button type="primary" size="small">连续拍照</el-button>
                <el-button type="primary" size="small">单张拍照</el-button>
                <el-button type="primary" size="small">视觉定位</el-button>
            </el-header>
            <el-main style="width:100%">
                <el-container>
                    <el-aside width="30%" style="background-color:#F5F5F5;height:100%">
                        <el-container>
                            <el-header style="background-color:#FFFFFF;height:60%">
                                <el-table :data="tableData" max-height="900" :row-style="{height:'40px'}" :cell-style="{padding:'0px'}">
                                    <el-table-column prop="number" label="序号">
                                    </el-table-column>
                                    <el-table-column prop="device_name" label="设备名">
                                    </el-table-column>
                                    <el-table-column  prop="statue" label="状态">
                                    </el-table-column>
                                </el-table>
                            </el-header>
                            <el-main style="background-color:#F5F5F5;margin-top:1%;padding:0px">
                                <el-container>
                                    <el-aside width="50%">
                                        <el-container>
                                            <el-header style="background-color:#ECECEF;height:15%;padding:0.5%;">模型信息</el-header>
                                            <el-main style="background-color:#FFFFFF;font-size:10px;">
                                                <p>模型:XXXXXXX</p>
                                                <p>运行状态:XXXXXXX</p>
                                            </el-main>
                                        </el-container>
                                    </el-aside>
                                    <el-main style="padding:0px;margin-left:1%">
                                        <el-container>
                                            <el-header style="background-color:#ECECEF;height:15%;padding:0.5%;">实时统计</el-header>
                                            <el-main style="background-color:#FFFFFF;font-size:10px;">
                                                <p>拍照数:XXXXXXX</p>
                                                <p>定位完成数:XXXXXXX</p>
                                            </el-main>
                                        </el-container>
                                    </el-main>
                                </el-container>
                            </el-main>
                        </el-container>
                    </el-aside>
                    <el-main style="margin-left:1%;height:100%;padding:0px">
                        <el-container>
                            <el-aside style="height:100%;width:50%">
                                <el-container>
                                    <el-header style="height:50%;width:100%;padding:0px">
                                        <el-container>
                                            <el-header style="background-color:#F5F5F5;height:10%;width:100%;padding:0.5%;font-weight:300;">相机一</el-header>
                                            <el-main style="padding:0px;overflow: hidden;">
                                                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
                                            </el-main>
                                        </el-container>
                                    </el-header>
                                    <el-main style="padding:0px;margin-top:1%">
                                        <el-container>
                                            <el-header style="background-color:#F5F5F5;height:10%;width:100%;padding:0.5%;font-weight:300;">相机一</el-header>
                                            <el-main style="padding:0px;overflow: hidden;">
                                                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
                                            </el-main>
                                        </el-container>
                                    </el-main>
                                </el-container>
                            </el-aside>
                            <el-main style="height:100%;width:50%;padding:0px;margin-left:1%">
                                <el-container>
                                    <el-header style="height:50%;width:100%;padding:0px">
                                        <el-container>
                                            <el-header style="background-color:#F5F5F5;height:10%;width:100%;padding:0.5%;font-weight:300;">相机一</el-header>
                                            <el-main style="padding:0px;overflow: hidden;">
                                                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
                                            </el-main>
                                        </el-container>
                                    </el-header>
                                    <el-main style="padding:0px;margin-top:1%">
                                        <el-container>
                                            <el-header style="background-color:#F5F5F5;height:10%;width:100%;padding:0.5%;font-weight:300;">相机一</el-header>
                                            <el-main style="padding:0px;overflow: hidden;">
                                                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
                                            </el-main>
                                        </el-container>
                                    </el-main>
                                </el-container>
                            </el-main>
                        </el-container>
                    </el-main>
                </el-container>
            </el-main>
            <el-footer style="width:100%;height:30%;">
                <el-container>
                    <el-aside width="65%" style="background-color:#FFFFFF;">
                        <el-container>
                            <el-header style="height:15%;background-color:#F5F5F5;padding:0.5%;font-weight:600;">运行日志</el-header>
                            <el-main>
                                <p>开始标定内参</p>
                                <p>第一张图片标定中......</p>
                            </el-main>
                        </el-container>
                    </el-aside>
                    <el-main style="background-color:#FFFFFF;margin-left:1%;padding:0px">
                        <el-container>
                            <el-header style="height:15%;background-color:#F5F5F5;padding:0.5%;font-weight:600;">定位结果</el-header>
                            <el-main style="padding:0px;overflow: hidden;">
                                <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
                            </el-main>
                        </el-container>
                    </el-main>
                </el-container>
            </el-footer>
        </el-container>
    </div>
</template>

<style>
    .box{
        height:100%;
    }
    
</style>
<script>
import picture1 from '../assets/picture1.png';
export default {
  data() {
        return {
          tableData: [{
            number: 1,
            device_name: "相机一",
            statue:"运行中"
          }, {
            number: 1,
            device_name: "相机一",
            statue:"运行中"
          },{
            number: 1,
            device_name: "相机一",
            statue:"运行中"
          }, {
            number: 1,
            device_name: "相机一",
            statue:"运行中"
          }],
          camera:"",
          cameraList:[{
            name:"camera1",
            id:"001"
            },{
            name:"camera2",
            id:"002"
            }],
          logoimg:picture1,
          formLabelWidth:'120px',
          dialogParamVisible: false,
          dialogCameraVisible: false,
          dialogTakeVisible: false,
          param1:"",
          param2:"",
          param3:"",
        }
  },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>