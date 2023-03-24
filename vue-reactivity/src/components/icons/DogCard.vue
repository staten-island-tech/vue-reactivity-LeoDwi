<script>
import { dogs } from "../../array";
import CardTemplates from "./cardTemplates.vue";
export default {
  data() {
    return dogs;
  },
  components: {
    CardTemplates,
  },
};
</script>

<template>
  <CardTemplates
    :object="dog"
    :array="dogs"
    :property="breed"
    :image="dog.image"
  />
</template>
