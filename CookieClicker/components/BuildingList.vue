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

      let cps = 0
      this.$store.getters.buildingsOwned.forEach((building) => {
        const buildingInfo = this.buildings.find(x => x.name === building.name)
        cps += buildingInfo ? building.numOwned * buildingInfo.cps : 0
      })

      this.cpsInterval = setInterval(() => {
        this.$store.dispatch('addCookie', {
          amount: cps
        })
      }, 1000)
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
