<template>
  <div>
    <nuxt-link :to="postId">
      <article class="post-preview">
        <div
          class="post-thumbnail"
          :style="{'background-image': 'url('+ require('../../assets/img/'+ thumbnail) +')'}"
        >
        </div>
        <div class="post-content">
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    post: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postId() {
      return this.post ? '/admin/' + this.id : '/posts/'+ this.id
    }
  }
}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
.post-thumbnail {
  width: 100%;
  height: 200px;
  /*background-image: url("../../assets/img/1.png");*/
  background-position: center;
  background-size: cover;
}
.post-content {
  padding: 10px;
  text-align: center;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
