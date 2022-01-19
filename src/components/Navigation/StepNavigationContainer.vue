<template>
  <div class="step-navigation-container" v-bind:class="{ sticky:isSticky }">
    <slot/>
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
