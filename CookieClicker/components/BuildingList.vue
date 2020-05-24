<template>
  <nav>
    <h3 class="sidebar-title">Buildings</h3>

    <ul class="building-list list-unstyled">
      <li>
        <span>Item 1</span>
      </li>
      <li>
        <span>Item 2</span>
      </li>
      <li>
        <span>Item 3</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.sidebar-title {
  margin: 5px;
}

.building-list li:first-of-type {
  border-top: 1px solid black;
}

.building-list li {
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
</style>
