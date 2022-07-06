import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },
  getters: {},
  mutations: {
      SET_POSTS: (state, posts) => state.posts = posts
  },
  actions: {
      async fetchPosts({ commit }) {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          commit('SET_POSTS', response.data);
      }
  }
});

export default store;
