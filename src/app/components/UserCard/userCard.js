import axios from 'axios';

export default {
  name: 'UserCard',

  props: ['username'],

  methods: {
    async deleteUser() {
      // todo: remove user from users list on the admin page
      try {
        if (!confirm(`Are you sure you want to delete ${this.username}?`)) {
          return;
        }

        await axios.post('/api/admin/delete-user', { username: this.username });
        toastr.success('User Deleted');
        this.$emit('user-deleted');
      } catch (e) {
        toastr.error(e.response.data.msg, 'Delete Failed');
      }
    },
  },
};
