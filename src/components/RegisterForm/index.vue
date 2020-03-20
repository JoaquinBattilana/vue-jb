<template lang="pug">
  form.search-form
    img.search-form-image(src='@/assets/image.png')
    register-form-input(name='searchFormFirstName' label='First name' v-model='searchForm.firstName')
    label.search-form-label(for='searchFormLastName') Last name
    input.search-form-input(name='lastName' v-model='searchForm.lastName' id='searchFormLastName')
    label.search-form-label(for='searchFormEmail') Email
    input.search-form-input(name='email' v-model='searchForm.email' type='email' id='searchFormEmail')
    label.search-form-label(for='searchFormPassword') Password
    input.search-form-input(name='password' v-model='searchForm.password' type='password' id='searchFormPassword')
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
