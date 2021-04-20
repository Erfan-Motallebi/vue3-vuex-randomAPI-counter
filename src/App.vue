<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ $store.state.counter }}</h1>
  <div class="btn">
    <button @click="$store.dispatch('increaseCounter')">+</button>
    <button @click="$store.dispatch('decreaseCounter')">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn button {
  width: 100px;
  font-size: 30px;
  margin: 0 5px;
}
</style>
