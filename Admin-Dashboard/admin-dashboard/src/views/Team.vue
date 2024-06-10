<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')
const header = ref('Shopping List App')
const items = ref([
    { id: 1, label: 'Sample1' },
    { id: 2, label: 'Sample2' },
    { id: 3, label: 'Sample3' },
])

const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>

<template>
    <div class="container">
        <h1>{{ header }}</h1>

        <ul>
            <li v-for="{ id, label }, items in items" :key="id">{{ label }}</li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    width: 300px;
    height: 230px;
    background-color: moccasin;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    ul li {
        list-style-type: none;
    }
}
</style>