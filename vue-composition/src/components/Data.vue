<template>
  <h2>options - {{ o_fristName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>
  <h2>Composition - {{ greet }}</h2>
</template>
<script>
import { ref } from "vue";
export default {
  name: `Data`,
  setup() {
    const c_firstName = ref("PCP");
    c_firstName.value = "PPC";
    const greet = `Hello ${c_firstName.value}`;
    console.log("c_firstName", c_firstName);
    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_fristName: "Arunlal",
    };
  },
};
</script>
<style>
</style>