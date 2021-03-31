import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      list: [],
      listCount: 0,
    };
  },

  getters: {
    cartTotal(state) {
      let totalPrice = 0;
      for (let i = 0; i < state.list.length; i++) {
        const product = state.list[i];
        totalPrice += product.price * product.quantity;
      }
      return "$" + totalPrice / 100;
    },
  },

  mutations: {
    addProduct(state, item) {
      state.list.push(item);
      state.listCount++;
    },
    removeProduct(state, index) {
      state.list.splice(index, 1);
      state.listCount--;
    },
    clear(state) {
      state.list = [];
      state.listCount = 0;
    },
  },
});
