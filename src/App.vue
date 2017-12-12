<template>
  <div id="app">
    <div>
      <img class="bgp" src="./assets/img/bgp.jpg">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.bgp {
  width: 100%;
  height: 300px;
  z-index: 10;
}
</style>
