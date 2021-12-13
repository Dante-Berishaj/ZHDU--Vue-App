<template>
  <div class="city">
    <img v-bind:src="city.img" class="city-img">
    <div class="city-name">{{ city.name }}</div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: {}
  }
}
</script>

<style>
.city {
  height: 20rem;
  position: relative;
  margin: 1rem;
  color: white;
}

.city-name {
  font-size: 2.3rem;
  position: absolute;
  top: 60%;
}

.city-img {
  width: 100%;
  max-height: 100%
}
</style>