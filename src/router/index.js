import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Campaign from '../views/Campaign.vue';
import Create from '../views/Create.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/campaign/new',
    name: 'Create',
    component: Create,
  },
  {
    path: '/campaign/:id',
    name: 'Campaign',
    component: Campaign,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
