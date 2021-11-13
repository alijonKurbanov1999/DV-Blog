<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button
        @click="createPost"
      >
        Create Post
      </app-button>
      <app-button style="margin-left: 10px" @click="logOut">
        Log out
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <posts-list isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import auth from "@/middleware/auth";

export default {
  name: "index",
  middleware: 'auth',
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    createPost() {
      this.$router.push('/admin/new-post')
    },
    logOut() {
      this.$store.dispatch('logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
