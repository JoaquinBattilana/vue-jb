<template lang="pug">
  label.search-form-label.full-width.m-bottom-2.relative {{label}}
    input.search-form-input.full-width.m-top-1.relative(:name='name' :value='value' @input='updateValue' :type='type')
    span.input-error(v-for='error in errors') {{error}}
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    errors: { Type: Array, default: () => [] }
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

    .input-error {
      color: red;
    }
  }
</style>
