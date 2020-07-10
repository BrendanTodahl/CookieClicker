<template>
  <div>
    <button type="button" class="btn btn-primary" @click="click">
      Cookie
    </button>
    <div>Cookies: {{ numberOfCookies }}</div>
    <div>Per Second: {{ cookiesPerSecond }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfCookies () {
      return this.$store.getters.numberOfCookies
    },
    cookiesPerSecond () {
      return this.$store.getters.cookiesPerSecond
    }
  },
  methods: {
    click () {
      this.$store.dispatch('addCookie', {
        amount: 1
      })
    }
  }
}
</script>

<style></style>
