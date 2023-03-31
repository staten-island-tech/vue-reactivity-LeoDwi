<script>
import cardTemplate from "../components/icons/cardTemplate.vue";
import { cartItems } from "./HomeView.vue";

export default {
  name: "ShoppingCart",
  components: { cardTemplate },
  data() {
    return {
      cartItems,
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    async removeFromCart(breed) {
      cartItems.splice(cartItems.findIndex(breed), 1);
      upToDate = false;
      await this.$nextTick();
      upToDate = true;
    },
  },
};
</script>

<template>
  <div class="parent" v-if="upToDate">
    <cardTemplate
      v-for="dog in cartItems"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
      :dogPrice="price.format(dog.price)"
      :buttonLabel="'Remove From Cart'"
      :cartButton="removeFromCart(dog.breed)"
    />
  </div>
</template>
