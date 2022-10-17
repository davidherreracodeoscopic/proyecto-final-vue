<template>
  <div>
    <h2>{{this.$store.state.posts[this.$route.params.postId-1].title}}</h2>
    <p>{{this.$store.state.posts[this.$route.params.postId-1].body}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {};
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