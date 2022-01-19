<template>
  <div class="form-section">
    <h2>Taxonomy</h2>
    <p>Select the taxonomy you want to categorize your functionality according to. Your API can only be categorized using one taxonomy and all sub-levels will be according to this.</p>
    <div>
      <RadioGroup
        label=""
        name="taxonomy"
        :options="taxonomyOptions"
        v-model="form.taxonomy"
        :allowCustom="false"
      />
    </div>
  </div>
</template>
<script>

import { RadioGroup } from "@apimap/input-core"

export default {
  name: "Taxonomy",
  props: {
    taxonomy: Array,
    form: Object
  },
  components: {
    RadioGroup,
  },
  data: function() {
    return {
      hints: [
        "Taxonomy (general) is the practice and science of classification of things or concepts, including the principles that underlie such classification",
      ],
    };
  },
  computed: {
    taxonomyOptions() {
      return this.taxonomy.map((tax) => {
        return { label: tax.attributes.name, value: tax.id, description: tax.attributes.description };
      });
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