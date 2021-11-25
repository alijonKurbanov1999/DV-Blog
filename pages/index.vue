<template>
  <div class="home-page">
    <section class="intro">
      <img class="intro__img" src="../assets/img/javascript-word-cloud.jpg" alt="javascript-word-cloud.img">
      <div class="intro__background"></div>
    </section>
    <posts-list :posts="loadedPosts"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // asyncData(context, callback) {
  //   // console.log('The context: ', context.store)
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //         {id: '1', title: 'The title', preview: 'The preview', img: '1.png'},
  //         {id: '2', title: 'The title', preview: 'The preview', img: '4.jpg'},
  //         {id: '3', title: 'The title', preview: 'The preview', img: '1.png'},
  //         {id: '4', title: 'The title', preview: 'The preview', img: '1.png'}
  //       ]
  //     })
  //   }, 2500)
  // },
}
</script>

<style>
.intro {
  height: 400px;
  position: relative;
  text-align: center;
  /*padding: 30px;*/
  box-sizing: border-box;
  /*background-image: url("../assets/img/javascript-word-cloud.jpg");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: 80%;*/
}
.intro__img {
  width: 100%;
  height: 100%;
}
.intro__background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #000000;
  background-color: rgba(255, 164, 0, 0.3);
  -webkit-box-shadow: inset 0px 0px 117px 91px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0px 0px 117px 91px rgba(0,0,0,0.75);
  box-shadow: inset 0px 0px 117px 91px rgba(0,0,0,0.75);
}
@media (max-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

/*.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; !* 1 *!
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}*/
</style>
