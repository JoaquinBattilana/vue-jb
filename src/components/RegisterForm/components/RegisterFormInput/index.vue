<template lang="pug">
  label.search-form-label.full-width.m-bottom-2.relative {{label}}
    input.search-form-input.full-width.m-top-1.relative(:name='name' :value='value' @input='updateValue' :type='type')
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
    left: 5px;
    align-self: flex-start;

    .search-form-input {
      height: 20px;
      right: 5px;
    }
  }
</style>
