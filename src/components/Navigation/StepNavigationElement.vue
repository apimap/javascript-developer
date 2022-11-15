<template>
  <div class="step-navigation-element button" v-bind:class="{ disabled: disabled }" @click="triggerCallback(reference)">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "StepNavigationElement",
  props: {
    title: String,
    description: String,
    target: Function,
    reference: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggerCallback: function (reference) {
      if (!this.disabled) this.target(reference)
    }
  }
};
</script>

<style scoped>

.step-navigation-element {
  margin-bottom: 1em;
  border-radius: 0.2em;
  padding: 0.1em 0.4em;
}

</style>


