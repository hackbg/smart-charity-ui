import Vue from 'vue';
import Vuex from 'vuex';

import { fakeCampaigns, fakeCampaignData, fakeBeneficiaries } from './fakeData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    campaigns: {},
    selectedId: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setCampaign(state, payload) {
      state.campaigns = { ...state.campaigns, [payload.id]: payload.data };
    },
    setCampaignBeneficiaries(state, payload) {
      state.campaigns = {
        ...state.campaigns,
        [payload.id]: { ...state.campaigns[payload.id], beneficiaries: payload.beneficiaries },
      };
    },
  },
  actions: {
    async fetchAllCampaigns({ commit }) {
      console.log('fetching all campaigns');
      commit('setLoading', true);
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false);
      commit('setCampaign', {
        id: fakeCampaigns[0].id,
        data: fakeCampaigns[0],
      });
      commit('setCampaign', {
        id: fakeCampaigns[1].id,
        data: fakeCampaigns[1],
      });
    },
    async fetchCampaignData({ commit }, id) {
      console.log('fetching campaign id', id);
      commit('setLoading', true);
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false);
      commit('setCampaign', {
        id: fakeCampaignData.id,
        data: fakeCampaignData,
      });
    },
    async fetchCampaignBeneficiaries({ commit }, id) {
      console.log('fetching beneficiaries for', id);
      commit('setLoading', true);
      await new Promise(resolove => setTimeout(resolove, 250));
      commit('setLoading', false);
      commit('setCampaignBeneficiaries', {
        id,
        beneficiaries: fakeBeneficiaries,
      });
    },
    async create({ commit }, campaign) {
      console.log('creating a campaign', campaign);
      commit('setLoading');
      await new Promise(resolove => setTimeout(resolove, 500));
      commit('setLoading');
      return '3'; // campaign id
    },
    async donate({ commit }, id, value) {
      console.log('making a donation for campaign', id, value);
      commit('setLoading');
      await new Promise(resolove => setTimeout(resolove, 500));
      commit('setLoading');
    },
    async refund({ commit }, id) {
      console.log('claiming refund for campaign', id);
      commit('setLoading');
      await new Promise(resolove => setTimeout(resolove, 500));
      commit('setLoading');
    },
    async claimFunds({ commit }, id) {
      console.log('claiming funds for campaign', id);
      commit('setLoading');
      await new Promise(resolove => setTimeout(resolove, 500));
      commit('setLoading');
    },
  },
  getters: {
    allCampaigns: state => {
      return Object.entries(state.campaigns).flatMap(i => ({ ...i[1], id: i[0] }));
    },
    campaignData: state => id => {
      return state.campaigns[id];
    },
  },
});
