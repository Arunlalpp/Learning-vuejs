<template>
    <div>
        <Header>
            <slot name="Header">
                Default Header content
            </slot>
        </Header>
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
div {
    background-color: orange;
}
</style>