<template>
  <div class="counters">
    <el-row class="counter-display">
      <p>Vuex Store Count: {{ storeCount }}</p>
      <p>Vuex Session Count: {{ sessionCount }}</p>
      <p>Vuex Local Count: {{ localCount }}</p>
      <p>Vuex Cookie Count: {{ cookieCount }}</p>
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

<style lang='postcss'>
  .button-row {
    margin-top: 20px;
  }
</style>