<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params.id);
</script>

<template>
    <div>event id:{{ $route.params.id }}</div>
</template>