<template>
  <div id="app">
    <el-card class="index-card">
      <div slot="header">
        User Home Page
      </div>
      <p>Vuex Store Count: {{ storeCount }}</p>
      <p>Vuex Session Count: {{ sessionCount }}</p>
      <p>Vuex Local Count: {{ localCount }}</p>
      <p>Vuex Cookie Count: {{ cookieCount }}</p>
      <el-button type="primary" @click="storeIncrement">+ Store Count</el-button>
      <el-button type="primary" @click="sessionIncrement">+ Session Count</el-button>
      <el-button type="primary" @click="localIncrement">+ Local Count</el-button>
      <el-button type="primary" @click="cookieIncrement">+ Cookie Count</el-button>
    </el-card>
    <el-card class="index-card">
      <el-button type="primary" plain @click="navCustomerHome">To Customer Home Page</el-button>
      <el-button type="primary" plain @click="navUserLogin">To User Login Page</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    methods: {
      navCustomerHome () {
        location.assign('../customer/home.html')
      },
      navUserLogin () {
        location.assign('../user/login.html')
      },
      storeIncrement () {
        this.$store.commit('incrementStoreCount')
      },
      sessionIncrement () {
        this.$store.commit('incrementSessionCount')
      },
      localIncrement () {
        this.$store.commit('incrementLocalCount')
      },
      cookieIncrement () {
        this.$store.commit('incrementCookieCount')
      }
    },
    computed: {
      storeCount () {
        return this.$store.state.count
      },
      sessionCount () {
        return this.$store.state.session.count
      },
      localCount () {
        return this.$store.state.local.count
      },
      cookieCount () {
        return this.$store.state.cookie.count
      }
    }
  }
</script>

<style lang="postcss">
  .index-card {
    width: 800px;
    margin: 100px auto;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
