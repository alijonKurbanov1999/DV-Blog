<template>
  <section class="featured-posts">
    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :content="post.content"
      :thumbnail="post.thumbnail"
      :post="isAdmin"
    />
  </section>
</template>

<script>
import PostPreview from "./PostPreview";

export default {
  name: "PostsList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
