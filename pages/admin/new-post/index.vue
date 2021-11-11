<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @save="SubmitData"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: 'admin',
  name: "index",
  components: {
    AdminPostForm
  },
  methods: {
    SubmitData(postData) {
      this.$store.dispatch('addPost', postData)
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
