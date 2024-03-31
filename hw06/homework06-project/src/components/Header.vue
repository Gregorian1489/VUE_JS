<template>
  <header class="header center">
        <router-link to="/">
          <img class="header__logo" src="../assets/img/Logo.svg" alt="logo">
        </router-link>
        <nav class="header__nav">
            <router-link to="/"><span class="header__nav__link">Home</span></router-link>
            <router-link to="/project"><span class="header__nav__link">Project</span></router-link>
            <router-link to="/blog"><span class="header__nav__link">Blog</span></router-link>
            <router-link to="/our_project"><span class="header__nav__link">Our Project</span></router-link>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';
.header {
    @include flex_between();
    margin-top: 50px;
    margin-bottom: 50px;
    &__nav {
        @include flex_center(40px); 
        &__link {
            color: $color_text;
            @include font_jost(20px);
        }       
    }
   
}
</style>
