<template>
  <input class="input"
        type="password"
        :placeholder="pPlaceHolder"
        @input="updateSelf($event.target.value)"
        @keyup.enter="$emit('enter')" >
</template>

<script>
export default {
  name: 'x-input-password',
  props: {
    pPlaceHolder: {
      type: String,
      default: 'Type some text'
    }
  },
  methods: {
    updateSelf(value) {
      //Validation
      this.$emit('input', value);
    },
  }
}
</script>

