<template>
  <div class="form-section">
    <h2>Organization</h2>
    <div class="form-body">
      <div class="form-container">
        <RadioGroup
            v-model="data['architecture layer']"
            :allowCustom="true"
            :options="architectureLayerOptions"
            customPlaceholder="Architecture layer"
            label="Architecture Layer"
            name="architecture-layer"
        ></RadioGroup>
        <RadioGroup
            v-model="data['business unit']"
            :allowCustom="true"
            :options="businessUnitOptions"
            customPlaceholder="Business Unit"
            label="Business Unit"
            name="business-unit"
        ></RadioGroup>
      </div>
    </div>
  </div>
</template>
<script>
// Assets

// Components

// Libs
// noinspection ES6CheckImport
import {RadioGroup} from "@apimap/input-core";

// Data

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
    },
    data: function () {
      return this.form
    }
  }
};
</script>
