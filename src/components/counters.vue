<template>
  <div class="counters">
    <el-row class="counter-display">
      <p>Vuex Object Count: {{ storeCount }}</p>
      <p>Session Storage Count: {{ sessionCount }}</p>
      <p>Local Storage Count: {{ localCount }}</p>
      <p>Cookie Count: {{ cookieCount }}</p>
    </el-row>
    <hr>
    <el-row class="button-row">
      <el-button type="primary" @click="storeIncrement">+ Store Count</el-button>
      <el-button type="primary" @click="sessionIncrement">+ Session Count</el-button>
      <el-button type="primary" @click="localIncrement">+ Local Count</el-button>
      <el-button type="primary" @click="cookieIncrement">+ Cookie Count</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      storeIncrement () {
        this.$store.dispatch('incrementStoreCount')
      },
      sessionIncrement () {
        this.$store.dispatch('incrementSessionCount')
      },
      localIncrement () {
        this.$store.dispatch('incrementLocalCount')
      },
      cookieIncrement () {
        this.$store.dispatch('incrementCookieCount')
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

<style lang='postcss'>
  .button-row {
    margin-top: 20px;
  }
</style>