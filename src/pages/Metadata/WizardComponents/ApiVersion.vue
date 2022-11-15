<template>
  <div class="form-section">
    <h2>Version</h2>
    <div class="form-body">
      <div class="form-container">
        <Input
            v-model="form['api version']"
            description="Version could be anything, not just a number. Note that the version requested here does not need to match your release version, and as provider you are free to determine a versioning scheme that suits you. The version given here must be updated manually by changing the file in your repository when you wish to signal a new version. By changing the versioning you can signal major as well as minor changes in your API to consumers. It is up to you."
            label="Version Identifier"
            size="large"
        />
        <RadioGroup
            v-model="form['release status']"
            :allowCustom="false"
            :options="releaseStatusOptions"
            label="Release Status"
            name="release-status"
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
import {Input, RadioGroup} from "@apimap/input-core";

// Data

export default {
  name: "ApiVersion",
  components: {
    Input,
    RadioGroup,
  },
  props: {
    form: Object
  },
  computed: {
    releaseStatusOptions: function () {
      return this.$store.getters.metadataOptions['apiVersionOptions'] ? this.$store.getters.metadataOptions['apiVersionOptions']['releaseStatusOptions'] : [];
    }
  }
};
</script>
