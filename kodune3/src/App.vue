<template>
  <div id="app">{{msg}}</div>
  <Background/>
</template>

<script>
import Background from './components/Background';

export default {
  name: 'app',
  components: {
    Background
  },

  data() {
    return {
      msg: "Hello"
    }
  },
}
</script>

<style>
* {
  margin:0;
  padding:0;
}
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}
</style>
