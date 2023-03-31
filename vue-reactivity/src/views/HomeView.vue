<script>
import cardTemplate from "../components/icons/cardTemplate.vue";
import { dogs } from "../array.js";
import { nextTick } from "vue";

export default {
  name: "HomeView",
  components: { cardTemplate },
  data() {
    return {
      dogs,
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
  methods: {
    async addToCart(object) {
      cartItems.push(object);
      await nextTick();
      //console.log(cartItems);
    },
  },
};
export const cartItems = [];
</script>

<template>
  <div class="parent">
    <cardTemplate
      v-for="dog in dogs"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
      :dogPrice="price.format(dog.price)"
      :buttonLabel="'Add to Cart'"
      :cartButton="
        addToCart({
          breed: dog.breed,
          image: dog.image,
          price: dog.price,
        })
      "
    />
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  background-color: aliceblue;
}
</style>
