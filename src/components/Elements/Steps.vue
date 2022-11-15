<template>
  <div class="steps">
    <slot/>
  </div>
</template>
<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "Steps",
};
</script>
<style scoped>

.steps {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  gap: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
}

</style>

