<script>
import { dogs } from "../../array";
export default {
  data() {
    return { dogs };
  },
};
</script>

<template>
  <div class="Card">
    <h2 :class="name" v-for="dog in dogs" v-bind:key="dog">{{ dog.breed }}</h2>
  </div>
</template>
