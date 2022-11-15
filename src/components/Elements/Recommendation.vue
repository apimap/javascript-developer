<template>
  <div class="recommendation">
    <div class="content">{{ recommendation }}</div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "Recommendation",
  props: {
    recommendation: String
  },
};
</script>

<style scoped>

.recommendation {
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em 2em;
  background-color: #5c5470;
  text-align: center;
}

.content {
  color: #DBD8E3;
  font-size: 1em;
  font-weight: bold;
  line-height: 1.4em;
}

</style>

