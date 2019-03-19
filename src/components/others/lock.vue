<template>
  <div v-bind:class="[ pLock ? 'c-lock-icon' : 'c-unlock-icon' ]" />
</template>

<script>
export default {
  name: "x-lock",
  props: {
    pLock: {
      type: Boolean,
      default: false
    }
  }
}
</script>

