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
  <cardTemplates
    :arrayItem="dog"
    :dogArray="dogs"
    :dogBreed="dog.breed"
    :dogImage="dog.image"
  />
</template>
