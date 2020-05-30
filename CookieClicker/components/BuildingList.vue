<template>
  <nav>
    <h3 class="sidebar-title">
      Buildings
    </h3>

    <ul class="building-list list-unstyled">
      <li v-for="building in buildings" :key="building.name">
        <building :model="building" :number-of-cookies="numberOfCookies" @buyBuilding="buyBuilding" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Building from '~/components/Building.vue'

export default {
  components: {
    Building
  },
  props: {
    numberOfCookies: {
      type: Number,
      required: true
    },
    buildings: {
      type: Array,
      required: true
    }
  },
  methods: {
    buyBuilding (buildingInfo) {
      this.$emit('buyBuilding', buildingInfo)
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
