<template>
  <header class="header center">
        <img class="header__logo" src="../assets/img/Logo.svg" alt="logo">
        <nav class="header__nav">
            <a href="#"><span class="header__nav__link">Home</span></a>
            <a href="#"><span class="header__nav__link">Project</span></a>
            <a href="#"><span class="header__nav__link">Blog</span></a>
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
