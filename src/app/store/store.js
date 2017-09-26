import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import forms from './modules/forms';

Vue.use(Vuex);

const modules = {
  user,
  forms,
};

export default new Vuex.Store({
  modules,
  strict: true,
});
