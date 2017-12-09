import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
      isLoading: true,
      model: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    async login(token) {
      try {
        let res;

        if (token != null && typeof (token) === 'string') {
          axios.defaults.headers.common.authorization = token;
          res = await axios.get('/login');
        } else {
          res = await axios.post('/login', this.model);
          localStorage.setItem('token', res.data.token);
          axios.defaults.headers.common.authorization = res.data.token;
        }

        this.$store.commit('User', res.data.claims || res.data);
      } catch (e) {
        toastr.error(e.response.data.msg, 'Login Failed');
        axios.defaults.headers.common.authorization = null;
        localStorage.clear();
      }
    },
  },

  async mounted() {
    this.isLoading = true;
    const token = localStorage.getItem('token');

    if (token != null) {
      await this.login(token);
    }

    this.isLoading = false;
  },
};
