<script >
export default {
  name: "App",
  data() {
    return {
      names: ["Arunlal", "pcp", "20sil_pcp"],
      fullNames: [
        { first: "Arun", last: "lal" },
        { first: "Nidheesh", last: "Kunuvava" },
        { first: "Sree", last: "kutty" },
      ],
      actors: [
        {
          name: "Dileep",
          movies: ["vinodayathra", "CID moosa"],
        },
        {
          name: "Harisree ashokan",
          movies: ["Panjabi house", "CID moosa"],
        },
      ],
      myInfo: {
        name: "Arunlal",
        channel: "Codevelution",
        course: "Vue 3",
      },
    };
  },
};
</script>

<template>
  <h2 v-for="(name, index) in names" :key="name">{{ index }}{{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first">
    {{ name.first }} {{ name.last }}
  </h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>
  <template v-for="name in names" :key="name"
    ><h2>{{ name }}</h2>
    <hr
  /></template>
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
