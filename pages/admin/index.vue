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
      <posts-list isAdmin/>
    </section>
  </div>
</template>

<script>
import PostsList from "../../components/posts/PostsList";
import AppButton from "../../components/UI/AppButton";

export default {
  layout: 'admin',
  name: "index",
  components: {AppButton, PostsList},
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
