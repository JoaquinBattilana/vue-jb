<template lang="pug">
  nav.flex-row.full-width.navbar-container
    img.navbar-image(src='@/assets/image.png')
    button(@click='handleLogoutClick').logout-button logout
</template>

<script>
export default {
  methods: {
    handleLogoutClick () {
      window.localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss'>
.navbar-container {
  align-items: center;
  padding: 0 20%;
  border-bottom: 1px solid grey;

  .navbar-image {
    max-height: 30px;
  }

  .logout-button {
    margin-left: auto;
  }
}
</style>
