<template>
  <div id="app">
    <Header></Header>
    <banner></banner>
    <project></project>
    <counter></counter>
    <blog></blog>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import banner from './components/banner.vue'
import project from './components/project.vue'
import counter from './components/counter.vue'
import blog from './components/blog.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    banner,
    project,
    counter,
    blog,
    Footer,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

</style>
