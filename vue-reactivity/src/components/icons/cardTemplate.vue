<template>
  <div class="card">
    <h2 class="name">
      {{ dogBreed }}
    </h2>
    <img class="image" v-bind:src="dogImage" v-bind:alt="dogBreed" />
    <h2 class="price">{{ price.format(dogPrice) }}</h2>
    <button
      @click.self="
        addToCart({
          breed: dogBreed,
          image: dogImage,
          price: dogPrice,
          count: 1,
        })
      "
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "cardTemplate",
  props: {
    dogBreed: String,
    dogImage: String,
    dogPrice: Number,
    buttonLabel: String,
    //cartButton: Function,
  },
  methods: {
    async addToCart(object) {
      console.log(object);
      cartItems.push(object);
      await this.$nextTick();
      console.log(cartItems);
    },
  },
  data() {
    return {
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },
};

export const cartItems = reactive([]);
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 50px;
  padding: 30px 30px;
  margin: 10px 20px;
  width: 25vw;
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
