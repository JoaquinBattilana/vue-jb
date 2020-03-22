<template lang="pug">
  button.register-form-button(:type='type') {{text}}
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'button' },
    text: { type: String, default: '' }
  }
}
</script>

<style lang='scss'>
.register-form-button {
  height: 40px;
  border-radius: 10px;
  background-color: green;
  border: 0;
}
</style>
