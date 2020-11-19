<template>
  <header class="header has-background-primary">
    <b-navbar class="container is-max-desktop" type="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <logo />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          About
        </b-navbar-item>
      </template>
      <template slot="end"></template>
    </b-navbar>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
};
</script>
