<script>
import cardTemplates from "../components/icons/cardTemplates.vue";
import { dogs } from "../array.js";

export default {
  name: "HomeView",
  components: { cardTemplates },
  data() {
    return {
      dogs,
    };
  },
};
</script>

<template>
  <div>
    <cardTemplates
      v-for="dog in dogs"
      v-bind:key="dog"
      :dogBreed="dog.breed"
      :dogImage="dog.image"
    />
  </div>
</template>
