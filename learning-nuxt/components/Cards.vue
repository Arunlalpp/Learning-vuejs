<template>
    <WrapperContainer>
        <div class="grid-container">
            <div v-for="(card, index) in cards" :key="index" class="card">
                <NuxtImg :src="card.imgUrl" :alt="card.title" width="600" height="800"
                    :modifiers="{ quality: 90, format: 'webp' }" />
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
                    <NuxtLink to="/products"><button type="button">Show More Details</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </WrapperContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useCardData } from '~/store/UseGetCard.ts'
import ArrowDown from '~/assets/SVG/arrow-down.svg'
import ArrowUp from '~/assets/SVG/down-arrow.svg'

const cardStore = useCardData()
const cards = ref(cardStore.items);

const toggleDropdown = (index) => {
    cards.value[index].shouldShow = !cards.value[index].shouldShow;
}

// const scrollTop = () => {
//     window.scrollTo(0, 0)
// }
</script>

<style lang="scss" scoped>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #bfbcbc;

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
        color: gray;
        font-size: 14px;
        font-weight: 600;
        background-color: transparent;
        border-radius: 25px;
        cursor: pointer;
    }
}

.card:hover img {
    transform: scale(1.1);
}
</style>
