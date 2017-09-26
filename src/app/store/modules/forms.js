import dateUtil from '../../util/date';

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

  updateTime(state, { id, key, value, unit, isPM }) {
    const oldDateAsString = state.forms.find(form => form._id === id)[key];
    const date = dateUtil.getDate(oldDateAsString);

    if (value == null || value === '') {
      state.forms.find(form => form._id === id)[key] = date.toISOString();
      return;
    }

    if (unit === 'min') {
      date.setMinutes(value);
    } else {
      let hour = parseInt(value, 10);

      if (hour === 12) {
        hour = 0;
      }

      if (isPM) {
        hour += 12;
      } else if (hour >= 12) {
        hour -= 12;
      }

      if (hour >= 24) {
        hour = 0;
      }

      date.setHours(hour);
    }

    state.forms.find(form => form._id === id)[key] = date.toISOString();
  },

  updateCheckHole(state, { id, key, value }) {
    state.forms.find(form => form._id === id)[key] = value;
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
