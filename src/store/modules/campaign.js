import { fakeCampaignData, fakeBeneficiaries } from '../fakeData';

export default {
  state: () => ({ data: {} }),
  mutations: {
    setCampaignData(state, payload) {
      state.data = { ...payload };
    },
    setCampaignBeneficiaries(state, payload) {
      state.data = {
        ...state.data,
        beneficiaries: [...payload],
      };
    },
  },
  actions: {
    async fetchCampaignData({ commit }, id) {
      console.log('fetching campaign id', id);
      commit('setLoading', true, { root: true });
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false, { root: true });
      commit('setCampaignData', fakeCampaignData);
    },
    async fetchCampaignBeneficiaries({ commit }) {
      console.log('fetching beneficiaries');
      commit('setLoading', true, { root: true });
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false, { root: true });
      commit('setCampaignBeneficiaries', fakeBeneficiaries);
    },
    // donate
    // create
    // ...
  },
  getters: {
    // daysLeft: state => ...
  },
  modules: {},
};
