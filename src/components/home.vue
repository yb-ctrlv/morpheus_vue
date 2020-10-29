<template>
  <div id="main">
    <header>
      <h1><img src="../assets/img/logo_brand.png" alt="Brand" /></h1>
      <p class="tbtn_r">
        <button type="button" class="tbtn_menu">전체메뉴</button>
      </p>
    </header>
    <!--// Header End -->
    <ul id="list">
      <router-link to="/sample/list" tag="li">
        <h2>Sample</h2>
        <p class="h2_desc" tag="p">Morpheus + vue로 구현한 샘플이 제공됩니다.</p>
      </router-link>
    </ul>
    <footer id="m_footer">
      <img src="../assets/img/logo_company.png" alt="Company" />
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      flag: {
        exit: false,
      },
    };
  },
  created() {
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
  watch: {

  },
};

$mcore.onBack('home', function () {
  if (this.flag.exit) M.sys.exit();
  M.pop.instance('한번더 클릭하시면 앱이 종료됩니다.');
  this.flag.exit = true;
  setTimeout(() => {
    this.flag.exit = false;
  }, 1000);
});
</script>
<style scoped>
</style>
