import Vuex from "vuex";
import Vue from "vue";

import api from '@/store/api/store.js';
import forms from '@/store/forms/store.js';
import content from '@/store/content/store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    api,
    forms,
    content
  }
});
