<script>
import Greet from './components/Greet.vue'

export default {
  name: 'App',
  components: {
    Greet
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
  <Greet :name="name" :heroName="channel" />
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
