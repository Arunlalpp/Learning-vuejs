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
      highlightedColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
        padding: "20px",
      },
      dangerStyleObject: {
        color: "darked",
        backgroundColor: "red",
        border: "1px solid darked",
      },
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
  <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
    Array conditional movie
  </h2>
  <h2 v-bind:class="{ promoted: true, new: !isSoldOut, 'sold-out': isSoldOut }">
    Object conditional moview
  </h2>
  <h2
    v-bind:style="{
      color: highlightedColor,
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    inline style
  </h2>
  <div v-bind:style="headerStyleObject">Style object</div>
  <div v-bind:style="[baseStyleObject, successStyleObject]">Success style</div>
  <div v-bind:style="[baseStyleObject, dangerStyleObject]">Success style</div>
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
