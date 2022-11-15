<template>
  <div class="form-section">
    <h2>Level 1</h2>
    <p>The top level classifications. Choose one or multiple options that best suits the application you are adding to
      the catalog. For more information on what each option entails, see the full descriptions in the
      <router-link target="_blank" to='/taxonomy'>taxonomy descriptions</router-link>
      .
    <div>
      <CheckboxGroup name="level1">
        <Checkbox
            v-for="option in taxonomyOptions"
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
  name: "Level1",
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
          label: tax.title,
          name: tax.urn,
          description: tax.description,
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

h2 {
  margin-bottom: 0;
}

p {
  margin-bottom: 4em;
}

</style>