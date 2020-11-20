<template>
  <div class="box">
    <div class="is-flex is-justify-content-space-between">
      <h1 class="title">{{ data.title }}</h1>
      <b-button type="is-info">
        <b-icon icon="donate" />
        <strong>Donate</strong>
      </b-button>
    </div>

    <div class="py-2">
      <colored-progress :value="data.completedPercent" />
    </div>

    <nav class="level pt-4">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="coins" />Target</p>
          <p class="title">{{ data.target }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="users" />Donors</p>
          <p class="title">{{ data.donors }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="calendar-day" />Days left</p>
          <p class="title">{{ data.daysLeft }}</p>
        </div>
      </div>
    </nav>

    <b-tabs>
      <b-tab-item label="Story">
        <div class="content">
          {{ data.story }}
        </div>
      </b-tab-item>
      <b-tab-item label="Beneficiaries">
        <b-message v-if="!data.isFulfilled" type="is-info">
          Beneficiaries will be able to claim the amount of funds once the campaign is fulfilled.
        </b-message>
        <beneficiary-table />
      </b-tab-item>
      <b-tab-item label="Author">
        <user-address :address="data.author" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BeneficiaryTable from '@/components/BeneficiaryTable.vue';
import UserAddress from '@/components/UserAddress.vue';
import ColoredProgress from '@/components/ColoredProgress.vue';

export default {
  name: 'Campaign',
  components: {
    BeneficiaryTable,
    UserAddress,
    ColoredProgress,
  },
  created() {
    this.fetchData(this.campaignId);
  },
  computed: {
    ...mapState({
      data: state => state.campaign.data,
    }),
    campaignId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      fetchData: 'fetchCampaignData',
    }),
  },
};
</script>