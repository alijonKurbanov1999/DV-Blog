<template>
  <form @submit.prevent="Save">
    <AppControlInput v-model="editedPost.author">Author name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail link</AppControlInput>
    <label>Content</label>
    <AppControlInput controlType="textarea" v-model="editedPost.content"/>
    <app-button type="submit" btnStyle="inverted" style="margin-right: 10px">Save</app-button>
    <app-button btnStyle="cancel" @click="back">Cancel</app-button>
  </form>
</template>

<script>

export default {
  name: "AdminPostForm",
  props: {
    loadingPost: {
      type: Object,
      required: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editedPost: this.loadingPost? {...this.loadingPost} :{
        author: '',
        title: '',
        thumbnail:'',
        content: ''
      }
    }
  },
  methods: {
    Save () {
      this.$emit('save', this.editedPost)
      this.back()
      console.log('name: ', this.editedPost.author)
      console.log('title: ', this.editedPost.title)
      console.log('link: ', this.editedPost.thumbnail)
      console.log('content: ', this.editedPost.content)
      console.log('successfully!')
    },
    back () {
      this.$router.push('/admin', this.editedPost)
    }
  }
}
</script>

<style scoped>

</style>
