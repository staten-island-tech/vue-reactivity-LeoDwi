<template>
  <div class="DogCard">
    <DogCard
      ><h2 :class="name" v-for="object in array" v-bind:key="object">
        {{ object.property }}
      </h2>
      <img alt="doggo" class="image" v-bind:src="image"
    /></DogCard>
  </div>
</template>

<script>
export default {
  name: "CardTemplates",
  props: {
    object,
    array,
    property,
    image,
  },
};
</script>
