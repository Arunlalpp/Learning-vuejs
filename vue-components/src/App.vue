<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<template><Card>Content</Card> <Card>Content-2</Card></template>

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
