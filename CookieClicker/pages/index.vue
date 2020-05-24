<template>
  <div class="wrapper">
    <div class="sidebar">
      <buildingList />
    </div>
    <div class="content">
      <cookie />
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
