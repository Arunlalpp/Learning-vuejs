import { defineStore } from "pinia";

export const useCardData = defineStore("card", {
  state: () => ({
    items: [
      {
        title: "Sample 1",
        imgUrl:
          "https://images.unsplash.com/photo-1718049720096-7f1af82d69af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ut pariatur adipisci soluta nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste perferendis eos illum officiis nesciunt architecto ratione nihil in maxime, possimus id quas similique dicta enim laudantium commodi quos ex.",
        shouldShow: false,
      },
      {
        title: "Sample 2",
        imgUrl:
          "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ut pariatur adipisci soluta nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste perferendis eos illum officiis nesciunt architecto ratione nihil in maxime, possimus id quas similique dicta enim laudantium commodi quos ex.",
        shouldShow: false,
      },
      {
        title: "Sample 3",
        imgUrl:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ut pariatur adipisci soluta nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste perferendis eos illum officiis nesciunt architecto ratione nihil in maxime, possimus id quas similique dicta enim laudantium commodi quos ex.",
        shouldShow: false,
      },
      {
        title: "Sample 4",
        imgUrl:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ut pariatur adipisci soluta nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste perferendis eos illum officiis nesciunt architecto ratione nihil in maxime, possimus id quas similique dicta enim laudantium commodi quos ex.",
        shouldShow: false,
      },
    ],
  }),
});
