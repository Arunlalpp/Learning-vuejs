<template>
  <h2>{{ name }} {{ heroName }}</h2>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Greet',
  props: ['name', 'heroName']
}
</script>
<style scoped>
</style>