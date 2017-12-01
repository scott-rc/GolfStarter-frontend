import axios from 'axios';

export default {
  name: 'Header',

  computed: {
    username() {
      return this.$store.getters.User.username;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },

  methods: {
    logout() {
      this.$store.commit('clearUser');
      this.$store.commit('clearForms');
      localStorage.clear();
      axios.defaults.headers.common.authorization = undefined;
      this.$router.push('/');
    },
  },
};
