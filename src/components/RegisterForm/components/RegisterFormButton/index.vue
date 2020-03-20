<template lang="pug">
  button(:type='type') {{text}}
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

</style>
