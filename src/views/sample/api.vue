<template>
  <api-container>
    <pre>API를 사용하실때에는 src/plugin.js 파일을 참고하여
this.$native.camera로 사용하시거나 아래 샘플과 같이 확장하여 사용이 가능합니다.</pre>
    <api-content-box
        :titleName="'CAMERA'"
        :btnName="'M.media.camera'"
        @btnClick="openCamera"
        :desc="`카메라 촬영 API 입니다.`"
      >
        <div>촬영한 이미지: <img :src="result.camera" style="width: 100px;"></div>
    </api-content-box>
    <api-content-box
        :titleName="'POPUP'"
        :btnName="'M.pop.alert'"
        @btnClick="openPopup"
        :desc="`POPUP API 입니다.`"
      >
        <p>선택한 버튼 : {{result.popup}}</p>
    </api-content-box>
    <api-content-box
        :titleName="'비동기 콜백함수'"
        :btnName="'M.response.on'"
        @btnClick="nativeCallback"
        :desc="`Native 비동기 콜백함수 사용 시 콜백 예제입니다.`"
      >
        <p>상태 : {{result.state}}</p>
    </api-content-box>
  </api-container>
</template>

<script>
export default {
  name: 'sample-api',
  data() {
    return {
      result: {
        camera: '',
        popup: '',
        state: '대기 중',
      },
    };
  },
  methods: {
    openCamera() {
      this.$camera()
        .then((result, option) => {
          if (M.navigator.os('android')) {
            // android 일때
            this.result.camera = result.alias;
          } else {
            // ios 일때
            this.result.camera = result.path;
          }
        })
        .catch((result, option) => {
          console.log(result, option);
        });
    },
    openPopup() {
      this.$popup('테스트 메세지', ['0', '1', '2', '3'])
        .then((idx) => {
          this.result.popup = idx;
        });
    },
    nativeCallback() {
      const callback = M.response.on((result) => {
        this.result.state = result;
      }).toString();
      this.result.state = '진행';
      setTimeout(() => {
        /* eslint no-eval: "off" */
        eval(`${callback}("완료");`);
      }, 1000);
    },
  },

};
</script>
<style scoped>
</style>
