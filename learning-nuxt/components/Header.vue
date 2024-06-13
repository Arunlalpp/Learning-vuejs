<template>
    <header class="container" :class="{ active: isActive }">
        <WrapperContainer>
            <nav>
                <div class="logo">logo</div>
                <ul>
                    <li>
                        <NuxtLink to="#">Feature</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Blogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </WrapperContainer>
    </header>
</template>

<script setup>

// To optimize this method we can write this as using @vue/core

// export default {
//   data() {
//     return {
//       isActive: false,
//     };
//   },
//   mounted() {
//     window.addEventListener("scroll", this.handleScroll);
//   },
//   beforeDestroy() {
//     window.removeEventListener("scroll", this.handleScroll);
//   },
//   methods: {
//     handleScroll() {
//       this.isActive = window.scrollY > 50;
//     },
//   },
// };

import { ref } from 'vue';
import { useEventListener } from '@vueuse/core';

const isActive = ref(false);

const handleScroll = () => {
    isActive.value = window.scrollY > 50;
};

useEventListener(window, 'scroll', handleScroll);
</script>