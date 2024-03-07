<script>
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'

export default {
  name: 'App',
  components: {
    TabA,
    TabB,
    TabC
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
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>

  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->
</template>

<style scoped>
#app {
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --webkit-font-smoothing: antialiased;
  --mos-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
