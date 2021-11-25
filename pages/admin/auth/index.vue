<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <nuxt-link to="/">Вернуться в главную</nuxt-link>
      <form @submit.prevent="SubmitAuth">
        <AppControlInput v-model="email">Электронный адрес</AppControlInput>
        <AppControlInput controlType="password" v-model="password">Пароль</AppControlInput>
        <app-button btnStyle="inverted" style="margin-right: 10px" type="submit">Войти</app-button>
        <app-button type="submit">Зарегистрироваться</app-button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'admin',
  name: "index",
  data () {
    return {
      logIn: true,
      email: '',
      password: ''
    }
  },
  methods: {
    SubmitAuth() {
      this.$store.dispatch('authenticatherUser', {
        logIn: this.logIn,
        email: this.email,
        password: this.password
      })
      .then(()=> {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: #ff9800;
  background-image: linear-gradient(20deg, #ff9800 1%, #8b6422 42%, #000000 100%);
}
.auth-container {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: 100px auto;
  padding: 10px;
}
a {
  position: absolute;
  text-decoration: none;
  color: black;
  top: -24px;
  right: 0;
}
a:hover {
  opacity: 0.5;
}
</style>
