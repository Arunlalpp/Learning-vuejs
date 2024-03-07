<template>
  <div>
    <button @click="getPosts">Load Post</button>
    <h3 v-if="errMessage">{{ errMessage }}</h3>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'PortList',
  data() {
    return {
      posts: [],
      errMessage: ''
    }
  },
  methods: {
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/postsswerg')
        .then((response) => {
          console.log(response.data)
          this.post = response.data
        })
        .catch((err) => {
          console.log(err)
          this.errMessage = 'error retrieving data'
        })
    }
  }
}
</script>
<style>
</style>