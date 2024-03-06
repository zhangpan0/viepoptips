<template>
  <div id="app">
    <div>
    颜色拾取器:<colorPicker v-model="color" @change="changeColor"></colorPicker>
    </div>
    <div>
      <ieTips></ieTips>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      color:'#0066ff'
    }
  },
  components: {
    
  },
  methods:{
    changeColor (e) {
      console.log('e',e);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
