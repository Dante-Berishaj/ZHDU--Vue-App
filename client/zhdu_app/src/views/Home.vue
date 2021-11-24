<template>
  <div class="home">
    <img alt="Our logo" src="../assets/logo.png">
    <HelloWorld msg="OUR Initial Project"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
