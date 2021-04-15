<template>
  <validation-provider :name="name" immediate :rules="rules" v-slot="{ errors }">
    <span>{{name}}:</span>
    <textarea v-if="type==='textarea'" v-on="getListeners" :value="value" @input="handleInput"></textarea>
    <input v-else-if="isText" v-on="getListeners" :type="type" :value="value" @input="handleInput">
    <input v-else-if="isChecks" :type="type" :value="value" @change="handleChange">
    <input v-else v-on="$listeners" :type="type" :value="value" >
    <p style="color:red;" v-if="showErr">{{errors[0]}}</p>
  </validation-provider>
</template>

<script>
export default {
  name: 'vee-input',
  props: ['name', 'rules', 'type', 'showErr', 'value'],
  computed: {
    getListeners() {
      /* eslint no-unused-vars: "off" */
      const { input, ...others } = this.$listeners;
      return { ...others };
    },
    isText() {
      const types = ['text', 'email', 'password', 'number', 'tel'];
      return types.indexOf(this.type) > -1;
    },
    isChecks() {
      const types = ['checkbox', 'radio'];
      return types.indexOf(this.type) > -1;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleChange(e) {
      const val = this.isChecks ? e.target.checked : e.target.value;
      this.$emit('change', val);
    },
  },
};
</script>
<style scoped></style>
