<template>
  <div class="star-register">
    <h1>注册</h1>
    <div class="register-wrapper">
      <div class="avatar" :style="`background-image: url(${avatar})`"></div>
      <div class="input-group">
        <label for>昵称</label>
        <input type="text" id="nickname" v-model="nickname" />
      </div>
      <div class="input-group">
        <label for>账号</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group input-group-panel">
        <label for>密码</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="register" @click="register">注册</div>
      <span class="badge-img">+</span>
    </div>
    <p class="login" @click="login">已有账号了？点击登录</p>
  </div>
</template>

<script>
export default {
  name: 'StarRegister',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      avatar: require('../../assets/img/raw_1512446162.png')
    };
  },
  methods: {
    register() {
      if (this.username.trim() == '' || this.password.trim() == '' || this.nickname.trim() == '') {
        this.$toast.fail('昵称、账号或密码不能为空');
        return
      }
      this.$http({
        url: 'http://localhost:3000/users/userRegister',
        method: 'post',
        data: {
          nickname: this.nickname.trim(),
          username: this.username.trim(),
          userpwd: this.password.trim()
        }
      }).then(res => {
        if (res.data.code == '800000') {
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data));
          this.$router.push({path: '/StarLogin'})
          this.$toast(res.data.mess)
        } else {
          this.$toast(res.data.mess)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    login() {
      this.$router.push({path: '/StarLogin'})
    }
  }
};
</script>

<style lang="less" scoped>
input {
  border: 0;
  outline: none;
}
.star-register {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 0 1.28rem;
  overflow: hidden;
  h1 {
    margin-top: 1.12rem;
    height: 0.693333rem;
    line-height: 0.693333rem;
    color: rgba(16, 16, 16, 1);
    font-size: 0.48rem;
    text-align: center;
    font-family: Arial;
  }
  .register-wrapper {
    width: 7.44rem;
    height: 11.413333rem;
    margin-top: 1.706667rem;
    border-radius: 0.266667rem;
    box-shadow: 0 0 0.533333rem 0 rgba(170, 170, 170, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    position: relative;
    overflow: hidden;
    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      margin: 1.093333rem auto 0.773333rem;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .badge-img{
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      left: 4.266667rem;
      top: 2.453333rem;
      color: rgba(16, 16, 16, 0.5);
      text-align: center;
    }
    .input-group {
      width: 5.546667rem;
      height: 1.226667rem;
      line-height: 1.226667rem;
      display: flex;
      margin: 0 auto;
      opacity: 0.5;
      border-radius: 0.533333rem;
      border: 1px solid rgba(187, 187, 187, 1);
      padding-left: 0.533333rem;
      label {
        display: inline-flex;
        // flex: 1;
        width: 0.96rem;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333rem;
        font-family: Arial;
      }
      input {
        display: inline-block;
        width: 100%;
        border-radius: 0.533333rem;
        padding-left: 10px;
        font-size: 0.373333rem;
      }
    }
    .input-group-panel {
      margin-top: 10px;
    }
    .register {
        margin: .8rem auto 0;
        width: 5.546667rem;
        height: 1.226667rem;
        line-height: 1.226667rem;
        border-radius: .533333rem;
        background-color: rgba(51, 54, 67, 1);
        text-align: center;
        left: 169px;
        opacity: 0.8;
        color: rgba(255, 255, 255, 1);
        font-size: .48rem;
        font-family: Arial;
    }
  }
  .login {
    height: 0.613333rem;
    margin-top: 1.52rem;
    line-height: 0.613333rem;
    opacity: 0.3;
    color: rgba(16, 16, 16, 1);
    font-size: 0.373333rem;
    text-align: center;
    font-family: Arial;
  }
}
</style>