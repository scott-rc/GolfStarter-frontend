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
      return this.form.endTime != null && this.form.endTime.length > 0;
    },
    ...mapState({
      form(state) {
        return state.forms.forms.find(form => form._id === this.formId);
      },
    }),
  },

  methods: {
    async update() {
      await axios.put('/starter-form', this.form);

      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
      };

      toastr.success('Update Successful!', 'Starter Form');
    },

    async archive() {
      this.$store.commit('archiveForm', this.form._id);
      this.update();
    },
  },

  props: ['formId', 'isArchive'],

  mounted() {
    $('.dropdown').dropdown();
    $('.ui.accordion').accordion();
    this.model = $.extend({}, this.model, this.form);
  },
};
