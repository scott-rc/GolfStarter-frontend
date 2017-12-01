import { mapState } from 'vuex';
import SetupForm from '../SetupForm/SetupForm.vue';
import StarterForm from '../StarterForm/StarterForm.vue';

const axios = require('axios');

export default {
  name: 'Archive',

  components: {
    setupForm: SetupForm,
    starterForm: StarterForm,
  },

  computed: {
    hasArchivedForms() {
      return this.archivedForms.length > 0;
    },
    ...mapState({
      numberOfForms: state => state.forms.forms.length,
      archivedForms: state => state.forms.forms.filter(form => form.active === false),
    }),
  },

  async mounted() {
    const res = await axios.get('/api/starter-form/');
    const forms = res.data;

    if (this.numberOfForms < forms.length) {
      this.$store.commit('clearForms');
      forms.forEach(form => this.$store.commit('addForm', form));
    }
  },
};
