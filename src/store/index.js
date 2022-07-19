import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import contactModule from './contact'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },
  getters: {},
  mutations: {
      set_posts(state, posts) {
        state.posts = posts
      }
  },
  actions: {
      async fetchPosts({ commit }) {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          commit('set_posts', response.data);
      }
  },
  modules: { contactModule }
});

export default store;
