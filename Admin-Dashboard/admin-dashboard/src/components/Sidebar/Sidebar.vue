<template>
    <aside :class="{ 'is-expanded': is_expanded }">
        <div class="logo">
            <img :src="logo" alt="vue" />
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../../assets/vue.svg'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    transition: width 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        position: relative;
        margin-bottom: 1rem;
        top: 0;
        transition: top 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            border: none;
            outline: none;
        }

        .material-symbols-outlined {
            color: var(--light);
            font-size: 2rem;
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>
