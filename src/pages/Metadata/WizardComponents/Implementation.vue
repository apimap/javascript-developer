<template>
  <div class="form-section">
    <h2>Implementation</h2>
    <div class="form-body">
      <div class="form-container">
        <OptionCloud
            :allow-custom=true
            :form="data"
            description="Describe how your API resources are designed and implemented. If your API is code native and is to be implemented into other code, select one of the options in the 'implementation' section. If your API is to be used over a network please select one of the 'specification' options. Example: If your REST API is designed in accordance with JSON:API select 'JSON:API'"
            heading="Interface Specification"
            name="interface specification"
        >
          <template v-slot="{value, setValue}">
            <OptionCloudGroup
                :enableToggle=true
                :options="interfaceSpecificationImplementationOptions"
                :setValue="setValue"
                :value="value"
                description="Select the language the SDK has been developed with. This will tell other developers what language to expect and thereby if the API is usable."
                heading="Implementation Language"/>
            <h3>or</h3>
            <OptionCloudGroup
                :enableToggle=true
                :options="interfaceSpecificationSpecificationOptions"
                :setValue="setValue"
                :value="value"
                description="Select the specification that the API uses to integrate with other systems. If the API supports multiple specifications please select the preferred option."
                heading="Specification Standard"/>
          </template>
          <h3>or</h3>
        </OptionCloud>
        <OptionCloud
            :allow-custom=true
            :form="data"
            description="Describes how the functionality in your API is communicated to the users. If your API is code native and is to be implemented into other code, select 'SDK'. Example: Your JSON API is documented and defined using Open API (Swaggerdoc) and you select 'OpenApi Specification' as the interface description language."
            heading="Interface Description Language"
            name="interface description language"
        >
          <template v-slot="{value, setValue}">
            <OptionCloudGroup
                :enableToggle=false
                :options="interfaceDescriptionLanguageOptions"
                :setValue="setValue"
                :value="value"
                heading="Specification Language"/>
          </template>
        </OptionCloud>
      </div>
    </div>
  </div>
</template>

<script>
// Assets

// Components
import OptionCloud from "@/components/Elements/OptionCloud";
import OptionCloudGroup from "@/components/Elements/OptionCloudGroup";

// Libs

// Data

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
    },
    data: function () {
      return this.form;
    }
  }
};
</script>
