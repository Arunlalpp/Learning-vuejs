<script >
export default {
  name: "App",
  data() {
    return {
      name: "Nidheesh",
      greet: "hello",
      channel1: "Learning vue",
    };
  },
};
</script>

<template>
  <div>{{ greet }} {{ name }}{{channel1}}</div>
</template>;
<style scoped>
#App {
  color: aquamarine;
  margin-top: 60px;
  text-align: center;
}
</style>
