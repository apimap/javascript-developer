<template>
  <div class="badge">
    <div class="content">{{ value }}</div>
  </div>
</template>
<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "Badge",
  props: {
    value: String
  },
};
</script>
<style scoped>

.badge {
  font-size: 1em;
  margin-right: 0.4em;
  height: 2em;
  width: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  font-weight: bold;
  margin-top: 0.2em;
}

</style>

