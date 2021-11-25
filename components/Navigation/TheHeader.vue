<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">JavaScript</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Главный</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">Все статьи</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">О нас</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Админ</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*background-color: #FFA300FF;*/
  background: -webkit-linear-gradient(0deg, rgb(0, 0, 0), rgb(254, 152, 0) 100%);
  background: -moz-linear-gradient(0deg, rgb(0, 0, 0), rgb(254, 152, 0) 100%);
  background: linear-gradient(0deg, rgb(0, 0, 0), rgb(254, 152, 0) 100%);

  -webkit-box-shadow: 0px 30px 81px 36px rgba(0,0,0,0.53);
  -moz-box-shadow: 0px 30px 81px 36px rgba(0,0,0,0.53);
  box-shadow: 0px 30px 81px 36px rgba(0,0,0,0.53);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: #000000FF;
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  font-weight: 900;
  color: #000000FF;
  font-size: 1.2rem;
}

.nav-item a:hover{
  color: #b46c00;
}
</style>
