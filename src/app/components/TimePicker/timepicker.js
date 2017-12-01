export default {
  name: 'TimePicker',

  computed: {
    date() {
      const date = this.$store.getters.Forms.find(form => form._id === this.formId)[this.timeKey];

      if (typeof (date) === 'string') {
        return new Date(date);
      }

      return date;
    },
  },

  mounted() {
    const $self = $(this.$el);
    const $timepicker = $self.find('input');

    $timepicker.timepicker({
      noneOption: true,
      useSelect: true,
      forceRoundTime: true,
      timeFormat: 'h:i A',
      scrollDefault: 'now',
      step: 5,
    });

    $timepicker.change(() => {
      const value = $timepicker.timepicker('getTime');

      this.$store.commit('updateTime', {
        formId: this.formId,
        timeKey: this.timeKey,
        value,
      });
    });

    const $selectPicker = $self.find('select');

    if (this.isArchive) {
      $selectPicker.addClass('disabled');
    }

    $selectPicker.addClass('ui dropdown');
    $selectPicker.dropdown();

    if (this.date != null) {
      $timepicker.timepicker('setTime', this.date);
    }
  },

  props: {
    timeKey: {
      require: true,
      type: String,
    },
    formId: {
      required: true,
      type: String,
    },
    label: {
      type: String,
      default: 'Time',
    },
    isArchive: {
      type: Boolean,
      default: false,
    },
  },
};
