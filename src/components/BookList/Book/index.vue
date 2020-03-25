<template lang="pug">
  li
    img(src='img')
    h2 {{title}}
    span {{author}}
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
}
</script>
