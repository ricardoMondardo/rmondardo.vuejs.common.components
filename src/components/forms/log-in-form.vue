<template>
  <div class="c-login-form">
    <div class="c-login-form__title">
      {{ welcomeMsg }}
    </div>
    <x-input-email placeholder="Email"
             v-model="email"  />

    <x-input-password placeholder="password"
             v-model="password"
             v-on:enter="login" />

    <button  class="button button--large button--color"
             v-on:click="login" >
      Log in
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-login',
  props: {
    welcomeMsg: {
      type: String,
      default: "Welcome"
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
      console.log(this.email)
      this.$emit('login', this.email, this.password)
    }
  }
}
</script>
