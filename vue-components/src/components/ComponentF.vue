<template>
  <div>
    <h2>Component F</h2>
    <h3>Component F user name {{ useName }}</h3>
  </div>
</template>
<script>
export default {
  name: 'ComponentF',
  inject: ['useName']
}
</script>
<style>
</style>