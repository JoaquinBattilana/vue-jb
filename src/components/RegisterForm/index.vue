<template lang="pug">
  form.flex-column.search-form.p-3(@submit.prevent='handleSubmit')
    img.max-full-width.m-bottom-5(src='@/assets/image.png')
    register-form-input(v-show='register' name='registerFormFirstName' label='First name' v-model='searchForm.firstName' )
    register-form-input(v-show='register' name='registerFormLastName' label='Last name' v-model='searchForm.lastName')
    register-form-input(name='registerFormEmail' label='Email' v-model='searchForm.email' :errors='searchFormErrors.email')
    register-form-input(name='registerFormPassword' label='Password' v-model='searchForm.password' type='password' :errors='searchFormErrors.password')
    register-form-input(v-show='register' name='registerFormPasswordConfirmation' label='Password Confirmation' v-model='searchForm.passwordConfirmation' type='password')
    button.smooth-edges.form-button.primary-color(type=submit) {{register ? 'Sign Up' : 'Login'}}
    .grey-separator
    router-link.smooth-edges.form-button.secondary-color(tag='button' :to="register ? '/login' : '/sign-up' ") {{register ? 'Login' : 'Sign up'}}
</template>

<script>
import RegisterFormInput from './components/RegisterFormInput'
import UserService from '@/services/UserService'
import { required, email } from 'vuelidate/lib/validators'
import { generateErrorsMessages } from '@/utils'

export default {
  components: {
    RegisterFormInput
  },
  props: {
    register: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  validations: {
    searchForm: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    handleSubmit () {
      if (!this.$v.$invalid) {
        if (this.register) {
          UserService.registerUser(this.searchForm).then(response => {
            if (response.ok) {
              this.$router.push('/login')
            }
          })
        } else {
          UserService.login(this.searchForm).then(response => {
            if (response.ok) {
              window.localStorage.setItem('access_token', response.data.access_token)
              this.$router.push('/')
            }
          })
        }
      }
    }
  },
  computed: {
    searchFormErrors () {
      return {
        email: generateErrorsMessages(this.$v.searchForm.email),
        password: generateErrorsMessages(this.$v.searchForm.password)
      }
    }
  }
}
</script>

<style lang='scss'>
  @import '@/scss/colors';

  .search-form {
    background-color: $mercury;

    .form-button {
      height: 40px;
    }
  }
</style>
