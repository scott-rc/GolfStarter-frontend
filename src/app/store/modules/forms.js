import isValidForm from '../../util/form';

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

  updateForm(state, { formId, key, value }) {
    const form = state.forms.find(f => f._id === formId);
    form[key] = value;

    if (isValidForm(form)) {
      state.forms.find(f => f._id === formId)[key] = value;
    }
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
