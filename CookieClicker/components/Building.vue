<template>
  <span class="building" @click="buy">{{ name }} - {{ cost }} - {{ numOwned }}</span>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
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
      const building = this.$store.getters.buildingsOwnedByName(this.model.name)
      return building ? building.numOwned : 0
    },
    canBuy () {
      return this.$store.getters.numberOfCookies >= this.cost
    }
  },
  methods: {
    buy () {
      if (this.canBuy) {
        this.$store.dispatch('buyBuilding', {
          name: this.name,
          cost: this.cost
        })

        this.$emit('updateAutoClick')
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
