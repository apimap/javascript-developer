<template>
  <div class="guide-recommendation">
    <div class="recommendation">{{ recommendation }}</div>
  </div>
</template>
<script>

export default {
  name: "GuideRecommendation",
  props: {
    recommendation: String
  },
};
</script>
<style scoped>

.guide-recommendation{
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #5c5470;
  font-weight: bold;
}

.recommendation{
  color: #DBD8E3;
  font-size: 1em;
  font-weight: lighter;
  line-height: 1.4em;
  height: 1.4em;
  padding-left: 1em;
  padding-right: 1em;
}

</style>

