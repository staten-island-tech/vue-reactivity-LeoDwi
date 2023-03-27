<template>
  <div class="card">
    <h2 class="name">
      {{ dogBreed }}
    </h2>
    <img class="image" v-bind:src="dogImage" v-bind:alt="dogBreed" />
    <h2 class="price">{{ dogPrice }}</h2>
    <button
      @click="
        ($event) => {
          cartButton;
        }
      "
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
export default {
  name: "cardTemplate",
  props: {
    dogBreed: String,
    dogImage: String,
    dogPrice: String,
    buttonLabel: String,
    cartButton: String,
  },
};
</script>
