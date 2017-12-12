import { mapState } from 'vuex';
import TimePicker from '../TimePicker/TimePicker.vue';
import Check from '../Check/Check.vue';
import isValidForm from '../../util/form';

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
        this.$store.commit('updateForm', {
          formId: this.formId,
          key: 'comment',
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
        if (!isValidForm(this.form, 'Update Failed')) {
          return;
        }

        await axios.put('/api/starter-form', this.form);
        toastr.success('Update Successful!');
      } catch (e) {
        toastr.error('Update Failed');
      }
    },

    async deleteForm() {
      try {
        if (!confirm('Are you sure you want to delete this form?')) {
          return;
        }

        await axios.patch('/api/starter-form', { id: this.formId });
        this.$store.commit('deleteForm', this.formId);
        toastr.success('Deleted');
      } catch (e) {
        toastr.error('Delete Failed');
      }
    },

    async archiveForm() {
      if (!confirm('Are you sure you want to archive this form?')) {
        return;
      }

      this.$store.commit('archiveForm', this.formId);
      this.updateForm();
    },
  },


  mounted() {
    $('.dropdown').dropdown();
    $('.ui.accordion').accordion();
    this.model = $.extend({}, this.model, this.form);
  },

  props: ['formId', 'isArchive'],
};
