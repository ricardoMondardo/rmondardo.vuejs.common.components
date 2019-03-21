<template>
  <div class="c-form">

    <x-input-password
      :pPlaceHolder="pPlaceHolderPassword"
      pDoValidation
      :pMinLength="pMinLength"
      :pMessageError="pMessageError"
      v-model="password" />

    <x-input-password
      :pPlaceHolder="pPlaceHolderSecondPassword"
      v-model="repassword"
      v-on:enter="signin" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="signin" >
      {{ pTextButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-update-password-form',
  props: {
    pPlaceHolderPassword: {
      type: String,
      default: "Type your password"
    },
    pPlaceHolderSecondPassword: {
      type: String,
      default: "Type your password"
    },
    pTextButton: {
      type: String,
      default: "Log in"
    },
    pMinLength: {
      type: Number,
      default: 6
    },
    pMessageError: {
      type: String,
      default: 'Password should have at least 6 chars'
    }
  },
  data: () => {
    return {
      password: "",
      repassword: ""
    }
  },
  methods: {
    signin: function() {

      if (this.password.length <= 0) {
        this.$emit('error', "Password cannot be null")
        return false
      }

      if (this.password != this.repassword) {
        this.$emit('error', "Both Passwords are not the same")
        return false
      }

      this.$emit('update', this.email, this.password)
    }
  }
}
</script>

