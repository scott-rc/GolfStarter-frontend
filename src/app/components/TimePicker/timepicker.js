import dateUtil from '../../util/date';

export default {
  name: 'TimePicker',

  computed: {
    date() {
      const starterForm = this.$store.getters.Forms.find(form => form._id === this.formId);
      const dateAsString = starterForm[this.timeKey];

      if (dateUtil.isValidStringDate(dateAsString)) {
        return new Date(dateAsString);
      }

      return null;
    },

    min: {
      get() {
        if (this.date != null) {
          return this.date.getMinutes();
        }

        return '';
      },
      set(value) {
        this.$store.commit('updateTime', {
          id: this.formId,
          key: this.timeKey,
          unit: 'min',
          isPM: this.isPM,
          value,
        });
      },
    },

    hour: {
      get() {
        if (this.date != null) {
          const hour = this.date.getHours();

          if (hour > 12) {
            return hour - 12;
          }

          if (hour === 0) {
            return 12;
          }

          return hour;
        }

        return '';
      },
      set(value) {
        this.$store.commit('updateTime', {
          id: this.formId,
          key: this.timeKey,
          unit: 'hour',
          isPM: this.isPM,
          value,
        });
      },
    },

    isPM() {
      return this.pmVal === 'PM';
    },
  },

  data() {
    return {
      pmVal: null,
    };
  },

  mounted() {
    if (this.date != null) {
      this.pmVal = this.date.getHours() >= 12 ? 'PM' : 'AM';
    } else {
      this.pmVal = '';
    }

    $(this.$el).find('[name="meridiem"]').val(this.pmVal);
  },

  methods: {
    onPMChange() {
      this.hour = this.hour;
    },
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
