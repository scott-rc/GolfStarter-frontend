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
      creatingUser: false,
      inputtingUser: false,
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
      this.creatingUser = true;
      this.inputtingUser = true;
    },

    async createUser() {
      try {
        const res = await axios.post('/api/admin/create-user', this.userModel);
        this.createdUser = res.data;
        this.inputtingUser = false;
        this.getUsers();
      } catch (e) {
        toastr.error('Unable to create user');
      }
    },

    finishCreatingUser() {
      this.userModel = {
        username: '',
        isAdmin: false,
      };

      this.creatingUser = false;
      this.inputtingUser = false;
    },
  },

  mounted() {
    this.getUsers();
  },
};
