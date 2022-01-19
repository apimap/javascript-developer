<template>
  <div class="recommendation">
    <div class="content">{{ recommendation }}</div>
  </div>
</template>
<script>

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
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #5c5470;
  text-align: center;
}

.content {
  color: #DBD8E3;
  font-size: 1em;
  font-weight: lighter;
  line-height: 1.4em;
}

</style>

