<script >
export default {
  name: "App",
  data() {
    return {
      greet: "Hello",
      name: "Arunlal",
      channel1: "<b>Learning vue</b>",
      hack: `<a href="#" onclick="alert('You have been blocked!')">win a prize!</a>`,
    };
  },
};
</script>

<template>
  <div>{{ greet }} {{ name }}</div>
  <div v-html="channel1"></div>
  <div v-html="hack"></div>
</template>;
<style>
#app {
  color: black;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
}
</style>
