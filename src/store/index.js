import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/store/modules/app';
import list from '@/store/modules/list';
import campaign from '@/store/modules/campaign';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    list,
    campaign,
  },
});
