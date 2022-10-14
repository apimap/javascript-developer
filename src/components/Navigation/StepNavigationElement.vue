<template>
  <div class="step-navigation-element button" @click="triggerCallback(reference)" v-bind:class="{ disabled: disabled }">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
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
      if(!this.disabled) this.target(reference)
    }
  }
};
</script>

<style scoped>

.step-navigation-element{
  max-width: 16em;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  padding-left: 0.4em;
  padding-right: 0.4em;
}

</style>


