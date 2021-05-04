<template>
  <nav>
    <h3 class="sidebar-title">
      Buildings
    </h3>

    <ul class="building-list list-unstyled">
      <li v-for="building in buildings" :key="building.name">
        <building :model="building" @updateAutoClick="updateAutoClick" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { Decimal } from 'decimal.js'
import Building from '~/components/Building.vue'
import buildingInfo from '~/data/buildingInfo'

export default {
  components: {
    Building
  },
  data () {
    return {
      buildings: buildingInfo.metaData,
      cpsInterval: null
    }
  },
  methods: {
    updateAutoClick () {
      if (this.cpsInterval) {
        clearInterval(this.cpsInterval)
      }

      // todo: the real cookie clicker seems to update the number on the screen as soon as it's a new whole number.
      // meaning the refresh rate seems to be equal to the cps. Does this have a max?
      //  - probably not, but at > 1mil, we start show 1.001 million etc.

      // todo: move this out. It doesn't belong here.
      let cps = new Decimal(0)
      this.$store.getters.buildingsOwned.forEach((building) => {
        const buildingInfo = this.buildings.find(x => x.name === building.name)
        const amountToAdd = buildingInfo ? building.numOwned.times(buildingInfo.baseCps) : new Decimal(0)
        cps = cps.plus(amountToAdd)
      })

      cps = cps.toFixed(1)

      this.$store.dispatch('setCookiesPerSecond', {
        cookiesPerSecond: new Decimal(cps)
      })

      // todo: need to rework this. when cps gets very high, calculation isn't working due to intervalTime being 0.0
      const intervalTime = new Decimal(1000).dividedBy(cps).toFixed(1)
      this.cpsInterval = setInterval(() => {
        this.$store.dispatch('addCookie', {
          amount: new Decimal(1) // cps
        })
      }, intervalTime)
    }
  }
}
</script>

<style>
.sidebar-title {
  margin: 5px;
}

.building-list li:first-of-type {
  border-top: 1px solid black;
}
</style>
