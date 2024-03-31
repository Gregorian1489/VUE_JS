<template>
    <section class="banner__2">
        <img class="banner__2__img" src="../assets/img/banner_4.png" alt="banner">
        <div class="banner__2__title">
            <p class="banner__2__title__text1">Our Project</p>
            <p class="banner__2__title__text2">Home/Project</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'banner4',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.banner__2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__img {
       height: 356px;
       width: 100vw; 
    }

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: relative;
        top: -179px;
        width: 500px;
        height: 180px;
        background-color: #fff;
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;  
        
        &__text1 {
            @include font_DM(50px);
            color: $color_text;
        }

        &__text2 {
            @include font_jost(22px);
            color: $color_text_third;
        }
    }
}
</style>