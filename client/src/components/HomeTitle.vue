<template>
    <div class="home-title">{{ title }}</div>
</template>

<script>
export default {
    name: "HomeTitle",
    props: {
        title: "" 
    }
}
</script>

<style>
.home-title {
  font-size: 4rem;
  font-weight: bold;
}
</style>
