<template>
  <div class="DogCard">
    <DogCard
      ><h2 :class="name" v-for="dog in dogs" v-bind:key="dog">
        {{ dog.breed }}
      </h2>
      <img alt="doggo" class="image" v-bind:src="image"
    /></DogCard>
  </div>
</template>

<script>
import { dogs } from "../../array";
export default {
  name: "DogCard",
  props: {},
  data() {
    return { dogs };
  },
};
</script>
