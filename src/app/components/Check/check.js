import TimePicker from '../TimePicker/TimePicker.vue';

export default {
  name: 'Check',

  components: {
    timePicker: TimePicker,
  },

  computed: {
    holeKey() {
      return `check${this.number}Hole`;
    },

    hole: {
      get() {
        return this.$store.getters.Forms.find(form => form._id === this.formId)[this.holeKey];
      },
      set(value) {
        this.$store.commit('updateCheckHole', {
          id: this.formId,
          key: this.holeKey,
          value,
        });
      },
    },
  },

  props: {
    start: {
      type: Number,
      default: 1,
    },
    number: {
      required: true,
      type: Number,
    },
    formId: {
      required: true,
      type: String,
    },
    timeKey: {
      required: true,
      type: String,
    },
    isArchive: {
      type: Boolean,
      default: false,
    },
  },
};
