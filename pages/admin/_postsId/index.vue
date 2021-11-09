<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :loadingPost="dataAdmin"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
export default {
  layout: 'admin',
  name: "index",
  components: {AdminPostForm},
  data () {
    return {
      dataAdmin: {
        name: 'Alijon',
        title: 'Course about nuxt',
        thumbnail: 'http://localhost:3000/something',
        content: 'The best course for beginers!'
      }
    }
  }
}
</script>

<style scoped>
.admin-post-page {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
