<template>
  <div class="form-section">
    <h2>Implementation</h2>
    <div class="form-body">
      <div class="form-container">
        <OptionCloud
            :form="form"
            heading="Interface Specification"
            name="interface specification"
            allow-custom=true
            description="Describe how your API resources are designed and implemented. If your API is code native and is to be implemented into other code, select one of the options in the 'implementation' section. If your API is to be used over a network please select one of the 'specification' options. Example: If your REST API is designed in accordance with JSON:API select 'JSON:API'"
        >
          <template v-slot="{value, setValue}">
            <OptionCloudGroup
                heading="Implementation Language"
                :value="value"
                :setValue="setValue"
                :enableToggle=true
                description="Select the language the SDK has been developed with. This will tell other developers what language to expect and thereby if the API is usable."
                :options="interfaceSpecificationImplementationOptions" />
            <h3>or</h3>
            <OptionCloudGroup
              heading="Specification Standard"
              :value="value"
              :setValue="setValue"
              :enableToggle=true
              description="Select the specification that the API uses to integrate with other systems. If the API supports multiple specifications please select the preferred option."
              :options="interfaceSpecificationSpecificationOptions" />
          </template>
          <h3>or</h3>
        </OptionCloud>
        <OptionCloud
            :form="form"
            allow-custom=true
            heading="Interface Description Language"
            name="interface description language"
            description="Describes how the functionality in your API is communicated to the users. If your API is code native and is to be implemented into other code, select 'SDK'. Example: Your JSON API is documented and defined using Open API (Swaggerdoc) and you select 'OpenApi Specification' as the interface description language."
        >
          <template v-slot="{value, setValue}">
            <OptionCloudGroup
              :value="value"
              :setValue="setValue"
              heading="Specification Language"
              :options="interfaceDescriptionLanguageOptions"
              :enableToggle=false />
          </template>
        </OptionCloud>
      </div>
    </div>
  </div>
</template>
<script>

import OptionCloud from "@/components/Elements/OptionCloud";
import OptionCloudGroup from "@/components/Elements/OptionCloudGroup";

export default {
  name: "Implementation",
  components: {
    OptionCloudGroup,
    OptionCloud
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
