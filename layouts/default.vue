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
}

body {
  margin: 0;
}
</style>
