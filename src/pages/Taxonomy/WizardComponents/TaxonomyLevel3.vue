<template>
  <div class="form-section">
    <h2>Level 3</h2>
    <p>Choose one or multiple classifications within your chosen <b>"Level 2"</b> classification that best fits your
      application.</p>
    <div class="level-container">
      <CheckboxGroup
          v-for="parent in taxonomyOptions"
          :key="parent.name"
          :label="parent.name"
          labelSize="normal"
          name="level2"
      >
        <Checkbox
            v-for="option in parent.entities"
            :key="option.name"
            v-model="form.classifications"
            :description="option.description"
            :label="option.label"
            :option="option.name"
        />
      </CheckboxGroup>
    </div>
  </div>
</template>
<script>
// Assets

// Components

// Libs
// noinspection ES6CheckImport
import {Checkbox, CheckboxGroup} from "@apimap/input-core";

// Data

export default {
  name: "Level3",
  props: {
    items: Array,
    form: Object
  },
  components: {
    CheckboxGroup,
    Checkbox,
  },
  computed: {
    taxonomyOptions() {
      return this.items.map((tax) => {
        return {
          name: tax.attributes.title,
          entities: tax.attributes.entities.map((child) => {
            return {
              label: child.attributes.title,
              name: child.attributes.urn,
              description: child.attributes.description,
            };
          }),
        };
      });
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

p {
  margin-bottom: 4em;
}

</style>
