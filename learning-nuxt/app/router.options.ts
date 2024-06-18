import type { RouterOptions } from "vue-router";

export default <RouterOptions>{
  scrollBehavior(to, _from, savedPosition) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          if (to.hash) {
            resolve({
              el: to.hash,
              top: 0,
            });
          } else {
            resolve({ top: 0 });
          }
        }
      }, 100);
    });
  },
};
