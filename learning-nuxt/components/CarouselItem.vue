<template>
    <div class="item">
        <img :src="image" />
        <div class="content">
            <div class="author">{{ author }}</div>
            <div class="title">{{ title }}</div>
            <div class="topic">{{ topic }}</div>
            <div class="des">{{ description }}</div>
            <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    image: String,
    author: String,
    title: String,
    topic: String,
    description: String
})
</script>