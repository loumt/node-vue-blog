<template>
  <div class="login-container">

    <el-form ref="loginForm" class="login-form" auto-complete="on" :model="loginForm" label-position="left">

      <div class="title-container">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-selector class="language"></lang-selector>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          v-model="loginForm.username"
          name="username"
          auto-complete="on"
          type="text"
          :placeholder="$t('login.username')"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input
          :type="passwordType"
          name="password"
          v-model="loginForm.password"
          auto-complete="on"
          :placeholder="$t('login.password')"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>

      <el-button type="primary" plain @click="handleLogin">{{$t('login.login')}}</el-button>

    </el-form>
  </div>
</template>

<script>
  import LangSelector from '@/components/LangSelector'
  import SvgIcon from "../../components/SvgIcon/index.vue";

  export default {
    name: 'Login',
    components: {
      SvgIcon,
      LangSelector
    },
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        passwordType: 'password'
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      handleLogin() {
        console.dir(this)
        this.$store.dispatch('loginAction', this.loginForm).then(() => {
          this.$message({
            message: '登录Success!',
            type: 'success'
          })
          setTimeout(()=>{
            this.$router.push('/upload')
          },2000)
        }).catch(err => {
          this.$message({
            message: '登录错误',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .login-container {
    position: fixed;
    width: 100%;
    height: 100%;
    .el-input {
      width: 85%;
      border: 0px;
      border-radius: 0px;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        height: 47px;
      }
    }
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  $bgc: #2d3a4b;
  $labelc: #f1fcfa;
  $form_bgc: #283443;

  .login-container {
    background-color: $bgc;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;

      .el-button{
        width:100%;
      }

      .show-pwd {
        cursor: pointer;
      }

      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: $labelc;
        margin-bottom: 32px;
        background: $form_bgc;
      }

      .title-container {
        position: relative;

        .title {
          font-size: 26px;
          color: #eee;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
        .language {
          color: #fff;
          position: absolute;
          top: 5px;
          right: 0;
        }
      }

    }
    .svg-container {
      padding: 0px 5px 0px 15px;
      vertical-align: middle;
      display: inline-block;
    }
  }
</style>
