<template>
  <div class="step-navigation-container">
    <div v-bind:class="{ sticky:isSticky }">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepNavigationContainer",
  props: {
    isSticky: Boolean
  }
};
</script>

<style scoped>

.step-navigation-container{
  position: relative;
  margin-right: 4em;
}

.sticky{
  position: sticky;
  top: 2em;
  left: 0;
}

</style>

