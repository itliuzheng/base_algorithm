<template>
  <div class="navbar">

    <hamburger :toggle-click="toggleSideBar"  class="hamburger-container"/>

    <!--<breadcrumb class="breadcrumb-container"/>-->
    <div class="right-menu ">

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <span class="username">{{username}}</span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import Hamburger from '@/components/Hamburger'
  import Breadcrumb from '@/components/Breadcrumb'
  import router from '@/router'
  // import store from 'store'

  export default {
    components:{
      Hamburger,
      Breadcrumb
    },
    data(){
      let token =  this.$store.getters.token;
      let json = JSON.parse(window.atob(token.substring(token.indexOf('.')+1,token.lastIndexOf('.'))));

      return {
        username:json.sub
      }
    },
    methods:{
      toggleSideBar(){
        this.$store.dispatch('toggleSideBar')
      },
      logout(){
        let _this = this;
        this.$store.dispatch('LogOut').then(() => {
          // location.reload()// In order to re-instantiate the vue-router object to avoid bugs
          router.go(0)
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 18px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
