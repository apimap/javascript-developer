<template>
  <div class="side-table-of-contents" v-bind:class="{ sticky:isSticky }">
    <slot/>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "SideTableOfContents",
  props: {
    isSticky: Boolean
  },
  data: function () {
    return {};
  }
};
</script>

<style scoped>

.side-table-of-contents {
  width: 100%;
}

.side-table-of-contents > div {
  padding-top: 0.6em;
  padding-bottom: 0.6em;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

</style>
