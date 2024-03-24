<template>
    <section class="blog center">
        <p class="blog__title">Articles & News</p>
        <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable content <br> of a page when lookings at its layouts the points of using.</p>
        <div class="blog__cards">
            <div class="blog__cards__item">
                <img class="blog__cards__item__img" src="../assets/img/img_blog_1.png" alt="">
                <img class="blog__cards__item__img1" src="../assets/img/Tag1.png" alt="">
                <p class="blog__cards__item__text">Let’s Get Solution For <br> Building Construction <br> Work</p>
                <div class="blog__cards__item__info">
                    <p class="blog__cards__item__info__text">26 December,2022 </p>
                    <button class="blog__cards__item__info__button"><img src="../assets/img/Vector_2.svg" alt="vector"></button>
                </div>
            </div>
            <div class="blog__cards__item">
                <img class="blog__cards__item__img" src="../assets/img/img_blog_2.png" alt="">
                <img class="blog__cards__item__img1" src="../assets/img/Tag2.png" alt="">
                <p class="blog__cards__item__text">Low Cost Latest Invented <br> Interior Designing <br> Ideas.</p>
                <div class="blog__cards__item__info">
                    <p class="blog__cards__item__info__text">22 December,2022 </p>
                    <button class="blog__cards__item__info__button"><img src="../assets/img/Vector_2.svg" alt="vector"></button>
                </div>
            </div>
            <div class="blog__cards__item">
                <img class="blog__cards__item__img" src="../assets/img/img_blog_3.png" alt="">
                <img class="blog__cards__item__img1" src="../assets/img/Tag3.png" alt="">
                <p class="blog__cards__item__text">Best For Any Office & <br> Business Interior <br> Solution</p>
                <div class="blog__cards__item__info">
                    <p class="blog__cards__item__info__text">25 December,2022 </p>
                    <button class="blog__cards__item__info__button"><img src="../assets/img/Vector_2.svg" alt="vector"></button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
  name: 'blog',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-bottom: 100px;

    &__title {
        @include font_DM(50px);
        color: $color_text;
    }

    &__text {
        @include font_jost(22px);
        color: $color_text_third;
        margin-bottom: 10px;
    }

    &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        &__item {
            width: 382px;
            height: 521px;
            border-radius: 50px;
            background-color: #fff;
            padding: 20px;
            text-align: left;
            border: 1px solid #F4F0EC;

         
            &__img1, &__img2, &__img3 {
                position: relative;
                top: -65px;
                left: 15px;
            }

            &__text {
                @include font_DM(25px);
                color: $color_text;
                position: relative;
                top: -40px;
            }

            &__info {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                top: -30px;

                &__button {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background-color: $color_background;
                    border-color: transparent;
                }
                    
            }
            
        }

    }
}
</style>