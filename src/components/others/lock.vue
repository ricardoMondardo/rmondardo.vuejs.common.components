<template>
  <div v-if="pLock">
    <div class="lock-icon" />
  </div>
  <div v-else>
    <div class="unlock-icon"></div>
  </div>
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

