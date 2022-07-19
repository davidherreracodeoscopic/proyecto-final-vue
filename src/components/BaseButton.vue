<template>
<button class="button" :disabled="disabled">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        disabled: {
          type: Boolean,
          default: true
        }
    }
}
</script>

<style scoped>
  .button {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    border-radius: 3px;
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    transition: 0.3s;
  }

</style>
