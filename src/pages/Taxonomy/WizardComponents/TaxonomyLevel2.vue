<template>
  <div class="form-section">
    <h2>Level 2</h2>
    <p>Choose one or multiple categories within your chosen level 1 taxonomy that best fits your application. Once again descriptions of the categories can be found in the <router-link to='/taxonomy' target="_blank">taxonomy descriptions</router-link>.
      Note that if you have selected multiple taxonomies in level one, you must choose at least one category for each taxonomy. </p>
    <div class="level-container">
      <CheckboxGroup
        v-for="parent in taxonomyOptions"
        :key="parent.name"
        :label="parent.name"
        labelSize="normal"
        name="level1"
      >
        <Checkbox
          v-for="option in parent.options"
          :key="option.name"
          :label="option.label"
          :option="option.name"
          :description="option.description"
          v-model="form.classifications"
        />
      </CheckboxGroup>
    </div>
  </div>
</template>
<script>
import { CheckboxGroup, Checkbox } from "@apimap/input-core";

export default {
  name: "Level2",
  props: { taxonomyItems: Array, form: Object },
  components: {
    CheckboxGroup,
    Checkbox
  },
  computed: {
    taxonomyOptions() {
      const data = this.taxonomyItems.map((tax) => {
        return {
          name: tax.attributes.title,
          options: tax.attributes.entities.map((child) => {
            return {
              label: child.attributes.title,
              name: child.attributes.urn,
              description: child.attributes.description,
            };
          }),
        };
      });
      return data;
    },
  },
};
</script>
<style scoped>


.form-section > p {
  line-height: 1.2em;
}

.level-container {
  flex-direction: row;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-self: flex-start;
  align-items: flex-start;
}

.level-container > div {
  min-width: 20em;
  margin-right: 2em;
}

h2{
  margin-bottom: 0em;
}

p{
  margin-bottom: 4em;
}

</style>
