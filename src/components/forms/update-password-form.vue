<template>
  <div class="c-form">

    <x-input-password
      :placeHolder="placeHolderPassword"
      doValidation
      :minLength="minLength"
      :messageError="messageError"
      v-model="password" />

    <x-input-password
      :placeHolder="placeHolderSecondPassword"
      v-model="repassword"
      v-on:enter="updatepass" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="updatepass" >
      {{ textButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-update-password-form',
  props: {
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
      password: "",
      repassword: ""
    }
  },
  methods: {
    updatepass: function() {

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

