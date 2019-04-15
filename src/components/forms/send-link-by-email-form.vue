<template>
  <div class="c-form">
    <x-input-email :placeHolder="placeHolderField"
                  v-model="email"  />

    <button  class="c-button c-button--large c-button--color"
             v-on:click="sendLink" >
      {{ textButton }}
    </button>
  </div>
</template>


<script>
export default {
  name: 'x-send-link-by-email-form',
  props: {
    placeHolderField: {
      type: String,
      default: "Type something"
    },
    textButton: {
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

