<template>
  <div id="app">
    <el-card class="index-card">
      <div slot="header">
        User Home Page
      </div>
      <p>Current Vuex Store Count: {{ count }}</p>
      <el-button type="primary" @click="addaddadd">Increment Vuex Count</el-button>
      <el-button type="primary" plain @click="gogogo">To Customer Home Page</el-button>
      <el-button type="primary" plain @click="tototo">To User Login Page</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    methods: {
      gogogo () {
        location.assign('../customer/home.html')
      },
      tototo () {
        location.assign('../user/login.html')
      },
      addaddadd () {
        this.$store.commit('increment')
      }
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>

<style lang="postcss">
  .index-card {
    width: 800px;
    margin: 100px auto;
  }
</style>
