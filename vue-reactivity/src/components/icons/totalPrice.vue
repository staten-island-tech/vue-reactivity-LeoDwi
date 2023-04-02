<template>
  <div>
    <h2 class="total">{{ price.format(totalPrice) }}</h2>
  </div>
</template>

<script>
import { cartItems } from "./cardTemplate.vue";
export default {
  name: "totalPrice",
  props: {
    totalPrice: Number,
  },
  data() {
    return {
      currentPrice: 0,
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
