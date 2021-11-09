<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppInputControl>E-Mail Address</AppInputControl>
        <AppInputControl>Password</AppInputControl>
        <app-button :btnStyle="{inverted: LogIn}" style="margin-right: 10px" @click="LogIn = !LogIn">{{ LogIn ? 'Login' : 'Sign up' }}</app-button>
        <app-button @click="LogIn = !LogIn">Switch to {{  LogIn ? 'Sign up' : 'Login' }}</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppInputControl from "../../../components/UI/AppControlInput";
import AppButton from "../../../components/UI/AppButton";
export default {
  layout: 'admin',
  name: "index",
  components: {AppButton, AppInputControl},
  data () {
    return {
      LogIn: true
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
