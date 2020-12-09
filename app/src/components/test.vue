<template>
    <div id="boxapp" class="box">
    <el-container>
        <el-header style="height:5%;">
            <el-button type="primary" size="small" @click="dialogCameraVisible = true">相机选择</el-button>
            <el-button type="primary" size="small" @click="dialogParamVisible = true">参数设置</el-button>
            <el-button type="primary" size="small" @click="dialogTakeVisible = true">内参拍照</el-button>
            <span style="margin-left:60%">{{camera}}</span>
            <!-- 相机选择弹出框 -->
            <el-dialog title="相机选择" :visible.sync="dialogCameraVisible">
                <el-form>
                    <el-form-item label="相机选择" :label-width="formLabelWidth">
                    <el-select v-model="camera" placeholder="请选择相机">
                    <el-option v-for="item in cameraList" :key="item.name" :value="'当前相机:'+item.name+'--'+item.id" :label="item.name"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogCameraVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogCameraVisible = false">确 定</el-button>
                </div>
            </el-dialog>

        <!-- 参数设置弹出框 -->
            <el-dialog title="参数设置" :visible.sync="dialogParamVisible">
                <el-form>
                    <el-form-item label="角点列数" :label-width="formLabelWidth">
                    <el-input v-model="param1" autocomplete="off" style="width:40%"></el-input>
                    </el-form-item>
                    <el-form-item label="角点行数" :label-width="formLabelWidth">
                        <el-input v-model="param2" autocomplete="off" style="width:40%"></el-input>
                    </el-form-item>
                    <el-form-item label="实际角点间距" :label-width="formLabelWidth">
                        <el-input v-model="param3" autocomplete="off" style="width:40%"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogParamVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogParamVisible = false">确 定</el-button>
                </div>
            </el-dialog>

        <!-- 内参拍照弹出框 -->
        <el-dialog title="内参拍照" :visible.sync="dialogTakeVisible">
          <img v-bind:src="logoimg" style="width:100%;height:100%;"/>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTakeVisible = false">退出</el-button>
            <el-button type="primary" @click="dialogTakeVisible = false">拍照</el-button>
          </div>
        </el-dialog>
        </el-header>
        <el-main>
            <el-container>
                <el-aside style="width: 25%;height:100%;background-color:#FFFFFF;">Aside</el-aside>
                <el-container style="width: 70%;height:100%;margin-left:20px;background-color:#ECECEF;">
                    <el-header style="height:5%;background-color:#FFFFFF;font-weight:600;padding:0.5%;">Header</el-header>
                    <el-main style="height:60%;background-color:#F44444;">Main</el-main>
                    <el-footer style="height:30%;margin-top:20px;background-color:#FFFFFF;padding:0px;">
                        <el-header style="background-color:#F5F5F5; height:20%;font-weight:600;padding:0.5%">日志展示</el-header>
                        <el-main style="height:80%;padding: 0.5%">
                            <p>开始标定内参</p>
                            <p>第一张图片标定中......</p>
                        </el-main>
                    </el-footer>
                </el-container>
            </el-container>
        </el-main>
    </el-container>
    </div>
</template>

<style>
    .box{
        height:100%;
    }
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