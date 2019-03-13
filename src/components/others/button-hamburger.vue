<template>
  <button style="border: none; background: none;">
    <div class="c-button-hamburger"
          v-on:click="click" >
      <div class="c-button-hamburger__bar1"></div>
      <div class="c-button-hamburger__bar2"></div>
      <div class="c-button-hamburger__bar3"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'x-buttonhamburger',
  methods: {
    click: function(e) {

      const parent = e.target.children.length > 0 ? e.target : e.target.parentElement

      if (parent != undefined && parent.children.length > 0) {
        if ( !this.$store.state.UIControl.showTopMenu ) {
          parent.children[0].classList.add('c-button-hamburger__bar1--on')
          parent.children[1].classList.add('c-button-hamburger__bar2--on')
          parent.children[2].classList.add('c-button-hamburger__bar3--on')
        } else {
          parent.children[0].classList.remove('c-button-hamburger__bar1--on')
          parent.children[1].classList.remove('c-button-hamburger__bar2--on')
          parent.children[2].classList.remove('c-button-hamburger__bar3--on')
        }
      }

      this.$store.commit('openTopMenu', !this.$store.state.UIControl.showTopMenu)

    }
  }
}
</script>
