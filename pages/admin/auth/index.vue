<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="SubmitAuth">
        <AppControlInput v-model="email">E-Mail Address</AppControlInput>
        <AppControlInput v-model="password">Password</AppControlInput>
        <app-button btnStyle="inverted" style="margin-right: 10px" type="submit">{{ logIn ? 'Login' : 'Sign up' }}</app-button>
        <app-button @click="logIn = !logIn">Switch to {{  logIn ? 'Sign up' : 'Login' }}</app-button>
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
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
