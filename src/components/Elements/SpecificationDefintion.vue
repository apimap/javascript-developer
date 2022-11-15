<template>
  <div class="specification-definition">
    <div class="specification">
      <h4 :id="id">{{ title }}</h4>
      {{ description }}
    </div>
    <ul class="requirements">
      <li v-if="dataType"><strong>Data Type:</strong> {{ dataType }}</li>
      <li v-if="required"><strong>Required:</strong> {{ required === true ? "Yes" : "No" }}</li>
      <li v-if="example"><strong>Example:</strong> {{ example }}</li>
    </ul>
    <div v-if="allowedValues" class="allowed-values">
      <p v-if="allowedValues">Allowed Values</p>
      <table>
        <thead>
        <tr>
          <th scope="col">Value</th>
          <th scope="col">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="el in allowedValues" :key="el.label" class="validContent">
          <td>{{ el.label }}</td>
          <td>{{ el.description }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// Assets

// Components

// Libs

// Data

export default {
  name: "SpecificationDefinition",
  components: {},
  props: {
    id: String,
    title: String,
    description: String,
    allowedValues: Array,
    dataType: String,
    example: String,
    required: Boolean
  },
  data: function () {
    return {};
  },
};

</script>

<style scoped>

ul.requirements {
  list-style-type: none;
  padding: 0;
}

ul.requirements > li {
  padding-top: 0.4em;
  padding-bottom: 0.4em;
}

.specification-definition {
  margin-bottom: 4em;
}

.allowed-values {
  padding-top: 1em;
}

ul {
  list-style-type: none;
}

</style>
