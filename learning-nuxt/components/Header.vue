<template>
    <header class="container" :class="{ active: isActive }">
        <WrapperContainer>
            <nav>
                <NuxtLink to="/" class="logo">
                    <NuxtImg
                        src="https://img.freepik.com/free-vector/logotype_23-2148144447.jpg?t=st=1718424759~exp=1718428359~hmac=3bf9d7c39ec6c286c0b255e65ccabfff3db461f7122b6a04e910971cd85c7914&w=740"
                        height="40" width="40" />
                </NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/navlinks/Feature">Feature</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/navlinks/About">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/navlinks/Blogs">Blogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/navlinks/Contact">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/navlinks/loginandregister">Sign In</NuxtLink>
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