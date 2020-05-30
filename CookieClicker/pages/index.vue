<template>
  <div class="wrapper">
    <div class="sidebar">
      <buildingList :number-of-cookies="numberOfCookies" :buildings="buildings" @buyBuilding="buyBuilding" />
    </div>
    <div class="content">
      <cookie :number-of-cookies="numberOfCookies" @addCookie="addCookie" />
    </div>
  </div>
</template>

<script>
import BuildingList from '~/components/BuildingList.vue'
import Cookie from '~/components/Cookie.vue'

export default {
  components: {
    BuildingList,
    Cookie
  },
  data () {
    return {
      numberOfCookies: 0,
      buildings: [{
        name: 'Mouse',
        cost: 1,
        cps: 1,
        numOwned: 0
      }, {
        name: 'Grandma',
        cost: 2,
        cps: 2,
        numOwned: 0
      }],
      cpsInterval: null
    }
  },
  methods: {
    addCookie () {
      this.numberOfCookies++
    },
    autoAddCookie () {
      if (this.cpsInterval) {
        clearInterval(this.cpsInterval)
      }

      let cps = 0
      this.buildings.forEach((building) => { cps += (building.numOwned * building.cps) })

      this.cpsInterval = setInterval(function () {
        this.numberOfCookies += cps
      }.bind(this), 1000)
    },
    buyBuilding (buildingInfo) {
      this.numberOfCookies -= buildingInfo.cost
      const boughtBuilding = this.buildings.filter(building => building.name === buildingInfo.name)
      if (boughtBuilding && boughtBuilding.length && boughtBuilding[0]) {
        boughtBuilding[0].numOwned++
      }

      this.autoAddCookie()
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  align-items: stretch;
}

.sidebar {
  width: 250px;
  border-right: 1px solid black;
}

.content {
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
