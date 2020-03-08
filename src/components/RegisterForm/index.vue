<template lang="pug">
  form(class='asd')
    img(src='@/assets/image.png')
    label First name
    input(name='firstName' v-model='searchForm.firstName')
    label Last name
    input(name='lastName' v-model='searchForm.lastName')
    label Email
    input(name='email' v-model='searchForm.email' type='email')
    label Password
    input(name='password' v-model='searchForm.password' type='password')
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
  .asd {
    display: flex;
    flex-direction: column;
  }
</style>
