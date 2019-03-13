<template>
  <div class="field">
    <span class="field__label"> <slot name="Label" /> </span>
    {{ pValue || "[" + pTypeInfo + "]" }}
  </div>
</template>


<script>
export default {
  name: 'x-field',
  props: {
    pValue: {
      type: String,
      default: "No data has found"
    },
    pTypeInfo: {
      type: String,
      default: "No type defined"
    }
  }
}
</script>

