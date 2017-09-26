import Vue from 'vue';
import App from './components/App/App.vue';
import router from './router';
import store from './store/store';

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

function main() {
  return new Vue({
    el: '#golfstarter',
    router,
    store,
    render: h => h(App),
  });
}

main();
