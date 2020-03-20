<template lang="pug">
  form.search-form(@submit.prevent='handleSubmit')
    img.search-form-image(src='@/assets/image.png')
    register-form-input(name='searchFormFirstName' label='First name' v-model='searchForm.firstName')
    register-form-input(name='searchFormLastName' label='Last name' v-model='searchForm.lastName')
    register-form-input(name='searchFormEmail' label='Email' v-model='searchForm.email')
    register-form-input(name='searchFormPassword' label='Password' v-model='searchForm.password' type='password')
    register-form-button(type='submit' text='Sign Up')
    register-form-button(text='Login')
</template>

<script>
import RegisterFormInput from './components/RegisterFormInput'
import RegisterFormButton from './components/RegisterFormButton'

export default {
  components: {
    RegisterFormInput,
    RegisterFormButton
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
  .search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;

    .search-form-image {
      align-self: center;
      max-width: 100%;
      margin-bottom: 30px;
    }
  }
</style>
