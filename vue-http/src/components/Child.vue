<template>
  <div>Child component</div>
</template>
<script>
export default {
  name: "Child",
  beforeCreate() {
    console.log("Child before created");
  },
  created() {
    console.log("Child created");
  },
  beforeMount() {
    console.log("Child before mount");
  },
  mounted() {
    console.log("Child mounted");
  },
  beforeUpdate() {
    console.log("Child beforeUpdate");
  },
  update() {
    console.log("Child update");
  },
  beforeUnmount() {
    console.log("Child beforeUnmounted");
  },
  unmounted() {
    console.log("Child unmounted");
  },
};
</script>
<style>
</style>