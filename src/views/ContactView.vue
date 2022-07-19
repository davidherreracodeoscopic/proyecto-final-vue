<template>
  <div>
    <h1>Contact page</h1>
    <div class="contact-form">
      <input type="text" name="c_name" placeholder="Name" v-model="c_name" />
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <textarea name="message" id="" cols="30" rows="10" placeholder="Message" v-model="message"></textarea>
      <BaseButton :disabled="button_disabled">Submit</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
    data() {
        return {};
    },
    computed: {
        c_name: {
          get() {
            return this.$store.state.contactModule.c_name;
          },
          set(value) {
            this.$store.commit('set_c_name',value)
          }
        },
        email: {
          get() {
            return this.$store.state.contactModule.email;
          },
          set(value) {
            this.$store.commit('set_email',value)
          }
        },
        message: {
          get() {
            return this.$store.state.contactModule.message;
          },
          set(value) {
            this.$store.commit('set_message',value)
          }
        },
        button_disabled: function() {
          return this.c_name=='' || this.email=='' || this.message=='';
        }
    },
    components: { BaseButton }
}
</script>

<style scoped>
.contact-form{
  display:flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}
</style>