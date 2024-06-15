<template>
    <div class="cardContainer">
        <div class="imageWrapper">
            <NuxtImg :src="product.image" :alt="product.title" />
        </div>
        <div class="title">
            <h2>{{ product.title }}</h2>
            <p>Price - ${{ product.price }}</p>
            <h3>ProductDescription:</h3>
            <p>{{ product.description }}</p>
        </div>
    </div>
</template>
<script setup>

const { product } = defineProps(['product'])
</script>
<style lang="scss" scoped>
.cardContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}

.imageWrapper {
    padding: 7rem;
    width: 100%;
    height: 100%;

    img {
        max-width: 400px;
        object-fit: contain;
        mix-blend-mode: darken;
    }
}
</style>