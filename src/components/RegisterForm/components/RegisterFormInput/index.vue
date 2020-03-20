<template lang="pug">
  label(:for='name').search-form-label {{label}}
    input.search-form-input(:name='name' :id='name' :value='value' @input='updateValue')
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, default: '' }
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
  }

  .search-form-input {
    width: 100%;
    height: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
</style>
