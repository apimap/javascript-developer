<template>
  <div class="form-section">
    <h2>Organization</h2>
    <div class="form-body">
      <div class="form-container">
        <RadioGroup
          label="Architecture Layer"
          name="architecture-layer"
          :options="architectureLayerOptions"
          v-model="form['architecture layer']"
          :allowCustom="true"
          customPlaceholder="Architecture layer"
        ></RadioGroup>
        <RadioGroup
          label="Business Unit"
          name="business-unit"
          :options="businessUnitOptions"
          v-model="form['business unit']"
          :allowCustom="true"
          customPlaceholder="Business Unit"
        ></RadioGroup>
      </div>
    </div>
  </div>
</template>
<script>

import { RadioGroup } from "@apimap/input-core";

export default {
  name: "Organization",
  components: {
    RadioGroup,
  },
  props: {
    form: Object,
    custom: Object
  },
  computed: {
    architectureLayerOptions: function () {
      return this.$store.getters.metadataOptions['organizationOptions'] ? this.$store.getters.metadataOptions['organizationOptions']['architectureLayerOptions'] : [];
    },
    businessUnitOptions: function () {
      return this.$store.getters.metadataOptions['organizationOptions'] ? this.$store.getters.metadataOptions['organizationOptions']['businessUnitOptions'] : [];
    }
  }
};
</script>
