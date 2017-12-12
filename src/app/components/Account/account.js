import axios from 'axios';

export default {
  name: 'Account',

  data() {
    return {
      model: {
        password: '',
        newPassword: '',
      },
    };
  },

  methods: {
    async changePassword() {
      try {
        await axios.post('/api/change-password', this.model);
        toastr.success('Password Updated');
        this.$router.push('/');
      } catch (e) {
        toastr.error(e.response.data.msg, 'Update Failed');
      }
    },
  },

  mounted() {
    $('.ui.form').form({
      on: 'blur',
      inline: true,
      fields: {
        currentPassword: ['empty', 'minLength[8]'],
        newPassword: ['empty', 'minLength[8]'],
      },
    });
  },
};
