<template>
    <section class="banner center">
    <figure class="banner__figure">
        <h1><span class="banner__figure__title">Let Your Home Be Unique</span></h1>
        <p><span class="banner__figure__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</span></p>
        <button class="banner__figure__button"><span class="banner__figure__button__text">Get Started</span>
        <img class="banner__figure__button__vector" src="../assets/img/Vector.svg" alt="vector"></button>
    </figure>
</section>
</template>

<script>
export default {
  name: 'banner',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';
.banner {
    display: flex;
    align-items: center;
    height: 760px;
    background-image: url(../assets/img/banner.png);
    background-repeat: no-repeat;
    background-position: center; 
    
    &__figure {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 434px;
        margin-left: 40px;
        &__title {
            color: $color_text;
            @include font_DM(65px);
        }
        &__text {
            color: $color_text_third; 
            @include font_jost(22px);
        }
        &__button {
            @include flex_center(20px);
            width: 220px;
            height: 75px;
            border-radius: 20px;
            background-color: #292F36;
            &__text {
                @include font_jost_semiBold(18px);
                color: #fff;
            }
        }
        &__button:hover {
            background-color: $color_text_brown;
            transition: 0.3s;
            border-color: $color_text_brown;
        }
    }
}
</style>
