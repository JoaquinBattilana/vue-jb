<template lang="pug">
  div
    navbar
    book-detail
</template>

<script>
import BookDetail from '@/components/BookDetail'
import Navbar from '@/components/Navbar'

export default {
  components: {
    BookDetail,
    Navbar
  }
}
</script>
