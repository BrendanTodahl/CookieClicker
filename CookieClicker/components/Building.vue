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
    canBuy () {
      return this.numberOfCookies >= this.cost
    }
  },
  methods: {
    buy () {
      if (this.canBuy) {
        this.numOwned++
        this.$emit('buyBuilding', this.cost)
      }
    }
  },
  data () {
    return {
      name: this.model.name,
      cost: this.model.cost,
      numOwned: this.model.numOwned
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
