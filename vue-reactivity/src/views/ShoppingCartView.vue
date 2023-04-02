<script>
import cartCard from "../components/icons/cartCard.vue";
import { cartItems } from "../components/icons/cardTemplate.vue";
import { nextTick } from "vue";

export default {
  name: "ShoppingCart",
  components: { cartCard },
  data() {
    return {
      cartItems,
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      upToDate: true,
      totalPrice: 0,
    };
  },
  /*   methods: {
    getTotalPrice(price) {
      price + this.totalPrice;
    },
  }, */
};
</script>

<template>
  <div class="parent" v-if="upToDate">
    <cartCard
      v-for="dog in cartItems"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
      :dogPrice="price.format(dog.price)"
      :buttonLabel="'Remove From Cart'"
    />
  </div>
</template>

<style scoped>
.parent {
  background-color: aliceblue;
}
</style>
