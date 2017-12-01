/* eslint-disable no-param-reassign */
const getters = {
  Forms(state) {
    return state.forms;
  },
};

const mutations = {
  addForm(state, form) {
    state.forms.push(form);
  },

  archiveForm(state, id) {
    state.forms.find(form => form._id === id).active = false;
  },

  updateComment(state, { id, value }) {
    state.forms.find(form => form._id === id).comment = value;
  },

  updateTime(state, { formId, timeKey, value }) {
    state.forms.find(form => form._id === formId)[timeKey] = value;
  },

  updateCheckHole(state, { id, key, value }) {
    state.forms.find(form => form._id === id)[key] = value;
  },

  deleteForm(state, formId) {
    state.forms = state.forms.filter(form => form._id !== formId);
  },

  clearForms(state) {
    state.forms = [];
  },
};

const actions = {};

export default {
  state: {
    forms: [],
  },
  getters,
  mutations,
  actions,
};
