<template>
  <div
    class="c-field-input"
    v-bind:class="[ error ? 'c-field-input--error' : '' ]">
    <input
      type="text"
      :placeholder="placeHolder"
      @input="updateSelf($event.target.value)"
      @focus="handleFocus()"
      @blur="handleBlur($event.target.value)" >
    <div v-if="error">
      {{ emailNotValidMessage }}
    </div>
  </div>
</template>

<script>

const util = require('../../util/validations.js')

export default {
  name: 'x-input-email',
  props: {
    placeHolder: {
      type: String,
      default: 'Type your email'
    },
    emailNotValidMessage: {
      type: String,
      default: 'Email is not valid'
    }
  },
  data: () => {
    return {
      error: false
    }
  },
  methods: {
    handleFocus() {
      this.error = false
    },
    handleBlur(value) {
      if ( value.length > 0 && !util.validateEmail(value)) {
        this.error = true
      }
    },
    updateSelf(value) {
      this.$emit('input', value);
    }
  }
}
</script>

