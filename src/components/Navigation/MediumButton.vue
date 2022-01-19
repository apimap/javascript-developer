<template>
  <div class="medium-button">
    <div class="button" @click="target" v-if="target">
      {{ title }}
    </div>
    <router-link :to="route" v-if="route">
      <div class="button">
        {{ title }}
      </div>
    </router-link>
  </div>
</template>

<script>

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
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  text-align: center;
  font-size: 1.2em;
}

</style>
