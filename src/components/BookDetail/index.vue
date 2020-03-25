<template lang="pug">
  .flex-row
    h2 {{currentBook.title}}
    img {{currentBook.img}}
    span {{currentBook.genre}}
    span {{currentBook.author}}
    span {{currentBook.publisher}}
    span {{currentBook.datePublished}}
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
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
