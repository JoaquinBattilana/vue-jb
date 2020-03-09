<template lang="pug">
  form.search-form
    img.search-form-image(src='@/assets/image.png')
    label(for='searchFormFirstName') First name
    input(name='firstName' v-model='searchForm.firstName' id='searchFormFirstName')
    label(for='searchFormLastName') Last name
    input(name='lastName' v-model='searchForm.lastName' id='searchFormLastName')
    label(for='searchFormEmail') Email
    input(name='email' v-model='searchForm.email' type='email' id='searchFormEmail')
    label(for='searchFormPassword') Password
    input(name='password' v-model='searchForm.password' type='password' id='searchFormPassword')
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang='scss'>
  .search-form {
    display: flex;
    flex-direction: column;

    .search-form-image {
      align-self: center;
    }
  }
</style>
