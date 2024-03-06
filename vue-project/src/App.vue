<script >
export default {
  name: "App",
  data() {
    return {
      firstName: "Arunlal",
      lastName: "PP",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
    };
  },
  methods: {},
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    total() {
      return this.items?.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
  },
};
</script>

<template>
  <h2>
    Total -
    {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
  </h2>
  <button @click="items.push({ id: 4, title: 'Keyboard', price: 400 })">
    Add item
  </button>
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
.label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
}
</style>
