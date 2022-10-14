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
        <p class="version">Version {{ version }} created {{ created }}</p>
      </div>
      <div class="right">
        <h3>HELP AND SUPPORT</h3>
        <p>{{ support }}</p>
        <h3>API CONSUMER</h3>
        <p>Find APIs using the portal <a :href="portalUrl">{{ portalUrl }}</a> </p>
        <MediumButton :target="toTop" title="Scroll Back To Top" />
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
    },
    portalUrl() {
      return APIMAP_PORTAL_URL;
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
  padding-top: 1em;
  font-size: 0.7em;
}

.small{
  font-size: 14px;
}

.left {
  width: 10em;
  text-align: left;
  padding-right: 1em;
}

.right{
  text-align: left;
  padding-left: 1em;
  width: 50em;
}

.footer{
  margin-bottom: 4em;
  margin-top: 4em;
}

</style>