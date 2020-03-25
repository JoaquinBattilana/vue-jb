<template lang="pug">
  form.flex-column.search-form.p-3(@submit.prevent='handleSubmit')
    img.max-full-width.m-bottom-5(src='@/assets/image.png')
    register-form-input(name='searchFormFirstName' label='First name' v-model='searchForm.firstName')
    register-form-input(name='searchFormLastName' label='Last name' v-model='searchForm.lastName')
    register-form-input(name='searchFormEmail' label='Email' v-model='searchForm.email')
    register-form-input(name='searchFormPassword' label='Password' v-model='searchForm.password' type='password')
    button.smooth-edges.form-button.primary-color(type='submit') Sign up
    .grey-separator
    button.smooth-edges.form-button.secondary-color(type='button') Login
</template>

<script>
import RegisterFormInput from './components/RegisterFormInput'

export default {
  components: {
    RegisterFormInput
  },
  data () {
    return {
      searchForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.searchForm)
    }
  }
}
</script>

<style lang='scss'>
  @import '@/scss/colors';

  .search-form {
    background-color: $mercury;
    max-width: 300px;

    .form-button {
      height: 40px;
    }
  }
</style>
