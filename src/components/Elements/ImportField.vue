<template>
  <div class="drop-field"
       :data-active="active"
       @dragenter.prevent="setActive"
       @dragover.prevent="setActive"
       @dragleave.prevent="setInactive"
       @drop.prevent="onDrop">
    <img :src="documentIcon" height="40px" alt="Drop Zone"/>
    <span v-if="active">{{ hoverText }}</span>
    <span v-else>{{ text }}</span>
  </div>
</template>

<script>

import documentIcon from "@/assets/icons/document-icon.svg";

export default {
  name: "ImportField",
  props: {
    text: String,
    hoverText: String
  },
  data: function() {
    return {
      active: false,
      documentIcon
    };
  },
  methods: {
    setActive: function(){
      this.active = true;
    },
    setInactive: function(){
      this.active = false;
    },
    onDrop: function(file){
      if(file.dataTransfer.files[0] !== undefined){
        file.dataTransfer.files[0].text().then(value => {
          const content = JSON.parse(value);
          if(content['api catalog version'] === "1"){
            this.$emit('file', content);
          }
        });
      }
      this.active = false;
    }
  },
};

</script>

<style scoped>


.drop-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  padding: 1em;
  align-content: center;
  margin-top: 1em;
  color: var(--drop-field-text-color);
  border: 1px dashed var(--drop-field-border-color);
  border-radius: 0.4em;
  text-align: center;
  line-height: 1.5em;
  cursor: copy;
  opacity: 0.5;
}

.drop-field:hover{
  color: var(--drop-field-text-color);
  border: 1px dashed var(--drop-field-hover-border-color);
}

</style>
