<template>
  <div id="app" class="is-flex is-flex-direction-column is-justify-content-space-between">
    <Header/>
        <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/globals/Header';
import Footer from './components/globals/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
html,
body,
#app {
  height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
