<template>
  <div>
    <p>Hello, I'M Simple 2 Component</p>
    <pre>KeepAlive 미적용 시에는 기본 생명주기를 가집니다.</pre>
  </div>
</template>

<script>
export default {
  name: 'simple-two',
  beforeCreate() {
    this.$emit('logging', 'simple2 beforeCreate');
  },
  created() {
    this.$emit('logging', 'simple2 create');
  },
  beforeMount() {
    this.$emit('logging', 'simple2 beforeMount');
  },
  mounted() {
    this.$emit('logging', 'simple2 mounted');
  },
  activated() {
    this.$emit('logging', 'simple1 activated');
  },
  deactivated() {
    this.$emit('logging', 'simple1 deactivated');
  },
  beforeDestroy() {
    this.$emit('logging', 'simple2 beforeDestroy');
  },
  destroyed() {
    this.$emit('logging', 'simple2 destroyed');
  },
};
</script>
<style scoped>
</style>
