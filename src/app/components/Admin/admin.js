import axios from 'axios';
import UserCard from '../UserCard/UserCard.vue';

export default {
  name: 'Admin',

  components: {
    userCard: UserCard,
  },

  data() {
    return {
      usernames: [],
      admins: [],
      isCreatingUser: false,
      hasCreatedUser: false,
      userModel: {
        username: '',
        isAdmin: false,
      },
      createdUser: {
        username: '',
        password: '',
        isAdmin: false,
      },
    };
  },

  methods: {
    async getUsers() {
      const res = await axios.get('/api/admin/users');
      this.usernames = res.data.usernames;
      this.admins = res.data.adminNames;
    },

    beginCreatingUser() {
      this.isCreatingUser = true;
    },

    async createUser() {
      try {
        const res = await axios.post('/api/admin/create-user', this.userModel);
        this.createdUser = res.data;
        this.getUsers();

        this.hasCreatedUser = true;
        this.isCreatingUser = false;
      } catch (e) {
        toastr.error(e.response.data.msg);
      }
    },

    finishCreatingUser() {
      this.userModel = {
        username: '',
        isAdmin: false,
      };

      this.isCreatingUser = false;
      this.hasCreatedUser = false;
      this.getUsers();
    },
  },

  mounted() {
    this.getUsers();
  },

  updated() {
    const $form = $('.ui.form');

    if ($form == null) {
      return;
    }

    $form.form({
      on: 'blur',
      inline: true,
      fields: {
        username: 'empty',
      },
    });
  },
};
