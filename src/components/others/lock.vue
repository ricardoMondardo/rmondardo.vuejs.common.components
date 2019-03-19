<template>
  <div v-if="pLock">
    <div class="c-lock-icon" />
  </div>
  <div v-else>
    <div class="c-unlock-icon"></div>
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

