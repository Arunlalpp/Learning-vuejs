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

<template>
  <Card>
    <template v-slot:header><h3>Header</h3></template>
    <template v-slot:default
      ><img
        class="img"
        src="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    /></template>
    <template v-slot:footer><button>View details</button></template>
  </Card>
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
.img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
</style>
