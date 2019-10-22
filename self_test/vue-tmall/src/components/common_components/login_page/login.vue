<template>
  <transition name="login_background_transition">
    <div class="login_div" v-show="show_login_dialog">
      <div class="login-banner-wrap" style="width: 100%; background-color: rgb(159, 22, 28);">
        <div class="inner">
          <img src="https://img.alicdn.com/tps/i4/TB1qaUFjET1gK0jSZFhSuuAtVXa.jpg" alt="">
          <a href="https://1111.tmall.com/?wh_weex=true&amp;wh_biz=tm&amp;pos=1&amp;acm=lb-zebra-153802-761482.1003.8.6806164&amp;wx_main_hc=true&amp;scm=1003.8.lb-zebra-153802-761482.ITEM_1570150932749_6806164"></a>
        </div>
      </div>
      <div class="form" style="display: block; right: 410px;">
        <div class="form-content">
          <div class="input-part">
            <InputPart />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InputPart from './loginInput.vue'
export default {
  components: {
    InputPart
  },
  computed: {
    ...mapState({
      show_login_dialog: state => state.loginState.show_login_dialog,
    })
  },
  methods: {
    closeDialog() {
      this.$store.dispatch('loginState/change_show_state')
    }
  }
}
</script>

<style scoped>
.login_div {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  z-index: 100000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.login-banner-wrap {
  position: relative;
  width: 100%;
  margin-top: 110px;
}
.login-banner-wrap .inner {
  position: relative;
  width: 1190px;
  margin: auto;
}
.login-banner-wrap img {
  display: block;
  margin: auto;
}
.login-banner-wrap .inner a {
  display: block;
  position: absolute;
  top: 80px;
  left: 75px;
  width: 630px;
  height: 440px;
  border: none;
  outline: none;
}
.login_div .form {
  display: none;
  position: absolute;
  top: 210px;
  right: 60px;
  background: #fff;
}
.login_div .form-content {
  position: relative;
}
.login_div .form-content .input-part {
  width: 350px;
  height: 400px;
  overflow: hidden;
  background: #fff;
}
</style>
