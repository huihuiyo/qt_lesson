<template>
  <div>
    <el-button type="text" @click="openFn">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeFn">取 消</el-button>
        <el-button type="primary" @click="closeFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import visiable from './visiable.js'
export default {
  mixins: [visiable],
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
</style>
