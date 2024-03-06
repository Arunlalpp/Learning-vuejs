<template>
  <div>
    <h2 v-bind="$attrs">Title- {{ title }}</h2>
    <h2>Likes- {{ likes }}</h2>
    <h2>Published- {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>
<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article default title'
    },
    likes: Number,
    isPublished: Boolean
  },
  inheritAttr: true
}
</script>
<style scoped>
</style>