<template>
  <div id="app">
    <app-header />
    <section class="section">
      <div class="container is-max-desktop">
        <app-loading isFullPage="false" />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppLoading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppLoading,
  },
};
</script>
