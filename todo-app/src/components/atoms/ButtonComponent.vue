<template>
  <button :class="buttonClass" @click="doSomething">{{ buttonName }}</button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: 'Button Name'
    },
    buttonClass: {
      type: String,
      default: 'btn btn-primary'
    }
  },
  methods: {
    doSomething() {
      this.$emit('event-click')
    }
  }
}
</script>
