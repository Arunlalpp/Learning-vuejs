<script >
export default {
  name: "App",
  data() {
    return {
      greet: "Hello",
      name: "Arunlal",
      channel1: "<b>Learning vue</b>",
      hack: `<a href="#" onclick="alert('You have been blocked!')">win a prize!</a>`,
      headingId: "heading",
      isDisabled: false,
      status: "danger",
      isPromoted: true,
      isSoldOut: true,
    };
  },
};
</script>

<template>
  <div>{{ greet }} {{ name }}</div>
  <div v-html="channel1"></div>
  <div v-html="hack"></div>
  <h2 v-bind:id="headingId">Heading</h2>
  <button v-bind:disabled="isDisabled">bind</button>
  <h2 class="underline">Underlined text</h2>
  <h2 class="underline" v-bind:class="status">status</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">Soldout? moview</h2>
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
