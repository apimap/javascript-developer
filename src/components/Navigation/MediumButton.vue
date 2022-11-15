<template>
  <div class="medium-button">
    <div v-if="target" class="button" @click="target">
      {{ title }}
    </div>
    <router-link v-if="route" :to="route">
      <div class="button">
        {{ title }}
      </div>
    </router-link>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "MediumButton",
  props: {
    title: String,
    target: Function,
    route: String
  },
};
</script>

<style scoped>

.button {
  border-radius: 0.2em;
  padding: 0.6em 1em;
  text-align: center;
  font-size: 1.2em;
}

</style>
