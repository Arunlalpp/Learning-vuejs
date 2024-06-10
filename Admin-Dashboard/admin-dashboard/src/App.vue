<template>
  <div class="app">
    <!-- SideBar -->
    <Sidebar />
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Header from "./components/Header/Header.vue";
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Urbanist", sans-serif;
}

body {
  background: var(--light);
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 760px) {
      padding: 6rem;
    }
  }
}
</style>
