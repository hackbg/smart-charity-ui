<template>
  <div>
    <preview
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :amount="item.target"
      :completedPercent="item.completedPercent"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Preview from '@/components/Preview.vue';

export default {
  name: 'List',
  components: {
    Preview,
  },
  created() {
    this.fetchAll();
  },
  computed: {
    ...mapGetters({
      items: 'allCampaigns',
    }),
  },
  methods: {
    ...mapActions({
      fetchAll: 'fetchAllCampaigns',
    }),
  },
};
</script>
