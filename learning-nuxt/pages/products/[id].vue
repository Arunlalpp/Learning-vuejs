<template>
    <WrapperContainer>
        <ProductDetails :product="product" />
    </WrapperContainer>
</template>
<script setup>
import { createError, useFetch } from 'nuxt/app';
import { useRoute } from 'vue-router';
import ProductDetails from '~/components/ProductDetails.vue'


const { id } = useRoute().params

const apiURL = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(apiURL, { key: id })

if (!product.value) {
    throw createError({
        statusCode: 404, statusMessage: 'Product not found'
    })
}

</script>
<style lang="scss"></style>