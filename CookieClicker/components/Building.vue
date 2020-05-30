<template>
  <div class="building" @click="buy">{{ name }} - {{ cost }} - {{ numOwned }}</div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true
    },
    numberOfCookies: {
      type: Number,
      required: true
    }
  },
  computed: {
    name () {
      return this.model.name
    },
    cost () {
      return this.model.cost
    },
    numOwned () {
      return this.model.numOwned
    },
    canBuy () {
      return this.numberOfCookies >= this.cost
    }
  },
  methods: {
    buy () {
      if (this.canBuy) {
        this.$emit('buyBuilding', {
          name: this.name,
          cost: this.cost
        })
      }
    }
  }
}
</script>

<style>
.building {
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  user-select: none;
}
</style>
