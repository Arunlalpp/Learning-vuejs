<script >
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movie: "Batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["CID MOOSA", "PARAKKUMTHALIKKA"],
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert(
          "Listening to hight volume for a long time may damage your gearing"
        );
      }
    },
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name =${newValue}`);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API with movie title = ${newValue.title} and actor ${newValue.actor}`
        );
      },
      deep: true,
    },
    movieList: {
      handler(newValue) {
        console.log(`Updated list ${newValue}`);
      },
      // deep: true,
    },
  },
};
</script>

<template>
  <h2>Volume tracker (0-20)</h2>
  <h3>Current volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <input type="text" name="" id="" v-model="movie" />
  <input type="text" name="" id="" v-model="movieInfo.title" />
  <input type="text" name="" id="" v-model="movieInfo.actor" />
  <button @click="movieList = movieList.concat('[VINODAYATHRA]')">
    Add movie
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
