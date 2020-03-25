<template lang="pug">
  ul.flex-row
    book(v-for='book in books' img='book.image' author='book.author' title='book.title')
</template>

<script>
import Book from './Book'
import BookService from '@/services/BookService'

export default {
  components: {
    Book
  },
  data () {
    return {
      books: []
    }
  },
  mounted () {
    BookService.getBooks().then(response => {
      if (response.ok) {
        this.books = response.data
      }
    })
  }
}
</script>
