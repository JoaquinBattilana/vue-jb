<template lang="pug">
  div
    navbar
    book-list
</template>

<script>
import Navbar from '@/components/Navbar'
import BookList from '@/components/BookList'

export default {
  components: {
    Navbar,
    BookList
  }
}
</script>
