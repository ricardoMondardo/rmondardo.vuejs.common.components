<template>
  <div class="c-form">
    <x-input-email
      :placeHolder="placeHolderEmail"
      v-model="email"  />

    <x-input-password
      :placeHolder="placeHolderPassword"
      doValidation
      :minLength="minLength"
      :messageError="messageError"
      v-model="password" />

    <x-input-password
      :placeHolder="placeHolderSecondPassword"
      v-model="repassword"
      v-on:enter="signin" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="signin" >
      {{ textButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-signin-form',
  props: {
    placeHolderEmail: {
      type: String,
      default: "Type your email"
    },
    placeHolderPassword: {
      type: String,
      default: "Type your password"
    },
    placeHolderSecondPassword: {
      type: String,
      default: "Type your password"
    },
    textButton: {
      type: String,
      default: "Log in"
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

