<template>
  <div class="box">
    <div class="is-flex is-justify-content-space-between">
      <h1 class="title">{{ title }}</h1>
      <b-button type="is-info">
        <b-icon icon="donate" />
        <strong>Donate</strong>
      </b-button>
    </div>

    <div class="py-2">
      <colored-progress :value="completedPercent" />
    </div>

    <nav class="level pt-4">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="coins" />Target</p>
          <p class="title">{{ target }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="users" />Donors</p>
          <p class="title">{{ donors }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading"><b-icon icon="calendar-day" />Days left</p>
          <p class="title">{{ daysLeft }}</p>
        </div>
      </div>
    </nav>

    <b-tabs>
      <b-tab-item label="Story">
        <div class="content">
          {{ story }}
        </div>
      </b-tab-item>
      <b-tab-item label="Beneficiaries">
        <b-message v-if="!isFulfilled" type="is-info">
          Beneficiaries will be able to claim the amount of funds once the campaign is fulfilled.
        </b-message>
        <beneficiary-table />
      </b-tab-item>
      <b-tab-item label="Author">
        <user-address :address="author" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
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
  data() {
    return {
      target: '4000',
      completedPercent: 20,
      isFulfilled: false,
      donors: 31,
      daysLeft: 10,
      author: '0x8c670074C32140CF0b770cf6F13Bd45497cF7cFC',
      title: 'Another Test Campaign',
      story: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
pariatur?`,
    };
  },
};
</script>
