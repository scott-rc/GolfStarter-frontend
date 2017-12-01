<template lang="pug">
  div(v-if="loggedIn")
    gfHeader
    .ui.container
      router-view
  div(v-else)
    gfLogin

</template>

<script>
  import Header from '../Header/Header.vue';
  import Login from '../Login/login.vue';

  export default {
    name: "App",
    components: {
      gfHeader: Header,
      gfLogin: Login,
    },
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn;
      }
    },
  };
</script>
