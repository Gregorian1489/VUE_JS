<template>
    <div id="projectDetails">
      <Header></Header>
      <Banner5Component />
      <ProjectDetailsComponent />
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Banner5Component from '@/components/Banner5Component.vue'
  import ProjectDetailsComponent from '@/components/ProjectDetailsComponent.vue';
  import Footer from '../components/Footer.vue'



  
  export default {
    name: 'ProjectDetails',
    components: {
    Header,
    Footer,
    ProjectDetailsComponent,
    Banner5Component,
   
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
  