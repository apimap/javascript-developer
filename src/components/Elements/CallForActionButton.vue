<template>
  <div class="call-for-action-button">
    <router-link :to="target">
      <div class="button">
        {{ title }}
      </div>
    </router-link>
  </div>
</template>
<script>

export default {
  name: "CallForActionButton",
  props: {
    title: String,
    target: String
  }
};
</script>
<style scoped>

.call-for-action-button{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1em;
  align-items: center;
}

.button{
  width: 10em;
  text-align: center;
}

</style>

