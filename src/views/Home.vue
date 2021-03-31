<template>
  <main>
    <div class="bg-gray-50">
      <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <button
            class="px-5 py-3 mr-5 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none"
            @click="store.commit('addProduct', testItem())"
          >
            Add to cart
          </button>
          <button
            class="px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none"
            @click="store.commit('clear')"
          >
            Clear cart
          </button>
        </div>
      </div>

      <SlideCart :items="store.state.items" />
    </div>
  </main>
</template>

<script>
import SlideCart from "@/components/SlideCart.vue";
import store from "@/store/index";

export default {
  setup() {
    // Create a new product each time "Add to cart" is clicked
    const testItem = function () {
      return {
        price: Math.floor(Math.random() * 10 + 1) * 100,
        quantity: Math.floor(Math.random() * 5 + 1),
        title: "Test Product " + (store.state.list.length + 1),
      };
    };

    return {
      store,
      testItem,
    };
  },
  components: { SlideCart },
};
</script>
