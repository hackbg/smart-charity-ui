<template>
  <b-table :data="items">
    <b-table-column field="name" label="Name" v-slot="props">{{ props.row.name }}</b-table-column>
    <b-table-column field="reason" label="Reason" v-slot="props">{{
      props.row.reason
    }}</b-table-column>
    <b-table-column field="amount" label="Amount" v-slot="props">
      <span class="tag is-success">
        {{ props.row.amount }}
      </span>
    </b-table-column>
    <b-table-column field="address" label="Address" v-slot="props">
      <user-address :address="props.row.address" />
    </b-table-column>
  </b-table>
</template>

<script>
import UserAddress from '@/components/UserAddress.vue';

export default {
  name: 'BeneficiaryTable',
  components: {
    UserAddress,
  },
  data() {
    return {
      items: [
        {
          name: 'Kaufland',
          reason: 'Food',
          amount: 1000,
          address: '0xf23fdsf...',
        },
        {
          name: 'Building Co',
          reason: 'Reconstruction',
          amount: 3000,
          address: '0xf9ds32d...',
        },
      ],
    };
  },
};
</script>
