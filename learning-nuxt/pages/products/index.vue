<template>
    <WrapperContainer>
        <div class="grid-container">
            <div v-for="(item, index) in products" :key="index">
                <ProductCard :product="item" />
            </div>
        </div>
    </WrapperContainer>
</template>


<script setup>
import { useFetch } from 'nuxt/app';
import ProductCard from '~/components/ProductCards.vue'

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
.grid-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 90%;
    max-width: 1200px;
    margin: auto;
}
</style>