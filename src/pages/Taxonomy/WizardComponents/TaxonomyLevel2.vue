<template>
  <div class="form-section">
    <h2>Level 2</h2>
    <p>Choose one or multiple classifications within your chosen <b>"Level 1"</b> classification that best fits your application.</p>
    <div class="level-container">
      <CheckboxGroup
        v-for="parent in taxonomyOptions"
        :key="parent.name"
        :label="parent.name"
        labelSize="normal"
        name="level1"
      >
        <Checkbox
          v-for="option in parent.entities"
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
  props: { 
    items: Array,
    form: Object 
  },
  components: {
    CheckboxGroup,
    Checkbox
  },
  computed: {
    taxonomyOptions() {
      const data = this.items.map((tax) => {
        return {
          name: tax.title,
          entities: tax.entities.map((child) => {
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
