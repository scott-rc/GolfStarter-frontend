const axios = require('axios');

export default {
  name: 'SetupForm',
  data() {
    return {
      model: {
        username: 'scott',

        groupNumber: null,
        groupName: null,
        numberOfPlayers: null,
        cartNumber: null,

        startTime: '',

        check1Hole: '',
        check1Time: '',
        check2Hole: '',
        check2Time: '',
        check3Hole: '',
        check3Time: '',

        hole9Time: '',

        check4Hole: '',
        check4Time: '',
        check5Hole: '',
        check5Time: '',
        check6Hole: '',
        check6Time: '',

        endTime: '',

        active: true,
      },
    };
  },

  methods: {
    async submit() {
      await axios.post('/starter-form', this.model);
      this.$router.push('/');
    },
  },
};
