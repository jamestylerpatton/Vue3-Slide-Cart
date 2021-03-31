<template>
  <div
    class="fixed top-0 h-full bg-white border-l-2 right-0 w-cart-width transition-all pb-28"
    :class="isOpen === true ? 'right-0' : 'right-neg-cart-width'"
  >
    <div class="mb-5 p-5 border-b text-center">
      Total: {{ store.getters.cartTotal }}
    </div>

    <div>
      <div
        v-for="(item, index) in store.state.list"
        :key="index"
        class="mb-5 px-5"
      >
        <h3 class="font-bold">{{ item.title }}</h3>
        <div class="flex flex-row justify-between">
          <p>
            ${{ item.price / 100 }}
            <span class="text-xs">(x{{ item.quantity }})</span>
          </p>
          <button
            class="text-red-700 text-xs"
            @click="store.commit('removeProduct', index)"
          >
            remove
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full p-5">
      <button
        class="block w-full px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-500 focus:outline-none"
        @click="isOpen = false"
      >
        Close Cart
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import store from "@/store/";

export default {
  setup() {
    let isOpen = ref(false);

    return {
      store,
      isOpen,
    };
  },
  computed: mapState({
    count: (state) => state.listCount,
  }),
  watch: {
    count(newItems, oldItems) {
      this.isOpen = true;
    },
  },
};
</script>
