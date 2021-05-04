<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div class="bg-red-400"><i class="fas fa-bars"></i></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    api.test().then(res => console.log(res.data));
  }
}
</script>

<style>

</style>
