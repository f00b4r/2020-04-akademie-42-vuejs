<template>
  <div id="app">
    <item-detail msg="foo"/>
    <hello-world :msg="'foo'"/>
    <hello-world :msg="foo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    'item-detail': HelloWorld,
    HelloWorld: HelloWorld,
  },
  data: function() {
    return {
      foo: 'bar'
    }
  },
  methods: {

  }
}
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
</style>
