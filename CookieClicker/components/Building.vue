<template>
  <span class="building" @click="buy">{{ name }} - {{ costDisplay }} - {{ numOwned }}</span>
</template>

<script>
import { Decimal } from 'decimal.js'
import NumberFormatter from '../mixins/NumberFormatter'

export default {
  mixins: [NumberFormatter],
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
      const numOwned = this.numOwned
      const oneFive = new Decimal(1.15)
      const zeroFive = new Decimal(0.15)
      return Decimal.ceil((this.model.baseCost.times(oneFive.pow(numOwned.plus(1)).minus(oneFive.pow(numOwned)))).dividedBy(zeroFive))
    },
    costDisplay () {
      const numOwned = this.numOwned
      const oneFive = new Decimal(1.15)
      const zeroFive = new Decimal(0.15)
      return this.toReadableForm(Decimal.ceil((this.model.baseCost.times(oneFive.pow(numOwned.plus(1)).minus(oneFive.pow(numOwned)))).dividedBy(zeroFive)))
    },
    numOwned () {
      const building = this.$store.getters.buildingsOwnedByName(this.model.name)
      return building ? building.numOwned : new Decimal(0)
    },
    canBuy () {
      return this.$store.getters.numberOfCookies.comparedTo(this.cost) >= 0
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
