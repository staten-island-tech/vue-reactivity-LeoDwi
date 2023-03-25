<template v-for="{ arrayItem } in { dogArray }" v-bind:key="{ arrayItem }">
  <div class="card">
    <h1>this is a card</h1>
    <h2 :class="name">
      {{ dogBreed }}
    </h2>
    <img :src="{ dogImage }" />
  </div>
</template>

<script>
export default {
  name: "cardTemplates",
  props: {
    dogBreed: String,
    dogImage: String,
    arrayItem: String,
    dogArray: Array,
  },
};
</script>
