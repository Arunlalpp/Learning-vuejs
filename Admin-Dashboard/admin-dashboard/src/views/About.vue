<template>
    <div class="container">
        <h1>Vue 3 Map Function Example</h1>
        <ul>
            <li v-for="(item, index) in transformedItems" :key="index">
                Name: {{ item.name }}
            <li>Age: {{ item.age }}</li>
            </li>
            <div class="buttonContainer">
                <button @click="incrementCount">Increment</button>
                <button @click="decrementCount">Decrement</button>
                <h2>{{ count }}</h2>
            </div>
        </ul>
    </div>
</template>

<script>
import { useState } from '../components/Composables/State';
import { dummyData } from '../data';

export default {
    setup() {
        const [count, setCount] = useState(0)

        const decrementCount = () => {
            if (count.value > 1) {
                setCount(count.value - 1);
            }
        };

        const incrementCount = () => {
            if (count.value < 10) {
                setCount(count.value + 1)
            }
        }

        return {
            count,
            setCount,
            decrementCount,
            incrementCount,
        };
    },
    data() {
        return {
            items: dummyData
        };
    },
    computed: {
        transformedItems() {
            return this.items.map(item => {
                return {
                    name: item.name.toUpperCase(),
                    age: parseInt(item.age) + 1
                };
            });
        }
    },

    // methods: {
    //     decrementCount() {

    //         console.log("Hallo");
    //         if (this.count > 1) {
    //             this.count -= 1;
    //         }
    //     }
    // }
};
</script>

<style scoped>
.container {
    margin: 30px;

    ul li {
        list-style-type: none;
        color: #2f2f;
    }

}

.buttonContainer {

    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;

    button {
        outline: none;
        border: none;
        padding: 10px;
        background-color: gray;
        border-radius: 8px;
        color: white;
        font-weight: 700;
        font-size: 14px;
        text-wrap: nowrap;
    }
}
</style>