import Vuex from 'vuex'
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPost(state, postArray) {
        state.loadedPosts = postArray
      },
      addPost(state, addPost) {
        state.loadedPosts.push(addPost)
      },
      editPost(state, editPost) {
        const indexPost = state.loadedPosts.findIndex(el => el.id === editPost.id)
        state.loadedPosts[indexPost] = editPost
      }
    },
    actions: {
      nuxtServerInit(vuexcommit, context) {
        return axios.get(process.env.baseUrl + '/posts.json')
          .then(res => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({...res.data[key], id: key})
            }
            vuexcommit.commit('setPost', postArray)
          })
          .catch(er => console.log('The error of vuex is: ', context.error(er)))
      },
      addPost(vuexcontext, postData) {
        const addPost = {...postData, updatedDate: new Date()}
        return axios.post(process.env.baseUrl + '/posts.json', addPost)
          .then(res =>
          {
            vuexcontext.commit('addPost', {...addPost, id: res.data.name})
          })
          .catch(error => console.error('Ошибкa: ', error))
      },
      editPosts(vuexcontext, editData) {
        return axios.put(`${process.env.baseUrl}/posts/${editData.id}.json`, editData)
          .then(res => {
            vuexcontext.commit('editPost', editData)
          })
          .catch(er => console.log('ERROR: ', er))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
