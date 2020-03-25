import BookService from '@/services/BookService'

export default {
  namespaced: true,

  state: {
    books: []
  },

  mutations: {
    GET_BOOKS (state) {
      BookService.getBooks().then(response => {
        if (response.ok) {
          state.books = response.data
        }
      })
    }
  },
  actions: {
    getBooks ({ commit }) {
      commit('GET_BOOKS')
    }
  }
}
