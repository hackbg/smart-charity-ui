import { fakeCampaigns } from '../fakeData';

export default {
  state: () => ({ campaigns: [] }),
  mutations: {
    setAllCampaigns(state, data) {
      state.campaigns = [...data];
    },
  },
  actions: {
    async fetchAllCampaigns({ commit }) {
      console.log('fetching all campaigns');
      commit('setLoading', true, { root: true });
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false, { root: true });
      commit('setAllCampaigns', fakeCampaigns);
    },
  },
  getters: {},
  modules: {},
};
