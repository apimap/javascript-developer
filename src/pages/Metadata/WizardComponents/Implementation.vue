<template>
  <div class="form-section">
    <h2>Implementation</h2>
    <div class="form-body">
      <div class="form-container">
        <DoubleSelect
          name="interface-specification"
          label="Interface Specification"
          v-model="form['interface specification']"
          :allowCustom="true"
          customPlaceholder="Interface Specification"
          :options1="interfaceSpecificationImplementationOptions"
          :options2="interfaceSpecificationSpecificationOptions"
          description="Describe how your API resources are designed and implemented. If your API is code native and is to be implemented into other code, select one of the options in the 'implementation' section. If your API is to be used over a network please select one of the 'specification' options. Example: If your REST API is designed in accordance with JSON:API select 'JSON:API'"
        />
        <Select
          name="interface-description-language"
          label="Interface Description Language"
          v-model="form['interface description language']"
          :allowCustom="true"
          customPlaceholder="Interface Description Language"
          :options="interfaceDescriptionLanguageOptions"
          description="Describes how the functionality in your API is conveyed to the users. If your API is code native and is to be implemented into other code, select 'SDK'. Example: Your JSON API is documented and defined using Open API (Swaggerdoc) and you select 'OpenApi Specification' as the interface description language."
        />
      </div>
    </div>
  </div>
</template>
<script>

import { DoubleSelect, Select } from "@apimap/input-core";

export default {
  name: "Implementation",
  components: {
    Select,
    DoubleSelect
  },
  props: {
    form: Object
  },
  computed: {
    interfaceSpecificationImplementationOptions: function () {
      return this.$store.getters.metadataOptions['implementationDetailsOptions'] ? this.$store.getters.metadataOptions['implementationDetailsOptions']['interfaceSpecificationImplementationOptions'] : [];
    },
    interfaceSpecificationSpecificationOptions: function () {
      return this.$store.getters.metadataOptions['implementationDetailsOptions'] ? this.$store.getters.metadataOptions['implementationDetailsOptions']['interfaceSpecificationSpecificationOptions'] : [];
    },
    interfaceDescriptionLanguageOptions: function () {
      return this.$store.getters.metadataOptions['implementationDetailsOptions'] ? this.$store.getters.metadataOptions['implementationDetailsOptions']['interfaceDescriptionLanguageOptions'] : [];
    }
  }
};
</script>
