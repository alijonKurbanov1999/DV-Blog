<template>
  <section class="featured-posts">
    <post-preview
      id="1"
      :post="isAdmin"
      url="4.jpg"
    />
    <post-preview
      id="2"
      :post="isAdmin"
      url="1.png"
    />
    <post-preview
      id="3"
      :post="isAdmin"
      url="4.jpg"
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
