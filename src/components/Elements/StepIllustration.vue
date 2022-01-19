<template>
  <div class="step-illustration">
    <img :src="image" />
  </div>
</template>

<script>

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

