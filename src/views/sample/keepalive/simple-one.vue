<template>
  <div>
    <p>Hello, I'M Simple 1 Component</p>
    <pre v-text="'KeepAlive 적용 시에는 해당 컴포넌트 객체는 Destroy 되지 않습니다. \n 부모 컴포넌트가 Destroy될때 함께 Destroy됩니다.'"></pre>
  </div>
</template>

<script>
export default {
  name: 'simple-one',
  beforeCreate() {
    this.$emit('logging', 'simple1 beforeCreate');
  },
  created() {
    this.$emit('logging', 'simple1 create');
  },
  beforeMount() {
    this.$emit('logging', 'simple1 beforeMount');
  },
  mounted() {
    this.$emit('logging', 'simple1 mounted');
  },
  activated() {
    this.$emit('logging', 'simple1 activated');
  },
  deactivated() {
    this.$emit('logging', 'simple1 deactivated');
  },
  beforeDestroy() {
    this.$emit('logging', 'simple1 beforeDestroy');
  },
  destroyed() {
    this.$emit('logging', 'simple1 destroyed');
  },
};

</script>
<style scoped>

</style>
