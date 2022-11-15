<template>
  <div class="guide">
    <div class="title"><h1>{{ title }}</h1></div>
    <div class="steps">
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
  name: "Guide",
  props: {
    title: String
  },
};
</script>
<style scoped>

.guide {
  width: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
}

.title {
  height: 3em;
}

</style>

