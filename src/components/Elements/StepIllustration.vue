<template>
  <div class="step-illustration">
    <img :src="image" alt="Step"/>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "StepIllustration",
  props: {
    image: Object
  }
};
</script>

<style scoped>

.step-illustration {
  text-align: center;
  width: 10em;
  height: 10em;
}

</style>

