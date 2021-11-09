<template>
  <form @submit.prevent="Save">
    <AppControlInput v-model="editedPost.name">Author name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail link</AppControlInput>
    <label>Content</label>
    <AppControlInput controlType="textarea" v-model="editedPost.content"/>
    <app-button type="submit" btnStyle="inverted" style="margin-right: 10px">Save</app-button>
    <app-button btnStyle="cancel" @click="back">Cancel</app-button>
  </form>
</template>

<script>
import AppButton from "@/components/UI/AppButton";
import AppControlInput from "@/components/UI/AppControlInput";

export default {
  name: "AdminPostForm",
  components: {AppButton, AppControlInput },
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
        name: '',
        title: '',
        thumbnail:'',
        content: ''
      }
    }
  },
  methods: {
    Save () {
      console.log('name: ', this.editedPost.name)
      console.log('title: ', this.editedPost.title)
      console.log('link: ', this.editedPost.thumbnail)
      console.log('content: ', this.editedPost.content)
      console.log('successfully!')
    },
    back () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
