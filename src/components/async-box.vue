<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'async-box',
  created() {
    const loader = this.$loading.show({
      container: this.$el,
    });
    this.$emit('action')
      .then(() => {
        loader.hide();
        this.$emit('callback');
      });
  },
};
</script>
<style scoped></style>
