import BookService from '@/services/BookService'

export default {
  namespaced: true,

  state: {
    books: [],
    currentBook: {}
  },

  mutations: {
    GET_BOOKS (state) {
      BookService.getBooks().then(response => {
        if (response.ok) {
          state.books = response.data
        }
      })
    },
    GET_BOOK_BY_ID (state, id) {
      BookService.getBookById(id).then(response => {
        if (response.ok) {
          state.currentBook = response.data
        }
      })
    }
  },
  actions: {
    getBooks ({ commit }) {
      commit('GET_BOOKS')
    },
    getBookById ({ commit }, id) {
      commit('GET_BOOK_BY_ID', id)
    }
  }
}
