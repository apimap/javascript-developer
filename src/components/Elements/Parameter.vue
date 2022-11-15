<template>
  <div class="parameter">
    <div>{{ name }}</div>
    <div>{{ description }}</div>
    <div>{{ defaultValue }}</div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "Parameter",
  props: {
    description: String,
    name: String,
    defaultValue: String
  },
};

</script>

<style scoped>

.parameter {
  display: grid;
  grid-template-columns: 10em auto 14em;
  border: 1px solid var(--box-border-color);
  align-content: center;
  padding: 0.4em;
}

</style>
