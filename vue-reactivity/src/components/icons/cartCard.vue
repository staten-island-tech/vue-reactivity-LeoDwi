<template>
  <div class="card">
    <img class="image" v-bind:src="dogImage" v-bind:alt="dogBreed" />
    <h2 class="name">
      {{ dogBreed }}
    </h2>
    <h2 class="price">{{ dogPrice }}</h2>
    <button @click="removeFromCart">
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
    buttonLabel: String,
  },
  methods: {
    removeFromCart(dogBreed) {
      let card = cartItems.find((dog) => dog.breed === dogBreed);
      cartItems.splice(card, 1);
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

.price {
  font-size: 20px;
  color: black;
}
</style>
