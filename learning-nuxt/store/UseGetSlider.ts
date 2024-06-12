import { defineStore } from "pinia";

export const useSliderStore = defineStore("slider", {
  state: () => ({
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "LUNDEV",
        title: "DESIGN SLIDER",
        topic: "ANIMAL",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      },
      {
        image:
          "https://images.unsplash.com/photo-1707243103665-1de6cbf8f66f?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "LUNDEV",
        title: "DESIGN SLIDER",
        topic: "ANIMAL",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      },
      {
        image:
          "https://images.unsplash.com/photo-1612967335954-cb297626daa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "LUNDEV",
        title: "DESIGN SLIDER",
        topic: "ANIMAL",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      },
      {
        image:
          "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "LUNDEV",
        title: "DESIGN SLIDER",
        topic: "ANIMAL",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      },
    ],
  }),
});
