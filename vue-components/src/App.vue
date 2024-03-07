<script>
import PostList from './components/PostList.vue'
export default {
  name: 'App',
  components: {
    PostList
  },
  data() {
    return {
      
    }
  },
  methods: {}
}
</script>

<template>
  <PostList />
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
