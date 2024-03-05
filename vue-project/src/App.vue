<script >
export default {
  name: "App",
  data() {
    return {
      names: ["Arunlal", "pcp", "20sil_pcp"],
    };
  },
};
</script>

<template>
  <template v-for="name in names" :key="name"
    ><h2 v-if="name === 'pcp'">{{ name }}</h2></template
  >
</template>

<style>
#app {
  color: black;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
  color: aqua;
}
.promoted {
  font-style: italic;
}
.new {
  color: green;
}
.sold-out {
  color: red;
}
</style>
