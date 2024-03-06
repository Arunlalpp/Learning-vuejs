<script>
import Input from './components/Input.vue'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Input
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<template><Input v-model="name" /></template>

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
