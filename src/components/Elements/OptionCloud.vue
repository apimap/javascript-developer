<template>
  <div class="option-cloud">
    <h3>{{ heading }}</h3>
    <div v-if="description" class="description">{{ description }}</div>
    <div class="options">
      <slot :setValue="setValue" :value="data[name]"></slot>
      <h3 v-if="allowCustom">or</h3>
      <div v-if="allowCustom" class="custom">
        <Input
            v-model="data[name]"
            description="None of the above options matches, please add a custom entry."
            element="systemIdentifier"
            label="None of the above"
            size="large"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Assets

// Components

// Libs
// noinspection ES6CheckImport
import {Input} from "@apimap/input-core";

// Data

export default {
  name: "OptionCloud",
  props: {
    heading: String,
    name: String,
    description: String,
    form: Object,
    allowCustom: Boolean
  },
  methods: {
    setValue: function (value) {
      this.value = value;
      this.form[this.name] = value;
    }
  },
  computed: {
    data: function () {
      return this.form
    }
  },
  components: {
    Input
  },
  data: function () {
    return {
      value: undefined
    };
  },
};

</script>

<style scoped>

.options > h3 {
  text-align: center;
}

.custom {
  border: 1px solid var(--box-border-color);
  color: var(--box-text-color);
  padding: 1em;
}

.description {
  margin-bottom: 2em;
}

.option-cloud {
  margin-bottom: 2em;
  margin-top: 2em;
  padding-top: 2em;
}

</style>

