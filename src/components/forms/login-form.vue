<template>
  <div class="c-form">
    <x-input-email
      :pPlaceHolder="pPlaceHolderEmail"
      v-model="email"  />

    <x-input-password
      :pPlaceHolder="pPlaceHolderPassword"
      v-model="password"
      v-on:enter="login" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="login" >
      {{ pTextButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-login-form',
  props: {
    pPlaceHolderEmail: {
      type: String,
      default: "Type your email"
    },
    pPlaceHolderPassword: {
      type: String,
      default: "Type your password"
    },
    pTextButton: {
      type: String,
      default: "Log in"
    }
  },
  data: () => {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function() {

      if (this.email.length <= 0) {
        this.$emit('error', "Email cannot be null")
        return false
      }

      if (this.password.length <= 0) {
        this.$emit('error', "Password cannot be null")
        return false
      }

      this.$emit('login', this.email, this.password)
    }
  }
}
</script>

