<template>
  <div class="option-cloud">
    <h3>{{ heading }}</h3>
    <div v-if="description" class="description">{{ description }}</div>
    <div class="options">
      <slot :value="value" :setValue="setValue"></slot>
      <h3 v-if="allowCustom">or</h3>
      <div v-if="allowCustom" class="custom">
        <Input
            label="None of the above"
            size="large"
            element="systemIdentifier"
            v-model="form[name]"
            description="None of the above options matches, please add a custom entry."
        />
      </div>
    </div>
  </div>
</template>

<script>

import {Input} from "@apimap/input-core";

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
    setValue: function(value){
      this.value = value;
      this.form[this.name]= value;
    }
  },
  components: {
    Input
  },
  data: function() {
    return {
      value: undefined
    };
  },
};

</script>

<style scoped>

.options > h3{
  text-align: center;
}

.custom{
  border: 1px solid var(--box-border-color);
  color: var(--box-text-color);
  padding: 1em;
}

.description{
  margin-bottom: 2em;
}

.option-cloud{
  margin-bottom: 2em;
  margin-top: 2em;
  padding-top: 2em;
}

</style>

