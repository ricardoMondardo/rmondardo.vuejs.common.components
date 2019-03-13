<template>
  <input class="input"
        type="text"
        :placeholder="pPlaceHolder"
        @input="updateSelf($event.target.value)" >
</template>

<script>
export default {
  name: 'x-input-email',
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
    }
  }
}
</script>

