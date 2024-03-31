<template>
    <footer class="footer center">
        <div class="footer__item">
            <img class="footer__item__logo" src="../assets/img/Logo.svg" alt="">
            <p class="footer__item__text">It is a long established fact that a reader will be distracted lookings.</p>
            <img class="footer__item__icons" src="../assets/img/icons.png" alt="vector">
        </div>
        <div class="footer__item">
            <p class="footer__item__title">Pages</p>
            <router-link to="/"><p class="footer__item__text">Home</p></router-link>
            <p class="footer__item__text">Project</p>
            <p class="footer__item__text">Blog</p>
        </div>
        <div class="footer__item">
            <p class="footer__item__title">Contact</p>
            <p class="footer__item__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p class="footer__item__text">contact@interno.com</p>
            <p class="footer__item__text">(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.footer {
    display: flex;
    gap: 200px;
    margin-bottom: 300px;

    &__item {
        width: 393px;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 50px;

        &__logo {
            width: 177px;
        }

        &__icons {
            width: 250px;
            height: 22px;
        }

        &__text {
            @include font_jost(22px);
            color: $color_text_third;
        }

        &__title {
            @include font_DM(25px);
            color: $color_text;
        }

        &__text {
            @include font_jost(22px);
            color: $color_text_third;
        }
    }
}
</style>