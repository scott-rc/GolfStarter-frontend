/* eslint-disable no-param-reassign */
const getters = {
  User(state) {
    return state.user;
  },

  loggedIn(state) {
    return state.user.username !== '';
  },
};

const mutations = {
  User(state, user) {
    state.user = user;
  },

  clearUser(state) {
    state.user.username = '';
    state.user.email = '';
  },
};

const actions = {};

export default {
  state: {
    user: {
      username: '',
      email: '',
    },
  },
  getters,
  mutations,
  actions,
};
