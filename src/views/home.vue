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
      <content-item :to="'/sample/list'" :title="'Sample'" :desc="'Morpheus + vue로 구현한 샘플이 제공됩니다.'"/>
    </ul>
    <footer id="m_footer">
      <img src="../assets/img/logo_company.png" alt="Company" />
    </footer>
  </div>
</template>

<script>
const ContentItem = {
  template: `
    <router-link :to="to" tag="li">
        <h2>{{title}}</h2>
        <p class="h2_desc">{{desc}}</p>
    </router-link>
  `,
  props: ['to', 'title', 'desc'],
};

export default {
  name: 'home',
  components: {
    ContentItem,
  },
  data() {
    return {
      flag: {
        exit: false,
      },
    };
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
 #main h1 img {width: 21.5rem;height: 6.0rem;}
 #main{width:100%;height:100%;background:#f0f0f0;}
 #main header{width:100%;height:10.4rem;padding:1.5rem;background:#060d23 url('../assets/img/bg_intro.png') repeat 0 0;}
 #main h1{margin:0.8rem auto;text-align:left; }
 #main li{min-height:11rem;padding:2.3rem 2rem .9rem;border-bottom:1px solid #d2d5d5;background:#f0f0f0;}
 #main h2{margin-bottom:.5rem;padding-top:2.5rem;color:#000;font-size:3rem;background:url('../assets/img/icon_main.png') no-repeat 0 0;background-size:2.6rem;}
 #main .h2_desc{color:#787878;font-size:1.2rem;}
 #m_footer img{width:4rem;height:1.5rem;}
 #main footer{position:absolute;bottom:0;left:0;width:100%;height:2.5rem;padding:0 1rem;line-height:2.4rem;text-align:right;background:#484848;}
</style>
