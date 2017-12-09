import axios from 'axios';

export default {
  name: 'Header',

  data() {
    return {
      windowWidth: 0,
    };
  },

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
    isMobile() {
      return this.windowWidth < 768;
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

  mounted() {
    const onResize = () => {
      this.windowWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    };

    window.addEventListener('resize', onResize);
    onResize();
  },
};
