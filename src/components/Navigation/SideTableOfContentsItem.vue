<template>
  <div class="side-table-of-contents-item button" v-on:click="scroll">
    <span class="text"><img :src="icon" alt="="/> {{ title }}</span>
  </div>
</template>

<script>
import icon from "@/assets/icons/menu-bar-icon.svg";

export default {
  name: "SideTableOfContentsItem",
  props: {
    title: String,
    scroll: Function,
  },
  data: function () {
    return {
      icon,
    };
  },
};
</script>

<style scoped>

.text {
  white-space: nowrap;
  padding-right: 1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
}

</style>
