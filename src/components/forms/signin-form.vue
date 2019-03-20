<template>
  <div class="c-login-form">
    <x-input-email
      pPlaceHolder="Email"
      v-model="email"  />

    <x-input-password
      pPlaceHolder="Password"
      pDoValidation
      :pMinLength="pMinLength"
      :pMessageError="pMessageError"
      v-model="password" />

    <x-input-password
      pPlaceHolder="Type your password again"
      v-model="repassword"
      v-on:enter="signin" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="signin" >
      Sign in
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-signin-form',
  props: {
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
      email: "",
      password: "",
      repassword: ""
    }
  },
  methods: {
    signin: function() {

      if (this.email.length <= 0) {
        this.$emit('error', "Email cannot be null")
        return false
      }

      if (this.password.length <= 0) {
        this.$emit('error', "Password cannot be null")
        return false
      }

      if (this.password != this.repassword) {
        this.$emit('error', "Both Passwords are not the same")
        return false
      }

      this.$emit('signin', this.email, this.password)
    }
  }
}
</script>

