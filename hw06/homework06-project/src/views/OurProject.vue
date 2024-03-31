<template>
    <div id="our_project">
      <Header></Header>
      <Banner4Component />
      <CategoriesComponent />
      <Footer></Footer>
    </div>
</template>
  
  <script>
  import Header from '../components/Header.vue'
  import Banner4Component from '../components/Banner4Component.vue'  
  import CategoriesComponent from '../components/CategoriesComponent.vue'
  import Footer from '../components/Footer.vue'

  
  export default {
    name: 'OurProject',
    components: {
    Header,
    Banner4Component,
    CategoriesComponent,
    Footer,
    CategoriesComponent
}
  }
  </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  
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
  