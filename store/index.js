import Vuex from 'vuex'
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
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
        return axios.post(process.env.baseUrl + '/posts.json?auth='+vuexcontext.state.token, addPost)
          .then(res =>
          {
            vuexcontext.commit('addPost', {...addPost, id: res.data.name})
          })
          .catch(error => console.error('Ошибкa: ', error))
      },
      editPosts(vuexcontext, editData) {
        return axios.put(`${process.env.baseUrl}/posts/${editData.id}.json?auth=${vuexcontext.state.token}`, editData)
          .then(res => {
            vuexcontext.commit('editPost', editData)
          })
          .catch(er => console.log('ERROR: ', er))
      },
      authenticatherUser(vuexcontext, authData) {
        let logAuth = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ process.env.baseIpiKey;
        console.log('link: ', logAuth)
        if(!authData.logIn) {
          logAuth = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ process.env.baseIpiKey
        }
        console.log('LOGIN: ', authData.logIn)
        return axios.post(logAuth, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(result => {
            vuexcontext.commit('setToken', result.data.idToken)
          })
          .catch(e => console.log('Error: ', e))
      },
      logOut(vuexcontext) {
        vuexcontext.commit('clearToken')
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      token(state) {
        return state.token
      },
      isAuthenticate(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
