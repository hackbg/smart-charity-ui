<template>
  <div>
    <preview
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :amount="item.amount"
      :completedPercent="item.completedPercent"
    />
  </div>
</template>

<script>
import Preview from '@/components/Preview.vue';

export default {
  name: 'List',
  components: {
    Preview,
  },
  data() {
    return {
      items: [
        {
          id: '1',
          title: 'Test Campaign',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
          amount: '1000',
          completedPercent: '42',
        },
        {
          id: '2',
          title: 'Another Test Campaign',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
          amount: '4000',
          completedPercent: '20',
        },
      ],
    };
  },
};
</script>
