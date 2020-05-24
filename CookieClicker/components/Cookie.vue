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
  data () {
    return {
      numberOfCookies: 0
    }
  },
  methods: {
    click () {
      this.numberOfCookies++
    }
  }
}
</script>

<style></style>
