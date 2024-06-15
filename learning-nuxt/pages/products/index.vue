<template>
    <WrapperContainer>
        <div class="refreshButton">
            <button type="button" @click="handleRefresh" :disabled="isLoading">Refresh</button>
        </div>
        <div class="grid-container" v-if="!isLoading">
            <div v-for="(item, index) in products" :key="index">
                <ProductCard :product="item" />
            </div>
        </div>
    </WrapperContainer>
</template>


<script setup>
import { ref } from 'vue';
import ProductCard from '~/components/ProductCards.vue';

const products = ref([]);
const isLoading = ref(true);

const fetchData = async () => {
    isLoading.value = true;
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value = data;
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        isLoading.value = false;
    }
};

const handleRefresh = async () => {
    await fetchData();
};

onMounted(() => {
    fetchData();
});

definePageMeta({
    layout: 'products',
    // pageAnimation: false,
    // layoutAnimation: false,
    // scrollToTop: false, //disable this option in component

    // transition: {
    //     name: "sample",
    //     mode: "in-out",
    //     afterEnter(el) {
    //         // reset scroll position
    //         document.documentElement.scrollTop = 0;
    //     }
    // }
})

</script>

<style scoped lang="scss">
.grid-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding-top: 2rem;
}

.refreshButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

    button {
        width: 20%;
        height: 2.5rem;
        padding: 0.5rem;
        outline: none;
        border: none;
        color: var(--secondary-color);
        font-weight: 600;
        background-color: var(--primary-color);
        border-radius: 10px;
    }
}

.sample-enter-active,
.sample-leave-active {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    z-index: 200;
}
</style>