import axios from 'axios';

export default {
  name: 'UserCard',

  props: ['username'],

  methods: {
    async deleteUser() {
      // todo: remove user from users list on the admin page
      try {
        await axios.post('/api/admin/delete-user', { username: this.username });
        toastr.success('User Deleted');
      } catch (e) {
        toastr.error(e.response.data.msg, 'Delete Failed');
      }
    },
  },
};
