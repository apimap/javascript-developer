<template>
  <div class="content-list-item">
    <div class="item" v-on:click="scroll">
      <div v-if="section" class="link">{{ section }} {{ title }}</div>
      <div v-else><img :src="icon" alt="content list"/> {{ title }}</div>
    </div>
    <div class="sub-items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// Assets
import icon from "@/assets/icons/content-list-icon.svg";

// Components

// Libs

// Data

export default {
  name: "TableOfContentsItem",
  props: {
    title: String,
    section: String,
    scroll: Function,
  },
  data: function () {
    return {
      icon,
    };
  }
};
</script>
<style scoped>

.sub-items {
  padding-left: 1em;
}

.content-list-item {
  text-align: left;
}

</style>
