import Vue from 'vue';
import App from './components/App/App.vue';
import router from './router';
import store from './store/store';

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

function main() {
  return new Vue({
    el: '#golfstarter',
    router,
    store,
    render: h => h(App),
  });
}

main();
