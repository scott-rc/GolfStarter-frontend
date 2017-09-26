<template lang="pug">
  div
    gfHeader
    .ui.container
      router-view
</template>

<script>
  import Header from '../Header/Header.vue';

  export default {
    name: "App",
    components: {
      gfHeader: Header,
    }
  };
</script>
