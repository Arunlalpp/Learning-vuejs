<template>
    <WrapperContainer>
        <ProductDetails :product="product" />
    </WrapperContainer>
</template>
<script setup>
import { createError, useFetch } from "nuxt/app";
import { useRoute } from "vue-router";
import ProductDetails from "~/components/ProductDetails.vue";

const { id } = useRoute().params;

const apiURL = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(apiURL, { key: id });

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
    });
}

definePageMeta({
    layout: 'products',
    pageTransition: {
        name: "slide-right",
        mode: "out-in",
    },
    middleware(to, from) {
        if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
            to.meta.pageTransition.name =
                +to.params.id > +from.params.id ? "slide-left" : "slide-right";
    },
});
</script>
<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.2s;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
}
</style>
