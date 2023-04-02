<script>
import cardTemplate from "../components/icons/cardTemplate.vue";
import { cartItems } from "../components/icons/cardTemplate.vue";
import { dogs } from "../array.js";

export default {
  name: "HomeView",
  components: { cardTemplate },
  data() {
    return {
      dogs,
    };
  },
};
</script>

<template>
  <div class="parent">
    <cardTemplate
      v-for="dog in dogs"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
      :dogPrice="dog.price"
      :dogObject="dog.breed"
      :buttonLabel="'Add to Cart'"
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
