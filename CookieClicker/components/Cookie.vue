<template>
  <div>
    <button type="button" class="btn btn-primary" @click="click">
      Cookie
    </button>
    <div>Cookies: {{ numberOfCookies }}</div>
  </div>
</template>

<script>
export default {
  props: {
    numberOfCookies: {
      type: Number,
      required: true
    }
  },
  methods: {
    click () {
      this.$emit('addCookie')
    }
  }
}
</script>

<style></style>
