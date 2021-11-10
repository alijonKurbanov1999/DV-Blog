<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPosts.title }} </h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPosts.updatedDate }}</div>
        <div class="post-detail">Written by NAME {{loadedPosts.author }}</div>
      </div>
      <p class="post-content">Content of the post:  {{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  asyncData(context) {
    return axios.get(`https://resume-project-17900-default-rtdb.firebaseio.com/posts/${context.route.params.id}.json`)
      .then(res => {
        return { loadedPosts: res.data }
      })
      .catch(er => console.log('ERROR: ', context.error))
  }
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

