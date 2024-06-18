import { defineStore } from "pinia";

export const useSliderStore = defineStore("slider", {
  state: () => ({
    items: [],
  }),
  actions: {
    setItems(items: never[]) {
      this.items = items;
    },
  },
});
