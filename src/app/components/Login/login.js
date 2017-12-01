import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
      model: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    async login() {
      try {
        const res = await axios.post('/login', this.model);
        this.$store.commit('User', res.data.claims);
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common.authorization = res.data.token;
      } catch (e) {
        toastr.error(e.response.data.msg, 'Login Failed');
      }
    },
  },

  async mounted() {
    const token = localStorage.getItem('token');

    if (token == null) {
      return;
    }

    try {
      axios.defaults.headers.common.authorization = token;
      const res = await axios.get('/login');
      this.$store.commit('User', res.data);
    } catch (e) {
      axios.defaults.headers.common.authorization = null;
      localStorage.clear();
    }
  },
};
