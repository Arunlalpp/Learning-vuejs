<script>
import NameList from './components/NameList.vue'

export default {
  name: 'App',
  components: {
    NameList
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<template>
  <NameList>
    <template v-slot:default="slotProps"
      >{{ slotProps.firstName }} {{ slotProps.lastName }}</template
    >
  </NameList>
  <NameList>
    <template v-slot:default="slotProps"
      >{{ slotProps.lastName }} {{ slotProps.firstName }}</template
    >
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">{{ slotProps.firstName }}</template>
  </NameList>
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
.img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
</style>
