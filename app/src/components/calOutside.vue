<template>
    <div class="box">
      <el-container>
        <el-header style="height:8%;padding:0px">
          <el-button type="primary" size="small" @click="dialogCameraVisible = true">相机选择</el-button>
          <el-button type="primary" size="small" @click="dialogParamVisible = true">参数设置</el-button>
          <el-button type="primary" size="small" @click="dialogTakeVisible = true">外参拍照</el-button>
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

        <el-main style="background-color: #F5F5F5;height:60%;width:100%">
          <el-container>
            <el-aside class="main-body-window-aside" style="width:25%;height:100%;background-color: #F5F5F5;"> 
              <el-container style="width:100%;height:100%;background-color: #F5F5F5;">
                  <el-header style="width:100%;background-color: #FFFFFF;" height="30%">
                    <el-table :data="tableData" max-height="300">
                      <el-table-column prop="number" label="序号">
                      </el-table-column>
                      <el-table-column prop="url" label="图片">
                      </el-table-column>
                      <el-table-column  label="操作">
                      <el-button type="text" size="small">删除</el-button>
                      </el-table-column>
                    </el-table>
                  </el-header>
                  <el-main style="width:100%;background-color: #FFFFFF;margin-top:10px" height="60%">
                    <el-table :data="tableData" max-height="300">
                      <el-table-column label="序号">
                      </el-table-column>
                      <el-table-column label="X">
                      </el-table-column>
                      <el-table-column label="Y">
                      </el-table-column>
                    </el-table>

                    <div style="margin-top:10%;padding-left:20%">
                      <el-button type="primary" size="small">清空图片</el-button>
                      <el-button type="primary" size="small">开始标定</el-button>
                    </div>
                  </el-main>
              </el-container>
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
