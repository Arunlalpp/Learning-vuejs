<template>
  <div>
    Parent component
    <button @click="showChild = !showChild">Toggle Child</button>
    <Child v-if="showChild" />
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
  name: "Parent",
  data() {
    return {
      showChild: true,
    };
  },
  beforeCreate() {
    console.log("Parent before created");
  },
  created() {
    console.log("Parent created");
  },
  beforeMount() {
    console.log("Parent before mount");
  },
  mounted() {
    console.log("Parent mounted");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate");
  },
  update() {
    console.log("Parent update");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmounted");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
};
</script>
<style>
</style>