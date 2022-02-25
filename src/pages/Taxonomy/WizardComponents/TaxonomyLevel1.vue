<template>
  <div class="form-section">
    <h2>Level 1</h2>
    <p>The top level classifications. Choose one or multiple options that best suits the application you are adding to the catalog. For more information on what each option entails, see the full descriptions in the <router-link to='/taxonomy' target="_blank">taxonomy descriptions</router-link>.
    <div>
      <CheckboxGroup name="level1">
        <Checkbox
          v-for="option in taxonomyOptions"
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
      const data = this.items.map((tax) => {
        return {
          label: tax.title,
          name: tax.urn,
          description: tax.description,
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

h2{
  margin-bottom: 0em;
}

p{
  margin-bottom: 4em;
}

</style>