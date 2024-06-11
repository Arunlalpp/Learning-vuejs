<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')
const newItem = ref('')
const isHighPriority = ref(false)

const items = ref([
    { id: 1, label: 'Sample1' },
    { id: 2, label: 'Sample2' },
    { id: 3, label: 'Sample3' },
])

const handleAddItems = () => {
    if (newItem.value.trim() !== '') {
        items.value.push({ id: items.value.length + 1, label: newItem.value })
        newItem.value = ''
        isHighPriority.value = false
    }
}
</script>

<template>
    <div class="container">
        <h1>{{ header }}</h1>
        <div class="wrapperContainer">
            <input type="text" v-model.trim="newItem" placeholder="Add new item">
            <label>
                <input type="checkbox" v-model="isHighPriority">
                High Priority
            </label>
            <button @click="handleAddItems">Save Item</button>
        </div>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.label }}</li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    width: 450px;
    height: 230px;
    background-color: moccasin;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
    margin: 10px;
}

ul li {
    list-style-type: none;
}

.wrapperContainer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
}

button {
    padding: 10px;
    outline: none;
    border: none;
    background-color: blanchedalmond;
    border-radius: 8px;
    cursor: pointer;
}
</style>
