<template>
    <header class="container" :class="{ active: isActive }">
        <WrapperContainer>
            <nav>
                <div class="logo">logo</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
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

import { ref, onMounted, onUnmounted } from 'vue';
import { useEventListener } from '@vueuse/core';

const isActive = ref(false);

const handleScroll = () => {
    isActive.value = window.scrollY > 50;
};

useEventListener(window, 'scroll', handleScroll);
</script>