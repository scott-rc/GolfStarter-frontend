import { mapState } from 'vuex';
import TimePicker from '../TimePicker/TimePicker.vue';
import Check from '../Check/Check.vue';

const axios = require('axios');

export default {
  name: 'StarterForm',

  components: {
    check: Check,
    timePicker: TimePicker,
  },

  computed: {
    isComplete() {
      return this.form.endTime != null;
    },
    comment: {
      get() {
        return this.form.comment;
      },
      set(value) {
        this.$store.commit('updateComment', {
          id: this.form._id,
          value,
        });
      },
    },
    ...mapState({
      form(state) {
        return state.forms.forms.find(form => form._id === this.formId);
      },
    }),
  },

  methods: {
    async updateForm() {
      try {
        await axios.put('/api/starter-form', this.form);
        toastr.success('Update Successful!');
      } catch (e) {
        toastr.error('Update Failed');
      }
    },

    async deleteForm() {
      try {
        await axios.patch('/api/starter-form', { id: this.formId });
        this.$store.commit('deleteForm', this.formId);
        toastr.success('Deleted');
      } catch (e) {
        toastr.error('Delete Failed');
      }
    },

    async archiveForm() {
      this.$store.commit('archiveForm', this.formId);
      this.updateForm();
    },
  },

  props: ['formId', 'isArchive'],

  mounted() {
    $('.dropdown').dropdown();
    $('.ui.accordion').accordion();
    this.model = $.extend({}, this.model, this.form);
  },
};
