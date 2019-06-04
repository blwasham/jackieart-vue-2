<template>
  <div id="app">
    <h1>
      <product :title="productTitle"></product>
    </h1>
  </div>
</template>

<script>
import product from './product.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Jackie Art Paintings',
      painting: 'Blue Sky Meadows',
      productTitle: 'some silly title'
    }
  },
  components: {
    product
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
