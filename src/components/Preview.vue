<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div>
            <router-link :to="route"
              ><strong>{{ title }}</strong></router-link
            >
            <span class="pl-2"
              ><b-icon icon="coins" /><small>{{ amount }}</small></span
            >
          </div>
          <p>
            {{ description }}
          </p>
          <colored-progress :value="completedPercent" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import ColoredProgress from '@/components/ColoredProgress.vue';

export default {
  name: 'Preview',
  props: ['id', 'title', 'amount', 'description', 'completedPercent'],
  components: {
    ColoredProgress,
  },
  computed: {
    route() {
      return `campaign/${this.id}`;
    },
  },
};
</script>
