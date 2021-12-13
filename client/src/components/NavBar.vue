<template>
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">Cities</div>
    <div class="nav-item">Places</div>
    <div class="nav-item">About</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.nav-item {
  padding: 1.8rem;
}

.nav-item:hover {
  cursor: pointer;
}
</style>