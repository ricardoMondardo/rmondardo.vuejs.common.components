<template>
  <div
    class="c-field-input"
    v-bind:class="[ error ? 'c-field-input--error' : '' ]">
    <input
      type="password"
      :placeholder="placeHolder"
      @input="updateSelf($event.target.value)"
      @focus="handleFocus()"
      @blur="handleBlur($event.target.value)"
      @keyup.enter="$emit('enter')" >
    <div v-if="error">
      {{ pMessageError }}
    </div>
  </div>
</template>

<script>

const util = require('../../util/validations.js')

export default {
  name: 'x-input-password',
  props: {
    placeHolder: {
      type: String,
      default: 'Type your password'
    },
    doValidation: {
      type: Boolean,
      default: false
    },
    minLength: {
      type: Number,
      default: 6
    },
    messageError: {
      type: String,
      default: 'Password should have at least 6 chars'
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

      if (!this.pDoValidation) return

      if ( value.length > 0 && !util.validatePassword(value, this.pMinLength - 1)) {
        this.error = true;
      }
    },
    updateSelf(value) {
      this.$emit('input', value);
    },
  }
}
</script>

