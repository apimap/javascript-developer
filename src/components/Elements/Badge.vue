<template>
  <div class="badge">
    <div class="content">{{ value }}</div>
  </div>
</template>
<script>

export default {
  name: "Badge",
  props: {
    value: String
  },
};
</script>
<style scoped>

.badge{
  font-size: 1em;
  margin-right: 0.4em;
  height: 2em;
  width: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 1em;
  font-weight: bold;
}

</style>

