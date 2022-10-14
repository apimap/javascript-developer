<template>
  <div class="input-group">
    <h3 v-show="label">{{ label }}</h3>
    <div v-for="(value, index) in values" class="inputs">
      <input
          type="text"
          :key="index"
          v-model="value.value"
      />
      <div @click.stop="removeInputField(index)" class="remove button">Remove URL</div>
    </div>
    <div @click.stop="addInputField" class="add-input button" >
      {{ actionLabel }}
    </div>
    <div v-if="description" class="description">{{ description }}</div>
  </div>
</template>

<script>

export default {
  name: "InputGroup",
  props: {
    label: String,
    description: String,
    actionLabel: String,
    value: Array
  },
  methods: {
    addInputField: function () {
      this.values.push({ value: '' })
    },
    removeInputField: function (index) {
      this.values = this.values.filter((_, idx) => idx != index);
    }
  },
  data: function() {
    return {
      values: (this.value === undefined || this.value.length < 1) ? [{ value: '' }] : this.value
    }
  },
  watch:{
    'values': {
      handler(newValue, oldValue) {
        this.$emit('input', newValue.filter((e, idx) => e !== undefined && e.value !== undefined && e.value !== "").map(e=>e.value))
      },
      deep: true
    }
  }
};

</script>

<style scoped>

.inputs {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
}

.description{
  padding: 1em;
  border-radius: 0.2em;
  margin-top: 0.1em;
  border: 1px solid #dbd8e3;
  color: #5c5470;
}

.remove{
  padding: 0.4em;
  border-radius: 0.2em;
  text-align: center;
  font-size: 0.8em;
}

.add-input{
  padding: 0.4em;
  border-radius: 0.2em;
  text-align: center;
  font-size: 0.8em;
}

input {
  border: 2px solid;
  font-size: 1em;
  outline: none;
  padding: 1em;
  background-color: transparent;
  width: calc(100% - 6em);
}

</style>
