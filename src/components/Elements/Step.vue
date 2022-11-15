<template>
  <div class="step">
    <router-link :to="target">
      <img :src="image" alt="Step" class="svg"/>
      <div class="number">{{ number }}</div>
      <div class="title">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "Step",
  props: {
    title: String,
    image: Object,
    target: String,
    number: String
  }
};
</script>
<style scoped>

.number {
  font-size: 1.2em;
  font-weight: lighter;
}

.step {
  text-align: center;
  width: 10em;
  height: 10em;
}

.step:last-of-type {
  text-align: center;
  width: 10em;
  height: 10em;
}

img {
  height: 6em;
}

.title {
  font-size: 1em;
  padding-top: 0.6em;
}

</style>

