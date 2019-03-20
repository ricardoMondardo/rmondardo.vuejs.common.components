<template>
  <div class="c-login-form">
    <x-input-email pPlaceHolder="Email"
                  v-model="email"  />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="sendActiveLink" >
      Send link
    </button>
  </div>
</template>


<script>
export default {
  name: 'x-send-active-link-form',
  props: {
    pPlaceHolder: {
      type: String,
      default: "Type something"
    }
  },
  data: () => {
    return {
      email: ""
    }
  },
  methods: {
    sendActiveLink: function() {

      if (this.email.length <= 0) {
        this.$emit('error', "Email cannot be null")
        return false
      }

      this.$emit('sendactivelink', this.email)
    }
  }
}
</script>

