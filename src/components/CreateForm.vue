<template>
  <div class="box">
    <form v-if="!isSubmitted" @submit.prevent="handleSubmit">
      <div class="is-flex is-justify-content-space-between">
        <h1 class="title">New Campaign</h1>
        <button type="submit" class="button is-info">
          <b-icon icon="magic" />
          <strong>Create</strong>
        </button>
      </div>
      <b-field label="Title">
        <b-input v-model="data.title" ref="title" minlength="10"></b-input>
      </b-field>
      <b-field label="Story">
        <b-input v-model="data.story" minlength="50" maxlength="800" type="textarea"></b-input>
      </b-field>
      <b-field label="Target">
        <b-input v-model="data.target" placeholder="Number" type="number" min="1"> </b-input>
      </b-field>
      <b-field label="Closing">
        <b-datetimepicker
          v-model="data.closing"
          icon="calendar"
          placeholder="Click to select..."
          horizontal-time-picker
          rounded
          required
        >
        </b-datetimepicker>
      </b-field>
      <div class="pt-1">
        <label class="label">Beneficiaries</label>
        <b-button
          type="is-small"
          class="is-light"
          icon-left="plus"
          @click="isBeneficiaryModalActive = true"
          >Add</b-button
        >
        <beneficiary-table :items="data.beneficiaries" v-if="data.beneficiaries.length" />
      </div>
      <b-modal v-model="isBeneficiaryModalActive">
        <template #default="props" has-modal-card trap-focus :destroy-on-hide="false">
          <add-beneficiary-form @close="props.close" @add="addBeneficiary" />
        </template>
      </b-modal>
    </form>
    <div v-else>
      <h1 class="title">Congratulations</h1>
      <p class="content">
        You have successfully created a new campaign. Good luck!
      </p>
      <p class="content">
        <router-link :to="{ path: `/campaign/${newCampaignId}` }">Visit campaign page</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BeneficiaryTable from '@/components/BeneficiaryTable.vue';
import AddBeneficiaryForm from '@/components/AddBeneficiary.vue';

export default {
  name: 'CreateForm',
  components: {
    BeneficiaryTable,
    AddBeneficiaryForm,
  },
  data() {
    return {
      data: {
        title: null,
        story: null,
        target: null,
        closing: null,
        beneficiaries: [],
      },
      isBeneficiaryModalActive: false,
      isSubmitted: false,
      newCampaignId: null,
    };
  },
  methods: {
    ...mapActions({
      create: 'create',
    }),
    handleSubmit() {
      // todo: check form elements validity
      this.create(this.data)
        .then(result => {
          this.isSubmitted = true;
          this.newCampaignId = result;
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: `Something went wrong... ${error.message}`,
            type: 'is-danger',
          });
        });
    },
    addBeneficiary(data) {
      this.data.beneficiaries = [...this.data.beneficiaries, { ...data }];
      this.isBeneficiaryModalActive = false;
    },
  },
};
</script>

<style></style>
