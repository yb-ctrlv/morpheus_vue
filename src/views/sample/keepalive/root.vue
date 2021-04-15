<template>
  <api-container>
      <router-link tag="button" :to="{ name: 'simple-one' }" replace>Simple 1 Move</router-link>
      <router-link tag="button" :to="{ name: 'simple-two' }" replace>Simple 2 Move</router-link>
      <p>
        컴포넌트는 기본적으로 생명주기를 가지고 있습니다. <br>
        beforeCreate - created - beforeMount - mounted - beforeDestroy - destroyed <br>
        컴포넌트가 빈번히 create 와 destory를 반복한다면, <br>
        destory를 하지않도록 keep alive 태그를 통해 설정할 수 있습니다. <br>
        이는 다시 화면에 나타날때 activate 라는 생명주기 메서드를 실행합니다.
      </p>
      <div style="color: black; font-size: 2rem; font-weight: bold;">LOGGING</div>
      <div class="scroll" style="height: 150px; overflow-y: scroll;">
        <pre v-text="log"></pre>
      </div>
      <br>
      <keep-alive :exclude="['simple-two']">
        <router-view @logging="(str)=>{log += `${str}\n`}"></router-view>
      </keep-alive>
  </api-container>
</template>

<script>
export default {
  name: 'sample-keepalive',
  data() {
    return {
      log: '',
    };
  },
};
</script>
<style scoped>

</style>
