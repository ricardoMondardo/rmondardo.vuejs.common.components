<template>
  <div class="c-login-form">
    <div class="c-login-form__title">
      {{ welcomeMsg }}
    </div>

    <x-input-email placeholder="Email"
             v-model="email"  />

    <x-input-password placeholder="password"
             v-model="password" />

    <x-input-password placeholder="repeat password"
             v-model="repassaword"
             v-on:enter="signUp" />

    <button  class="button button--large button--color"
             v-on:click="signUp" >
      Sign up
    </button>
  </div>
</template>

<script>
export default {
  name: 'x-signup',
  props: {
    welcomeMsg: {
      type: String,
      default: "Welcome"
    }
  },
  data: () => {
    return {
      email: "",
      password: "",
      repassaword: ""
    }
  },
  methods: {
    signUp: function() {
      this.$emit('signUp', this.email, this.password, this.repassaword)
    }
  }
}
</script>
