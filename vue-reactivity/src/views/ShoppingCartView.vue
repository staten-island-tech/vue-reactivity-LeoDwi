<script>
import cartCard from "../components/icons/cartCard.vue";
import totalPrice from "../components/icons/totalPrice.vue";
import { cartItems } from "../components/icons/cardTemplate.vue";

export default {
  name: "ShoppingCart",
  components: { cartCard, totalPrice },
  data() {
    return {
      cartItems,
      currentPrice: 0,
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      /*       getTotalPrice: cartItems.forEach((dog) => {
        dog.price + currentPrice;
        console.log(dog.price);
      }), */
    };
  },
  methods: {},
};
</script>

<template>
  <div class="parent">
    <cartCard
      v-for="dog in cartItems"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
      :dogPrice="price.format(dog.price)"
      :buttonLabel="'Remove From Cart'"
    />
    <totalPrice />
  </div>
</template>

<style scoped>
.parent {
  background-color: aliceblue;
}
</style>
