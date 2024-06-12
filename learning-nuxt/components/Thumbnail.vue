<template>
    <div class="item">
        <img :src="image" />
        <div class="content">
            <div class="title">Name Slider</div>
            <div class="description">Description</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    image: String
})
</script>