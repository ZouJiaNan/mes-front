<template>
    <div class="box">
      <el-container>
        <el-header style="height:8%;padding:0px">
          <el-button type="primary" size="small" @click="dialogFormVisible = true">相机选择</el-button>
          <el-button type="primary" size="small">参数设置</el-button>

        <!-- 相机选择弹出框 -->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <!-- v-model="form.region" -->
              <el-select v-model="camera" placeholder="请选择相机">
                <el-option label="相机一" value="shanghai"></el-option>
                <el-option label="相机二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

        </el-header>

        <el-main style="background-color: #F5F5F5;height:60%;width:100%">
          
        </el-main>

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
          camera:"",
          logoimg:picture1,
          dialogFormVisible: false,
          formLabelWidth: '15%'
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
