<template>
  <div class="workflow-step">
    <div class="header">
      <div class="number">{{ number }}</div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="workflow-step-description">
      <slot/>
    </div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "WorkflowStep",
  props: {
    title: String,
    number: String
  }
};

</script>

<style scoped>

.header {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1em;
}

.header > .number {
  font-size: 1em;
  padding-right: 0.4em;
}

.header > .title {
  font-size: 2em;
}

.workflow-step-description {
  margin-left: 1.5em;
  font-size: 1.3em;
  line-height: 1.8em;
  text-align: left;
}

</style>
