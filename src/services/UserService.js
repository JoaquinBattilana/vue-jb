import api from '@/config/api'

export default {
  registerUser: ({ email, password, passwordConfirmation, firstName, lastName }) => api.post('/users', {
    email,
    password,
    password_confirmation: passwordConfirmation,
    first_name: firstName,
    last_name: lastName,
    locale: 'es'
  })
}
