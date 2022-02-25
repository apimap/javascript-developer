<template>
  <div class="footer">
    <VerticalStackLayout>
      <div class="left">
        <p>Apimap.io</p>
        <ul>
          <li><a href="https://github.com/apimap" target="_blank">Contribute</a></li>
          <li><a href="https://github.com/apimap" target="_blank">Report a bug</a></li>
        </ul>
        <p class="small"><a href="http://www.apache.org/licenses/" target="_blank">Apache License, Version 2.0</a></p>
      </div>
      <div class="right">
        <h3>HELP AND SUPPORT</h3>
        <p>{{ support }}</p>
        <MediumButton :target="toTop" title="Scroll Back To Top" />
        <p class="version">Version {{ version }} created {{ created }}</p>
      </div>
    </VerticalStackLayout>
  </div>
</template>

<script>

import MediumButton from "@/components/Navigation/MediumButton";
import { VerticalStackLayout } from "@apimap/layout-core"

export default {
  name: "Footer",
  components: {
    VerticalStackLayout,
    MediumButton
  },
  computed: {
    version () {
      return process.env.VUE_APP_VERSION;
    },
    created () {
      return process.env.VUE_APP_CREATED;
    },
    support() {
      return APIMAP_SUPPORT;
    }
  },
  methods: {
    toTop: function() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};

</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
  line-height: 1.2em;
  font-size: 0.7em;
}

.version{
  padding-top: 3em;
}

.small{
  font-size: 14px;
}

.left {
  width: 10em;
  font-size: 1.4em;
  text-align: left;
  color: #5c5470;
  padding-right: 1em;
}

.right{
  text-align: left;
  padding-left: 1em;
  width: 50em;
  color: #5c5470;
}

.footer{
  font-size: 1em;
  margin-bottom: 4em;
  margin-top: 4em;
}

</style>