<script setup>
import { ref } from 'vue';

const activeColor = ref('blue')
const fontSize = ref(80)
const isShowParaGraph = ref(false)

const handleShowElement = () => {
    isShowParaGraph.value = !isShowParaGraph.value
}
</script>

<template>
    <div class="container">
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">sampleText</div>
        <button @click="handleShowElement">
            Click
        </button>
        <p v-if="isShowParaGraph">Sample</p>
    </div>
</template>

<style scoped>
.container {
    margin: 30px;

    button {
        padding: 10px;
        background-color: darkgreen;
        color: whitesmoke;
        outline: none;
        border: none;
        border-radius: 8px;
        width: 100%;
    }

}
</style>
