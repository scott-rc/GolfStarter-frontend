const axios = require('axios');

export default {
  name: 'SetupForm',
  data() {
    return {
      $form: null,

      model: {
        username: '',

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

        comment: '',

        active: true,
      },
    };
  },

  mounted() {
    this.$form = $('.ui.form');
    this.$form
      .form({
        on: 'blur',
        inline: true,
        fields: {
          groupName: 'empty',
          numOfPlayers: ['empty', 'integer'],
          cartNum: 'empty',
        },
      });
  },

  methods: {
    async submit() {
      if (!this.$form.form('is valid')) {
        return;
      }

      try {
        const form = this.model;
        form.username = this.$store.getters.User.username;
        await axios.post('/api/starter-form', form);
        this.$router.push('/');
      } catch (e) {
        toastr.error('Submit Failed', 'Starter Form');
      }
    },
  },
};
