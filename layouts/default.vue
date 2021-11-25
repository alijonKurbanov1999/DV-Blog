<template>
  <div>
    <the-header
      @sidenavToggle="defaultHeader = !defaultHeader"
    />
    <the-sidenav
      :show="defaultHeader"
      @close="defaultHeader = false"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "../components/Navigation/TheHeader";
import TheSidenav from "../components/Navigation/TheSidenav";

export default {
  components: {TheSidenav, TheHeader},
  data () {
    return {
      defaultHeader: false
    }
  }
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
  background-color: #ff9800;
  background-image: linear-gradient(20deg, #ff9800 1%, #8b6422 42%, #000000 100%);
}

body {
  margin: 0;
}
</style>
