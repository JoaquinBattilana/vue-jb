<template lang="pug">
  form.search-form
    img.search-form-image(src='@/assets/image.png')
    register-form-input(name='searchFormFirstName' label='First name' v-model='searchForm.firstName')
    register-form-input(name='searchFormLastName' label='Last name' v-model='searchForm.lastName')
    register-form-input(name='searchFormEmail' label='Email' v-model='searchForm.email')
    register-form-input(name='searchFormPassword' label='Password' v-model='searchForm.password' type='password')
    button(type='submit')
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
  }
}
</script>

<style lang='scss'>
  .search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    background-color: grey;

    .search-form-image {
      align-self: center;
      max-width: 100%;
      margin-bottom: 30px;
    }
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
  }
</style>
