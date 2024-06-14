<template>
    <div class="errorCard">
        <div class="imageWrapperContainer">
            <NuxtImg
                src="https://img.freepik.com/free-vector/offline-concept-illustration_114360-7233.jpg?t=st=1718359960~exp=1718363560~hmac=0ddcf32d489f9450cb5090c5372474eec52bd10ca66b24afd53bf0f3b5ec8067&w=740"
                height="300" width="300" alt="error" />
        </div>
        <div class="errorWrapper">
            <h2>{{ error.statusCode }}</h2>
            <p>Ooops.</p>
            <p>{{ error.message }}</p>
            <button @click="handleError">Back To Home</button>
        </div>
    </div>
</template>

<script setup>
import { clearError } from 'nuxt/app';

const { error } = defineProps(['error'])

const handleError = () => {
    clearError({ redirect: '/' })
}
</script>

<style lang="scss">
.errorCard {
    display: flex;
    flex-direction: column;

    .errorWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        button {
            display: grid;
            place-content: center;
            padding: 1rem;
            height: 2.6rem;
            border: none;
            outline: none;
            border-radius: 2rem;
            widows: 90%;
            color: var(--primary-color);
            font-weight: 600;
            cursor: pointer;
        }
    }

    .imageWrapperContainer {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;

        img {
            mix-blend-mode: darken;
            max-width: 400px;
        }
    }
}
</style>