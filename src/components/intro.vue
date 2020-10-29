<template>
  <div id="intro" class="hbox jc">
    <div class="flex">
      <h1><img src="../assets/img/logo_brand.png" alt="Brand" /></h1>
      <p>Mobile Enterprise Application Platform</p>
      <p class="app-version">
        {{version}}
      </p>
      <div class="intro-logo">
        <img src="../assets/img/logo_company.png" alt="Company" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data() {
    return {
      version: M.info.app().app.version,
    };
  },
  created() {
  },
  mounted() {
    // M.net.res.update 필요
    this.showIndicator();
  },
  methods: {
    showIndicator() {
      const loading = this.$loading.show();
      setTimeout(() => {
        loading.hide();
        this.$router.replace('/home');
      }, 200);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
