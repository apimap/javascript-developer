<template>
  <div class="form-section">
    <h2>API</h2>
    <div class="form-body">
      <div class="form-container">
        <Input
          label="Name"
          size="large"
          element="apiName"
          v-model="data['name']"
          description="A unique name that describes the functionality of your api in just a couple of words. Remember that this is the first description of your API that the user see and that it must convey the correct information."
        />
        <MultiLineInput
            label="Description"
            size="large"
            element="description"
            v-model="data['description']"
            description="A short description of the functionality provided by the API"
        />
        <RadioGroup
          label="Visibility"
          name="visibility"
          :options="visibilityOptions"
          v-model="data['visibility']"
          :allowCustom="false"
          customPlaceholder="Visibility"
        ></RadioGroup>
        <Input
            label="System Identifier"
            size="large"
            element="systemIdentifier"
            v-model="data['system identifier']"
            description="Many APIs are developed in context of a system. This identifier is used to define this affiliation."
        />
        <InputGroup
            label="Documentation Locations"
            description="Add URLs to the API documentation. This might be OpenAPI Specifications, wiki, confluence pages etc."
            action-label="Add Additional URL"
            v-model="data['documentation']"
        />
      </div>
    </div>
  </div>
</template>

<script>

import { RadioGroup, Input, MultiLineInput } from "@apimap/input-core";
import InputGroup from "@/components/Elements/InputGroup";

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
    data: function(){
      return this.form
    }
  }
};
</script>