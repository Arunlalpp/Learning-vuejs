<script>
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  components: {
    Popup
  },
  data() {
    return {
      showPopup: false
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false
      console.log('Name', name)
    }
  }
}
</script>

<template>
  <button @click="showPopup = true">Show popup</button>
  <Popup v-show="showPopup" @close="closePopup" />
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
