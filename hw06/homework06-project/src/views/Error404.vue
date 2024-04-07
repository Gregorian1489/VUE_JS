<template>
    <div class="error404">
        <HeaderComponent/>
        <div class="container">
            <h1>404</h1>
            <h1>There Are No Such Design</h1>
            <router-link to="/">Home</router-link>
        </div>
        <FooterComponent/>
    </div>
        
</template>
<script>
import FooterComponent from '@/components/Footer.vue';
  import HeaderComponent from '@/components/Header.vue';
export default{
    name:'Error404',
    components: {
      HeaderComponent,
      FooterComponent
  },
    
}</script>
<style lang="scss" scoped>
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';
.container{
margin-top: 200px;
margin-bottom: 200px;
@include font_DM(30px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}</style>