<template>
  <div class="container justify-content-center">
    <h1>Page Not Found</h1>
    <img :src="img" alt="Not Found" />
    <br />
    <RouterLink to="/" class="btn btn-primary my-3">Back To Main Menu</RouterLink>
  </div>
</template>

<script>
import img from '../assets/img/404.png'
export default {
  data() {
    return {
      img: img
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
