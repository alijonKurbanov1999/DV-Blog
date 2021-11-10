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
  // data () {
  //   return {
  //     dataAdmin: {
  //       author: 'Alijon',
  //       title: 'Course about nuxt',
  //       thumbnail: 'http://localhost:3000/something',
  //       content: 'The best course for beginers!'
  //     }
  //   }
  // },
  asyncData(context) {
    return axios.get(`https://resume-project-17900-default-rtdb.firebaseio.com/posts/${context.route.params.postsId}.json`)
      .then(res => {
        return { dataAdmin: res.data }
      })
      .catch(er => console.log('ERROR: ', context.error(er)))
  },
  // computed: {
  //   dataAdmin() {
  //     return this.$store.getters.loadedPosts
  //   }
  // },
  methods: {
    editSubmit(editData) {
      return axios.put(`https://resume-project-17900-default-rtdb.firebaseio.com/posts/${this.$route.params.postsId}.json`, editData)
        .then(res => console.log('RESPONSE: ', res))
        .catch(er => console.log('ERROR: ', er))
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
