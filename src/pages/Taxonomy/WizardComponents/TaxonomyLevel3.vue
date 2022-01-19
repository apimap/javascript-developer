<template>
  <div class="form-section">
    <h2>Level 2</h2>
    <p>Choose one or multiple categories within your chosen level 1 taxonomy that best fits your application. Once again descriptions of the categories can be found in the <router-link to='/taxonomy' target="_blank">taxonomy descriptions</router-link>.
      Note that if you have selected multiple taxonomies in level one, you must choose at least one category for each taxonomy. </p>
    <div class="form-body">
      <div class="form-description">
        <span v-for="hint in hints" :key="hint" class="description">
          {{ hint }}
        </span>
      </div>
      <div class="form-container">
        <CheckboxGroup
          v-for="parent in taxonomyOptions"
          :key="parent.name"
          :label="parent.name"
          labelSize="small"
          name="level1"
        >
          <CheckboxGroup
            v-for="child in parent.children"
            :key="child.name"
            :label="child.name"
            labelSize="normal"
            name="level1"
          >
            <Checkbox
              v-for="option in child.options"
              :key="option.name"
              :label="option.label"
              :option="option.name"
              :description="option.description"
              v-model="form.classifications"
            />
          </CheckboxGroup>
        </CheckboxGroup>
      </div>
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
    Checkbox,
  },
  computed: {
    taxonomyOptions() {
      const data = this.taxonomyItems
        .map((tax) => {
          return {
            name: tax.attributes.title,
            children: tax.attributes.entities.map((child) => {
              return {
                name: child.attributes.title,
                options: child.attributes.entities.map((el) => {
                  return {
                    label: el.attributes.title,
                    name: el.attributes.urn,
                    description: el.attributes.description,
                  };
                }),
              };
            }),
          };
        })
        .filter((parent) => {
          return parent.children.some((child) => {
            return child.options.length > 0;
          });
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

.form-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2em;
  border-radius: 0.2em;
}

.form-section > .form-body {
  width: 100%;
  box-sizing: border-box;
  display: flex;
}

.form-body > .form-description {
  width: 33%;
  text-align: left;
  padding-left: 3em;
  box-sizing: border-box;
}

.form-body > .form-container {
  width: 67%;
  text-align: left;
  padding-left: 4em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
