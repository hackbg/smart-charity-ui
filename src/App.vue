<template>
  <div id="app">
    <app-header />
    <app-loading />
    <section class="section main">
      <div class="container is-max-desktop">
        <router-view />
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import AppLoading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppLoading,
    AppFooter,
  },
};
</script>

<style>
.main {
  /* stretch content: viewport - header - footer */
  min-height: calc(100vh - 3.25rem - 13rem);
}
</style>
