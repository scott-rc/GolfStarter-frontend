import { mapState } from 'vuex';
import SetupForm from '../SetupForm/SetupForm.vue';
import StarterForm from '../StarterForm/StarterForm.vue';

const axios = require('axios');

export default {
  name: 'Home',

  components: {
    setupForm: SetupForm,
    starterForm: StarterForm,
  },

  computed: {
    hasActiveForms() {
      return this.activeForms.length > 0;
    },
    ...mapState({
      numberOfForms: state => state.forms.forms.length,
      activeForms: state => state.forms.forms.filter(form => form.active === true),
    }),
  },

  async mounted() {
    const res = await axios.get('/api/starter-form');
    const forms = res.data;

    if (this.numberOfForms < forms.length) {
      this.$store.commit('clearForms');
      forms.forEach(form => this.$store.commit('addForm', form));
    }
  },
};
