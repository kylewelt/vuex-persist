<template>
  <div id="app">
    <navigation></navigation>
    <el-card class="index-card">
      <div slot="header">
        Customer Home Page
      </div>
      <counters></counters>
    </el-card>
  </div>
</template>

<script>
  import Navigation from 'components/navigation'
  import Counters from 'components/counters'

  export default {
    components: {
      Navigation,
      Counters
    }
  }
</script>

<style lang="postcss">
  .index-card {
    width: 800px;
    margin: 20px auto;
  }
</style>
