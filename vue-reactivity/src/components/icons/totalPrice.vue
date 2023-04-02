<template>
  <div>
    <h2 class="total">Total Price: {{ price.format(getTotalPrice()) }}</h2>
  </div>
</template>

<script>
import { cartItems } from "./cardTemplate.vue";
export default {
  name: "totalPrice",
  data() {
    return {
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    getTotalPrice() {
      let currentPrice = 0;
      cartItems.forEach((dog) => {
        currentPrice += dog.price;
        console.log(dog.price);
        console.log(currentPrice);
      });
      return currentPrice;
    },
  },
};
</script>

<style lang="css" scoped>
.total {
  color: black;
}
</style>
