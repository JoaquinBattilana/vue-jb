import api from '@/config/api'

export default {
  getBooks: () =>
    api.get('/books', {}, {
      headers: {
        Autorization: window.localStorage.getItem('access_token')
      }
    })
}
