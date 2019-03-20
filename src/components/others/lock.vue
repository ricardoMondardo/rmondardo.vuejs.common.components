<template>
  <div v-bind:class="[ pUnlock ? 'c-unlock-icon' : 'c-lock-icon' ]" />
</template>

<script>
export default {
  name: "x-lock",
  props: {
    pUnlock: {
      type: Boolean,
      default: false
    }
  }
}
</script>

