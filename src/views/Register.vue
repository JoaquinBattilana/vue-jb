<template lang="pug">
  .register-form-container
    register-form(register=true)
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
  margin: 50px auto;
}

@include desktop {

  .register-form-container {
    max-width: 300px;
  }
}
</style>
