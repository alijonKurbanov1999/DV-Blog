<template>
  <div class="error-page">
    <h2>Error 404</h2>
    <p>Sorry!!! Something went wrong</p>
    <p>Back to <a href="/">safety</a></p>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>
<style scoped>
.error-page {
  position: relative;
  top: 30%;
  height: 100vh;
  color: red;
  font-size: 30px;
  background-color: rgba(255, 196, 196, 0.8);
  text-align: center;
  padding: 30px;
}
</style>
