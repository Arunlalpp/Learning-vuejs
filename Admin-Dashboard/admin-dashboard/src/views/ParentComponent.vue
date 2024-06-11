<template>
    <div class="container">
        <div v-for="(item, index) in childDataMapped" :key="index">
            <ChildComponent :message="item.message" :count="item.count" />
        </div>
    </div>
</template>

<script>
import { dummyChildComponentData } from '../data';
import ChildComponent from './ChildComponent.vue'


export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            childData: dummyChildComponentData
        }
    },
    computed: {
        childDataMapped() {
            return this.childData.map(item => {
                return {
                    message: item.message,
                    count: item.count
                }
            })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    margin: 10px;
}
</style>