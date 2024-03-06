<script>
// import Greet from './components/Greet.vue'
import Articles from './components/Articles.vue'

export default {
  name: 'App',
  components: {
    Articles
  },
  data() {
    return {
      name: 'Arunlal PP',
      channel: 'VONNUE'
    }
  }
}
</script>

<template>
  <!-- <Greet name="PCP" heroName="ACTOR" /> -->
  <!-- <Greet :name="name" :heroName="channel" /> -->
  <Articles title="sample" :likes="20" :isPublished="true" />
</template>

<style scoped>
#app {
  color: black;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
