<template>
  <div class="form-section">
    <h2>API</h2>
    <div class="form-body">
      <div class="form-container">
        <Input
          label="Name"
          size="large"
          element="apiName"
          v-model="form['name']"
          description="A unique name that describes the functionality of your api in just a couple of words. Remember that this is the first description of your API that the user see and that it must convey the correct information."
        />
        <MultiLineInput
            label="Description"
            size="large"
            element="description"
            v-model="form['description']"
            description="A short description of the functionality provided by the API"
        />
        <RadioGroup
          label="Visibility"
          name="visibility"
          :options="visibilityOptions"
          v-model="form['visibility']"
          :allowCustom="false"
          customPlaceholder="Visibility"
        ></RadioGroup>
        <Input
            label="System Identifier"
            size="large"
            element="systemIdentifier"
            v-model="form['system identifier']"
            description="Many APIs are developed in context of a system. This identifier is used to define this affiliation."
        />
        <Input
            label="Documentation"
            size="large"
            element="documentation"
            v-model="form['documentation']"
            description="URL to the primary API documentation location. E.g swagger doc if used or README.md."
        />
      </div>
    </div>
  </div>
</template>

<script>

import { RadioGroup, Input, MultiLineInput } from "@apimap/input-core";

export default {
  name: "ApiName",
  components: {
    Input,
    RadioGroup,
    MultiLineInput
  },
  props: { form: Object },
  methods: {
    updateStore() {
      this.$store.dispatch("setEditorContent", this.form);
    },
  },
  computed: {
    visibilityOptions: function () {
      return this.$store.getters.metadataOptions['apiOptions'] ? this.$store.getters.metadataOptions['apiOptions']['visibilityOptions'] : [];
    }
  }
};
</script>