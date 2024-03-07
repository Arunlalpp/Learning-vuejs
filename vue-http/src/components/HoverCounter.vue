<template>
  <div>
    <h2 @mouseover="incrementCount">Hover {{ count }} times</h2>
  </div>
</template>
  <script>
import CounterMixin from "../mixins/Counter";
export default {
  name: "HoverCounter",
  mixins: [CounterMixin],
};
</script>
  <style>
</style>