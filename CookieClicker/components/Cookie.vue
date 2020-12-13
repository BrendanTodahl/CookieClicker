import { Decimal } from 'decimal.js';
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
import { Decimal } from 'decimal.js'

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
        amount: new Decimal(1)
      })
    }
  }
}
</script>

<style></style>
