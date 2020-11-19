<template>
  <div id="app">
    <app-header />
    <section class="section">
      <div class="container is-max-desktop">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
