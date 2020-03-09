<template lang="pug">
  div.register-form-container
    register-form
</template>

<script>
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    RegisterForm
  }
}
</script>

<style lang='scss'>
@import '@/scss/mixins.scss';

.register-form-container {
  margin: auto;
}

@include desktop {

  .register-form-container {
    max-width: 500px;
  }
}
</style>
