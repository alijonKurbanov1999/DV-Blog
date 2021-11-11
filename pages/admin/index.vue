<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button
        @click="createPost"
      >
        Create Post
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <posts-list isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: "index",
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    createPost() {
      this.$router.push('/admin/new-post')
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
