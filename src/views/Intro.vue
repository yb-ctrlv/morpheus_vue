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
  created() {},
  mounted() {
    // M.net.res.update 필요
    if (M.info.app().manifest.resource.target === 'doc') {
      this.resourceUpdate();
    } else {
      this.showIndicator();
    }
  },
  methods: {
    showIndicator() {
      const loading = this.$loading.show();

      setTimeout(() => {
        loading.hide();
        this.$router.push('/home');
      }, 1000);
    },
    resourceUpdate() {
      const self = this;
      M.net.res.check({
        callback(status, info) {
          if (info.update) {
            // 받아야할 업데이트가 있는 경우
            M.net.res.update({
              finish(_status, _info, option) {
                // switch (status) {
                //   case 'SUCCESS':
                //   case 'SUCCESS_AND_REFRESH':
                //     // 리소스 업데이트를 완료한 후
                //     M.page.replace('index.html'); // 새로고침
                //     break;
                //     // 그 외 분기처리...
                // }
                M.pop.alert(_status);
              },
              progress(total, read, remain, percentage, option) {
                console.log('** progress', total, read, remain, percentage);
              },
              error(errCode, errMsg, option) {
                console.error('** error : ', errCode, errMsg);
                M.pop.alert({
                  title: '알림',
                  message: '알 수 없는 오류입니다.',
                  buttons: ['취소', '확인'],
                  callback(index) {
                    if (index === 1) {
                      M.net.res.retry();
                    } else {
                      M.sys.exit();
                    }
                  },
                });
              },
            });
          } else {
            // 업데이트를 받을 필요가 없는 경우
            self.$router.push('/home');
          }
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
