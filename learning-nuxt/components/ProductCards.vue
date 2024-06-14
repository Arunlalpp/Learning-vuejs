<template>
    <div class="card">
        <NuxtImg :src="product.image" :alt="product.title" width="600" height="800"
            :modifiers="{ quality: 90, format: 'webp' }" />
        <div class="cardTitle">
            {{ product.title }}
        </div>
        <div class="buttonWrapper">
            <NuxtLink :to="`/products/${product.id}`"><button type="button">View Details</button></NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style lang="scss" scoped>
.card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 80%;
    background-color: white;
    cursor: pointer;
    width: 100%;
}

.card img {
    width: 100%;
    height: 50%;
    object-fit: contain;
    display: block;
    transition: transform 0.3s ease;
}

.cardTitle {
    padding-top: 8px;
}

.buttonWrapper {
    display: flex;
    justify-content: center;
    padding-top: 2rem;

    button {
        width: 70%;
        padding: 12px;
        outline: none;
        border: none;
        color: gray;
        font-size: 14px;
        font-weight: 600;
        background-color: transparent;
        border-radius: 25px;
        cursor: pointer;
        text-wrap: nowrap;
    }
}

.card:hover img {
    transform: scale(1.1);
}
</style>
