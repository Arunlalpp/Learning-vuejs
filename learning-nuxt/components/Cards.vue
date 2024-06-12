<template>
    <WrapperContainer>
        <div class="grid-container">
            <div v-for="(card, index) in cards" :key="index" class="card">
                <img :src="card.imgUrl" :alt="card.title">
                <div class="cardHeader">
                    {{ card.title }}
                    <button type="button" @click="toggleDropdown(index)">
                        <template v-if="card.shouldShow">
                            <ArrowUp />
                        </template>
                        <template v-else>
                            <ArrowDown />
                        </template>
                    </button>
                </div>
                <transition name="fade">
                    <div v-if="card.shouldShow" class="dropdown-wrapper">
                        <p>{{ card.description }}</p>
                    </div>
                </transition>
                <div class="buttonWrapper">
                    <button type="button">Show More</button>
                </div>
            </div>
        </div>
    </WrapperContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useCardData } from '~/store/UseGetCard.ts'
import ArrowDown from '~/assets/SVG/arrow-down.svg'
import ArrowUp from '~/assets/SVG/up-arrow.svg'

const cardStore = useCardData()
const cards = ref(cardStore.items);

const toggleDropdown = (index) => {
    cards.value[index].shouldShow = !cards.value[index].shouldShow;
}
</script>

<style lang="scss">
.grid-container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 80%;
    background-color: white;
    cursor: pointer;
}

.cardHeader {
    padding: 8px;
    background-color: yellowgreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #7b7979;

    button {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 8px;
        width: 32px;
        height: 32px;
    }
}

.dropdown-wrapper {
    padding: 8px;
    background-color: bisque;
    transition: height 0.5s ease;
    max-height: 100px;
    overflow-y: auto;

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        color: var(--primary-color);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.card img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
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
        color: white;
        font-size: 14px;
        font-weight: 600;
        background-color: rgb(2, 58, 2);
        border-radius: 25px;
        cursor: pointer;
    }
}

.card:hover img {
    transform: scale(1.1);
}
</style>
