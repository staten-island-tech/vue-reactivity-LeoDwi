<template>
  <div class="card">
    <img class="image" v-bind:src="dogImage" v-bind:alt="dogBreed" />
    <h2 class="name">
      {{ dogBreed }}
    </h2>
    <h2 class="price">Price per unit:{{ dogPrice }}</h2>
    <h2 class="count">Count:{{ dogCount }}</h2>
    <button @click="removeFromCart(dogBreed)">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
import { cartItems } from "./cardTemplate.vue";
export default {
  name: "cardTemplate",
  props: {
    dogBreed: String,
    dogImage: String,
    dogPrice: String,
    dogCount: Number,
    buttonLabel: String,
  },
  methods: {
    removeFromCart(dogBreed) {
      console.log(dogBreed);
      let card = cartItems.find((dog) => dog.breed === dogBreed);
      console.log(card.count);
      if (card.count > 1) {
        card.count -= 1;
      } else {
        cartItems.splice(card, 1);
      }
      console.log(cartItems);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 50px;
  padding: 30px 30px;
  margin: 10px 20px;
  width: 80vw;
  border: black solid 3px;
  border-radius: 10px;
}

.card:hover {
  transform: scale(105%);
}
.name {
  font-size: 30px;
  color: black;
}
.image {
  float: left;
  width: 20vw;
  height: 20vw;
  object-fit: cover;
}

.price,
.count {
  font-size: 20px;
  color: black;
}
</style>
