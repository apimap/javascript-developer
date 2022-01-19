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

@-webkit-keyframes  pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

@-moz-keyframes  pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

@-ms-keyframes  pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1.0;
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
    opacity: 1.0;
  }
}

.button{
  width: 14em;
  height: 3em;
  text-align: center;
  background-color: #59e67c;
  color: white;
  vertical-align: middle;
  line-height: 3em;
  cursor: pointer;
  font-size: 1.6em;
  -webkit-animation: pulse 1s infinite cubic-bezier(.17,.67,.83,.67);
  -moz-animation: pulse 1s infinite cubic-bezier(.17,.67,.83,.67);
  -ms-animation: pulse 1s infinite cubic-bezier(.17,.67,.83,.67);
  animation: pulse 1s infinite cubic-bezier(.17,.67,.83,.67);
}

img {
  height: 6em;
}

</style>

