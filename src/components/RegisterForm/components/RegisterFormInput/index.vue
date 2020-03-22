<template lang="pug">
  label(:for='name').search-form-label {{label}}
    input.search-form-input(:name='name' :id='name' :value='value' @input='updateValue' :type='type')
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang='scss'>
  .search-form-label {
    align-self: flex-start;
    margin-bottom: 10px;
    width: 100%;

  .search-form-input {
    height: 20px;
    width: 100%;
  }
  }

</style>
