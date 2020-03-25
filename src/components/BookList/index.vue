<template lang="pug">
  ul.flex-row
    book(v-for='book in books' img='book.image' author='book.author' title='book.title')
</template>

<script>
import Book from './Book'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Book
  },
  data () {
    return {
      books: []
    }
  },
  computed: {
    ...mapState({
      books: state => state.books.books
    })
  },
  methods: {
    ...mapActions({
      getBooks: 'books/getBooks'
    })
  },
  mounted () {
    this.getBooks()
  }
}
</script>
