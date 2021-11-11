<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :loadingPost="dataAdmin" @save="editSubmit"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";
export default {
  layout: 'admin',
  name: "index",
  components: {AdminPostForm},
  asyncData(context) {
    return axios.get(`https://resume-project-17900-default-rtdb.firebaseio.com/posts/${context.route.params.postsId}.json`)
      .then(res => {
        return { dataAdmin: {...res.data, id: context.params.postsId} }
      })
      .catch(er => console.log('ERROR: ', context.error(er)))
  },
  methods: {
    editSubmit(editData) {
      this.$store.dispatch('editPosts', editData)
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
