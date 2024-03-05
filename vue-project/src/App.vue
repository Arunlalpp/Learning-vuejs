<script >
export default {
  name: "App",
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 10,
    };
  },
  // Functions are called methods
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>

<template>
  <h2>Add method - {{ add(1, 2, 3) }}</h2>
  <h2>Multiply method - {{ multiply(baseValue) }}</h2>
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
