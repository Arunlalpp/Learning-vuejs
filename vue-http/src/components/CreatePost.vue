<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post user Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button @click="createPost">Create Post</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
</style>