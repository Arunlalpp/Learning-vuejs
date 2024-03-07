<script>
import Portal from './components/Portal.vue'
export default {
  name: 'App',
  components: {
    Portal
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<template>
  <Teleport to="#portal-root">
    <Portal />
  </Teleport>
</template>

<style scoped>
#app {
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
