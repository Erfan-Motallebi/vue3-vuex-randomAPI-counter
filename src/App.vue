<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 :style="{ color: $store.state.colorCode }">{{ $store.state.counter }}</h1>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup>
    <span class="equal">=</span>
    <span class="sqaured">{{ $store.getters.counterSquared }}</span>
  </div>
  <div class="btn">
    <button @click="$store.dispatch('increaseCounter')">+</button>
    <button @click="$store.dispatch('decreaseCounter')">-</button>
  </div>
  <label for="text">SET COLOR: </label>
  <input id="text" type="text" v-model="setColorCode" />
</template>

<script>
export default {
  name: "App",
  computed: {
    setColorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
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
.counter-squared {
  font-size: 35px;
  margin: 50px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.sqaured {
  text-decoration: underline;
}
.equal {
  color: red;
  display: inline-block;
  margin: 0 14px;
}
input[type|="text"] {
  margin: 15px;
}
</style>
