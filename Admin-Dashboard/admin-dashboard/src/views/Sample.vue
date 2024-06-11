<script setup>
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const todoId = ref(2)
const data = ref(null)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
        loading.value = true
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

// watchEffect(async () => {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     )
//     data.value = await response.json()
//     console.log("🚀 ~ watchEffect ~ data.value:", data.value)
// })


</script>

<template>
    <div class="container">
        <p>
            Ask a yes/no question:
            <input v-model="question" :disabled="loading" placeholder="Ask questions" />
        </p>
        <p>{{ answer }}</p>
    </div>
</template>

<style scoped>
.container {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        padding: 10px;
        border: none;
        outline: none;
        border: 1px solid gray;
        border-radius: 8px;
    }
}
</style>