<template>
    <div class="container">
        <p>{{ message }}</p>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        message: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.container {
    background-color: aqua;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 2px 5px 8px 0px #888888;
}
</style>