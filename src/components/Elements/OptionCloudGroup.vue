<template>
  <div class="option-cloud-group">
    <h4>{{ heading }}</h4>
    <div v-if="description" class="description">{{ description }}</div>
    <ul class="options" v-show="visible" >
      <li class="option" v-for="option in options" :style="getStyle(option)" v-bind:class="{active: isSelected(option)}" @click.stop="selectOption(option)">
        <img :src="getIcon(option)" /> {{ option.label }}
      </li>
    </ul>
    <div @click.stop="toggleOptions" class="view-options button" v-show="enableToggle">
      <span v-if="this.visible">Hide</span>
      <span v-else>Show Options</span>
    </div>
  </div>
</template>

<script>

import typeSdkIcon from "@/assets/icons/type-sdk-icon.svg";
import typeTopicIcon from "@/assets/icons/type-topic-icon.svg";
import typeRestIcon from "@/assets/icons/type-rest-icon.svg";
import typeUnknownIcon from "@/assets/icons/type-unknown-icon.svg";
import typeSoapIcon from "@/assets/icons/type-soap-icon.svg";

export default {
  name: "OptionCloudGroup",
  props: {
    heading: String,
    description: String,
    options: Array,
    value: Object,
    setValue: Object,
    enableToggle: Boolean
  },
  components: {
  },
  data: function() {
    return {
      visible: !this.enableToggle,
      typeSdkIcon,
      typeUnknownIcon,
      typeTopicIcon,
      typeRestIcon,
      typeSoapIcon
    };
  },
  methods: {
    toggleOptions: function(){
      this.visible = !this.visible;
    },
    isSelected: function(option){
      return option.value === this.value;
    },
    selectOption: function(option){
      this.setValue(option.value);
    },
    getStyle: function(option){
      if(option !== undefined){
        if(option['type'] === 'REST') return "color:#00d4aa;border-color:#00d4aa";
        if(option['type'] === 'SDK') return "color:#ff6600;border-color:#ff6600";
        if(option['type'] === 'KAFKA TOPIC') return "color:#71c837;border-color:#71c837";
        if(option['type'] === 'SOAP') return "color:#ff5555;border-color:#ff5555";
        if(option['type'] === 'BINARY') return "color:#ffd42a;border-color:#ffd42a";
        if(option['type'] !== undefined) return "color:#b3b3b3;border-color:#b3b3b3";
      }

      return "color:var(--link-color);border-color:var(--link-color)";
    },
    getIcon: function(option){
      if(option !== undefined){
          if (option['type'] === 'REST') return typeRestIcon;
          if (option['type'] === 'SDK') return typeSdkIcon;
          if (option['type'] === 'KAFKA TOPIC') return typeTopicIcon;
          if (option['type'] === 'SOAP') return typeSoapIcon;
      }

      return typeUnknownIcon;
    }
  }
};

</script>

<style scoped>

.view-options{
  padding: 0.4em;
  border-radius: 0.2em;
  text-align: center;
  font-size: 0.8em;
}

.active{
  border-style: solid !important;
  font-weight: bold;
}

.description{
  display: inline-block;
  margin-bottom: 1em;
}

.options{
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 1em 0 1em;
}

.option{
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 0.6em;
  border: 1px dashed black;
  padding: 0.2em 0.6em;
  border-radius: 0.4em;
  cursor: pointer;
}

.option-cloud-group{
  border: 1px solid var(--box-border-color);
  color: var(--box-text-color);
  padding: 0 1em 1em 1em;
}

img{
  vertical-align: middle;
}

</style>
