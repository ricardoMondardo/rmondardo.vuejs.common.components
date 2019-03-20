<template>
  <div
    class="c-field-input"
    v-bind:class="[ error ? 'c-field-input--error' : '' ]">
    <input
      type="text"
      :placeholder="pPlaceHolder"
      @input="updateSelf($event.target.value)"
      @focus="handleFocus()"
      @blur="handleBlur($event.target.value)" >
    <div v-if="error">
      {{ pMessageError }}
    </div>
  </div>
</template>

<script>

const util = require('../../util/validations.js')

export default {
  name: 'x-input-email',
  props: {
    pPlaceHolder: {
      type: String,
      default: 'Type your email'
    },
    pMessageError: {
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

