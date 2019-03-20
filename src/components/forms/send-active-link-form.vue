<template>
  <div class="c-login-form">
    <x-input-email :pPlaceHolder="pPlaceHolderField"
                  v-model="email"  />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="sendActiveLink" >
      {{ pTextButton }}
    </button>
  </div>
</template>


<script>
export default {
  name: 'x-send-active-link-form',
  props: {
    pPlaceHolderField: {
      type: String,
      default: "Type something"
    },
    pTextButton: {
      type: String,
      default: "Send link"
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

