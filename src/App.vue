<template>
  
  <div>
    <h3>{{ siteTitle }}</h3>
      <portfolio></portfolio>
  </div>
</template>

<script>
import portfolio from './portfolio.vue';

export default {
  name: 'app',
  data () {
    return {
      siteTitle: 'Jackie Art'
    }
  },
  components: {
    portfolio
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
