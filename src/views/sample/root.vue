<template>
  <div style="width:100%; height:100%;">
    <sample-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import SampleHeader from '@/sample-header';

export default {
  name: 'sample-root',
  components: {
    SampleHeader,
  },
};
</script>
<style scoped>

</style>
