<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
<script>
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: `Input`,
  props: {
    modelValue: String
  }
}
</script>
<style scoped>
input[type='text'] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>