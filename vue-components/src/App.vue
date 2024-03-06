<script>
import ComponentC from './components/ComponentC.vue'

export default {
  name: 'App',
  components: {
    ComponentC
  },
  data() {
    return {
      name: 'Arunlal PP'
    }
  },
  provide() {
    return { useName: this.name }
  }
}
</script>

<template>
  <h3>App component userName {{ name }}</h3>
  <ComponentC />
</template>

<style scoped>
#app {
  color: black;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
