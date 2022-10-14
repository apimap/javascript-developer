<template>
  <div class="parameter-group">
    <h4>{{ heading }}</h4>
    <div class="table">
      <div>Name</div>
      <div>Description</div>
      <div>Default Values</div>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: "ParameterGroup",
  props: {
    heading: String,
  },
};

</script>

<style scoped>

.parameter-group{
  margin-top: 2em;
}

.table {
  display: grid;
  grid-template-columns: 10em auto 14em;
  border: 1px solid var(--box-border-color);
  align-content: center;
  font-weight: bold;
  padding: 0.4em;
}

.table > div > div {
  padding: 8px 4px;
  border-left: 1px solid var(--box-border-color);
  border-bottom: 1px solid var(--box-border-color);
}

</style>
