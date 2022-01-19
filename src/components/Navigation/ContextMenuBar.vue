<template>
  <div class="context-menu-bar">
    <slot/>
  </div>
</template>

<script>

import ContextMenuBarItem from "@/components/Navigation/ContextMenuBarItem";

export default {
  name: "ContextMenuBar",
  data: function() {
    return { ContextMenuBarItem };
  }
};
</script>

<style scoped>

.context-menu-bar {
  width: 100%;
  background-color: var(--secondary-background-color);
  color: var(--secondary-color);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1em;
}

.context-menu-bar > div {
  padding-top: 1em;
  padding-bottom: 1em;
}

</style>