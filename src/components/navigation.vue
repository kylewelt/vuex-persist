<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1" @click="navUserHome">User Home Page</el-menu-item>
    <el-menu-item index="2" @click="navCustomerHome">Customer Home Page</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      navUserHome () {
        location.assign('../user/index.html')
      },
      navCustomerHome () {
        location.assign('../customer/home.html')
      }
    }
  }
</script>

<style lang="postcss">
  .el-menu {
    background: #fff;
    border-bottom: 1px solid #d2d2d2;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
  }
</style>