<template>
  <div class="guide-step">
    <div class="header">
      <Badge :value="number" />
      <div class="title"><h1>{{ title }}</h1></div>
    </div>
    <div class="guide-step-description">
      <slot/>
    </div>
  </div>
</template>

<script>

import Badge from "@/components/Elements/Badge";

export default {
  name: "GuideStep",
  props: {
    title: String,
    number: String
  },
  components: {
    Badge
  }
};

</script>

<style scoped>

.header {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
}

.guide-step-description {
  margin-left: 1.5em;
  font-size: 1.3em;
  line-height: 1.8em;
  text-align: left;
  margin-top: 1em;
  margin-bottom: 2em;
}

</style>
