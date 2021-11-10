<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @save="SubmitData"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: 'admin',
  name: "index",
  components: {
    AdminPostForm
  },
  methods: {
    SubmitData(postData) {
      axios.post('https://resume-project-17900-default-rtdb.firebaseio.com/posts.json', {...postData, updatedDate: new Date()})
        .then( el => console.log('result: ', el))
        .catch(error => console.error('Ошибкa: ', error))
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
