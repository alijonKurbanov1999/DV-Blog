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
      }
    },
    actions: {
      nuxtServerInit(vuexcommit, context) {
        return axios.get('https://resume-project-17900-default-rtdb.firebaseio.com/posts.json')
          .then(res => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({...res.data[key], id: key})
            }
            // console.log('Responsible: ', postArray)
            vuexcommit.commit('setPost', postArray)
          })
          .catch(er => console.log('The error of vuex is: ', context.error(er)))
      },
      // setPosts(vuexContext, post) {
      //   vuexContext.commit('setPost', post)
      // }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
