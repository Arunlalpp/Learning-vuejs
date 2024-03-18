<template>
  <h2>options - {{ o_fristName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>
  <h2>Composition - {{ greet }}</h2>

  <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
  <h2>Composition - {{ greetHero }}</h2>

  <h2>{{ state.firstName }} {{ state.lastName }} {{ state.heroName }}</h2>
  <h2>Compostion - {{ reactGreetHero }}</h2>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  name: `Data`,
  setup() {
    const c_firstName = ref("PCP");
    const c_lastName = ref("Kent");
    const c_heroName = ref("Diana");

    c_firstName.value = "PPC";
    const greet = `Hello ${c_firstName.value}`;
    console.log("c_firstName", c_firstName);
    const greetHero = `Hello${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

    const state = reactive({
      firstName: "Princess",
      lastName: "Diana",
      heroName: "Wonder Women",
    });
    const reactGreetHero = `Hello ${state.firstName} ${state.lastName} ${state.heroName}`;
    return {
      c_firstName,
      c_lastName,
      greet,
      greetHero,
      state,
      reactGreetHero,
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