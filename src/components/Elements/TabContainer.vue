<template>
  <div class="tab-container">
    <div class="titles">
      <div class="title button" v-for="title in titles" :key="title" @click="displayTab(title)" v-bind:class="{active: isTabActive(title)}">
        {{ title }}
      </div>
    </div>
    <div class="content">
      <div v-for="title in titles" :key="title" v-if="isTabActive(title)" >
        <slot :name="title"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabContainer",
  props: {
    titles: Array
  },
  methods: {
    displayTab: function (refName) {
      this.activeTabName = refName;
    },
    isTabActive: function(refName) {
      if(!this.activeTabName){
        this.activeTabName = refName;
      }

      return refName === this.activeTabName;
    }
  },
  data: function() {
    return {
      activeTabName: ""
    };
  }
};
</script>

<style scoped>

.title {
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  padding-left: 1em;
  padding-right: 1em;
  font-weight: bolder;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
}

.titles {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: left;
  gap: 1em;
}

.content{
  border: 0.2em solid #5c5470;
  color: #5c5470;
}

</style>
