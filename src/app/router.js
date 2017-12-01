import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home/Home.vue';
import CreateForm from './components/SetupForm/SetupForm.vue';
import Archive from './components/Archive/Archive.vue';
import Admin from './components/Admin/Admin.vue';
import Account from './components/Account/Account.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/create-form', component: CreateForm },
  { path: '/archive', component: Archive },
  { path: '/admin', component: Admin },
  { path: '/account', component: Account },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
