<template>
  <div class="form-section">
    <h2>Version</h2>
    <div class="form-body">
      <div class="form-container">
        <Input
          label="Version Identifier"
          size="large"
          v-model="form['api version']"
          description="Version could be anything, not just a number. Note that the version requested here does not need to match your release version, and as provider you are free to determine a versioning scheme that suits you. The version given here must be updated manually by changing the file in your repository when you wish to signal a new version. By changing the versioning you can signal major as well as minor changes in your API to consumers. It is up to you."
        />
        <RadioGroup
          label="Release Status"
          name="release-status"
          :options="releaseStatusOptions"
          v-model="form['release status']"
          :allowCustom="false"
        ></RadioGroup>
      </div>
    </div>
  </div>
</template>
<script>

import { Input, RadioGroup } from "@apimap/input-core";

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
