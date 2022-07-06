<template>
  <div>
    <h1>Lista de Posts Publicados</h1>
    <transition name="fade">
      <p v-if="showWaitingMessage"><b><font color="red" size="50">CARGANDO...</font></b></p>
    </transition>
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    showWaitingMessage() {
      return this.$store.state.posts.length == 0;
    }
  },
  methods: {},
  async mounted() {
    await this.$store.dispatch('fetchPosts');
  }
};
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
  transition: 0.5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>