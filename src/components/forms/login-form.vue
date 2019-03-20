<template>
  <div class="c-login-form">
    <x-input-email
      pPlaceHolder="Email"
      v-model="email"  />

    <x-input-password
      pPlaceHolder="password"
      v-model="password"
      v-on:enter="login" />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="login" >
      Log in
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-login-form',
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

