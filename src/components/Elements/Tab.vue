<template>
  <div class="tab">
    <slot/>
  </div>
</template>

<script>

export default {
  name: "Tab",
  props: {}
};
</script>

<style scoped>

.tab {
  padding: 0.4em;
}

</style>
