<template>
  <h3 v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>
<script>
export default {
  name: 'NameList',
  data() {
    return {
      names: [
        {
          firstName: 'Arun',
          lastName: 'Lal'
        },
        {
          firstName: '20Sil',
          lastName: 'PCP'
        },
        {
          firstName: 'PCP',
          lastName: 'Pilikka'
        }
      ]
    }
  }
}
</script>
<style>
</style>