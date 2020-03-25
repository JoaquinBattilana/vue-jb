<template lang="pug">
  .flex-row
    h2 {{currentBook.title}}
    img(:src='currentBook.src')
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
      currentBook: state => state.books.currentBook
    })
  },
  methods: {
    ...mapActions({
      getBookById: 'books/getBookById'
    })
  },
  mounted () {
    this.getBookById(this.$route.params.id)
  }
}
</script>
