<template>
  <div class="c-form">
    <x-input-email :pPlaceHolder="pPlaceHolderField"
                  v-model="email"  />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="sendLink" >
      {{ pTextButton }}
    </button>
  </div>
</template>


<script>
export default {
  name: 'x-send-link-by-email-form',
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
    sendLink: function() {

      if (this.email.length <= 0) {
        this.$emit('error', "Email cannot be null")
        return false
      }

      this.$emit('sendLink', this.email)
    }
  }
}
</script>

