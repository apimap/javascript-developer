<template>
  <div class="form-section">
    <h2>API</h2>
    <div class="form-body">
      <div class="form-container">
        <Input
            v-model="data['name']"
            description="A unique name that describes the functionality of your api in just a couple of words. Remember that this is the first description of your API that the user see and that it must convey the correct information."
            element="apiName"
            label="Name"
            size="large"
        />
        <MultiLineInput
            v-model="data['description']"
            description="A short description of the functionality provided by the API"
            element="description"
            label="Description"
            size="large"
        />
        <RadioGroup
            v-model="data['visibility']"
            :allowCustom="false"
            :options="visibilityOptions"
            customPlaceholder="Visibility"
            label="Visibility"
            name="visibility"
        ></RadioGroup>
        <Input
            v-model="data['system identifier']"
            description="Many APIs are developed in context of a system. This identifier is used to define this affiliation."
            element="systemIdentifier"
            label="System Identifier"
            size="large"
        />
        <InputGroup
            v-model="data['documentation']"
            action-label="Add Additional URL"
            description="Add URLs to the API documentation. This might be OpenAPI Specifications, wiki, confluence pages etc."
            label="Documentation Locations"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Assets

// Components
import InputGroup from "@/components/Elements/InputGroup";

// Libs

// noinspection ES6CheckImport
import {Input, MultiLineInput, RadioGroup} from "@apimap/input-core";

// Data

export default {
  name: "ApiName",
  components: {
    InputGroup,
    Input,
    RadioGroup,
    MultiLineInput
  },
  props: {
    form: Object
  },
  computed: {
    visibilityOptions: function () {
      return this.$store.getters.metadataOptions['apiOptions'] ? this.$store.getters.metadataOptions['apiOptions']['visibilityOptions'] : [];
    },
    data: function () {
      return this.form
    }
  }
};
</script>