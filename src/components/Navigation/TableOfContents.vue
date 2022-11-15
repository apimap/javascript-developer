<template>
  <div class="table-of-contents">
    <h2>Table Of Content</h2>
    <slot></slot>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "TableOfContents",
  props: {}
};
</script>

<style scoped>

.table-of-contents {
  line-height: 1.4em;
  text-align: left;
}

p {
  margin-bottom: 2em;
}

</style>
