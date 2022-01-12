<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png" height="100">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cities">Cities</router-link></li>
        <li><router-link to="/hotels">Lodging</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/tests">Test</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  name: "NavBar",
}
</script>

<style>
header {
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #ccc;
}

header nav {
  margin-left: auto;
}

header nav ul {
  list-style: none;
}

header nav ul li {
  display: inline-flex;
  margin-left: 1rem;
}

header a {
  text-decoration: none;
}
</style>
