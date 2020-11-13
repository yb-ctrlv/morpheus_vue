<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'ipt-text',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>

</style>
