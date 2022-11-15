<template>
  <div class="input-group">
    <h3 v-show="label">{{ label }}</h3>
    <div v-for="(val, index) in data" class="inputs">
      <input
          :key="index"
          :value="val"
          type="text"
          @input="updatedValue(index)"
      />
      <div class="dangerous-button" @click.stop="removeInputField(index)">Remove URL</div>
    </div>
    <div class="add-input button" @click.stop="addInputField">
      {{ actionLabel }}
    </div>
    <div v-if="description" class="description">{{ description }}</div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "InputGroup",
  props: {
    label: String,
    description: String,
    actionLabel: String,
    value: {
      type: Array,
      default: []
    }
  },
  computed: {
    data: function () {
      return (this.value !== undefined) ? this.value : [];
    }
  },
  methods: {
    updatedValue: function (index) {
      this.value[index] = event.target.value
      this.$emit('input', this.value.filter((e) => e !== undefined));
    },
    addInputField: function () {
      this.value.push('');
      this.$emit('input', this.value.filter((e) => e !== undefined));
    },
    removeInputField: function (index) {
      this.$emit('input', this.value.filter((_, idx) => idx !== index).filter((e) => e !== undefined))
    }
  }
};

</script>

<style scoped>

.inputs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  align-content: center;
}

.description {
  padding: 1em;
  border-radius: 0.2em;
  margin-top: 0.1em;
  border: 1px solid #dbd8e3;
  color: #5c5470;
}

.add-input {
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
