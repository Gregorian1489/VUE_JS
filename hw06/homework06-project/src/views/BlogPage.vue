<template>
    <div id="blog">
      <Header></Header>
      <Banner2></Banner2>
      <LatestPost></LatestPost>
      <News></News>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Banner2 from '../components/banner2.vue'
  import LatestPost from '../components/LatestPost.vue'
  import News from '../components/NewsComponent.vue'
  import Footer from '../components/Footer.vue'

  
  export default {
    name: 'BlogPage',
    components: {
      Header,
      Banner2,
      LatestPost,
      News,
      Footer,
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
  