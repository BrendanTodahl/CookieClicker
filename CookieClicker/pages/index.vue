<template>
  <div class="wrapper">
    <div class="sidebar">
      <buildingList :numberOfCookies="numberOfCookies" :buildings="buildings" @buyBuilding="buyBuilding" />
    </div>
    <div class="content">
      <cookie :numberOfCookies="numberOfCookies" @addCookie="addCookie" />
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
  methods: {
    addCookie () {
      this.numberOfCookies++
    },
    buyBuilding (cost) {
      this.numberOfCookies -= cost
    }
  },
  data () {
    return {
      numberOfCookies: 0,
      buildings: [{
        name: 'Mouse',
        cost: 1,
        numOwned: 0
      }, {
        name: 'Grandma',
        cost: 2,
        numOwned: 0
      }]
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
