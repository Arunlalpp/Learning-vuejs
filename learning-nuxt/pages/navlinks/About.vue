<script setup>
definePageMeta({
  pageTransition: { name: "rotate" },
  layout: 'CustomLayout'

})

</script>

<template>
  <div style="background-color: aqua;">
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
