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
import NumberFormatter from '../mixins/NumberFormatter'

export default {
  mixins: [NumberFormatter],
  computed: {
    numberOfCookies () {
      return this.toReadableForm(this.$store.getters.numberOfCookies)
    },
    cookiesPerSecond () {
      return this.toReadableForm(this.$store.getters.cookiesPerSecond)
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
