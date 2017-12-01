/* eslint-disable no-param-reassign */
const getters = {
  User(state) {
    return state.user;
  },

  loggedIn(state) {
    return state.user.username !== '';
  },

  isAdmin(state) {
    return state.user.isAdmin;
  },
};

const mutations = {
  User(state, user) {
    state.user = user;
  },

  clearUser(state) {
    state.user = {};
  },
};

const actions = {};

export default {
  state: {
    user: {
      username: '',
      isAdmin: false,
    },
  },
  getters,
  mutations,
  actions,
};
