<script >
export default {
  name: "App",
  data() {
    return {
      name: "Arunlal PP",
      count: 0,
    };
  },
  methods: {
    increment(num) {
      return (this.count += num);
    },
    decrement(num) {
      return (this.count -= num);
    },
  },
};
</script>

<template>
  <h2>{{ name }}</h2>
  <div>
    <button v-on:mouseover="name = 'PCP'">Change name</button>
    <h2>{{ count }}</h2>
    <div>
      <button @click="increment(1)">Increment 1</button>
      <button @click="increment(5)">Increment 5</button>
      <button @click="decrement(1)">Decrement 1</button>
      <button @click="decrement(5)">Decrement 5</button>
    </div>
  </div>
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
