<template>
  <div class="taxonomy">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Taxonomy",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>

.taxonomy{
  text-align: center;
  line-height: 2em;
}

</style>
