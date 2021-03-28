import { createStore } from 'vuex'
import comments from '@/data/comments'
import posts from '@/data/posts'

export default createStore({
  state: {
    comments,
    posts
  },
  mutations: {
    increment(state,payload){
      state.posts[payload.index].likes++;
    },
    removeComment(state,payload){
      state.comments[payload.postId].splice(payload.index,1);
    },
    addComment(state,payload){
      state.comments[payload.postId].push({text:payload.text,user:payload.author});
    }
  },
  actions: {
  },
  modules: {
  }
})
