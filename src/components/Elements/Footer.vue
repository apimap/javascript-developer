<template>
  <div class="footer">
    <VerticalStackLayout>
      <div class="left">
        <p>Apimap.io</p>
        <p class="small">http://github.com/apimap</p>
        <a href="https://github.com/apimap" class="button" target="_blank">Contribute</a>
        <p class="small">Licensed under Apache 2.0</p>
      </div>
      <div class="right">
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