<template>
  <section class="latest_post center">
        <p class="latest_post__title">Latest Post</p>
        <div class="latest_post__item">
            <img src="../assets/img/img_page2_post.png" alt="kitchen">
            <div class="latest_post__item__info">
                <p class="latest_post__item__info__text1">Low Cost Latest Invented Interior <br> Designing Ideas</p>
                <p class="latest_post__item__info__text2">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                <p class="latest_post__item__info__text3">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div class="latest_post__item__info__form">
                    <p class="latest_post__item__info__form__text">26 December,2022 </p>
                    <button class="latest_post__item__info__form__button"><img src="../assets/img/Vector_2.svg" alt="vector"></button>
                </div>
                
            </div>
        </div>

    </section>
</template>

<script>
export default {
  name: 'LatestPost',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.latest_post {
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;
    
    &__title {
        @include font_DM(50px);
        margin-bottom: 40px;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 60px;
        height: 520px;
        border: 1px solid #F4F0EC;
        border-radius: 40px;
        padding: 20px;

        &__info {
            width: 490px;
            height: 375px;
            display: flex;
            flex-direction: column;
            gap:20px;

            &__text1 {
                @include font_DM(25px);
                color: $color_text;
            }

            &__text2 {
                @include font_jost(22px);
                color: $color_text_third;
                margin-bottom: 20px;
            }

            &__text3 {
                @include font_jost(22px);
                color: $color_text_third;
                margin-bottom: 60px;
            }

            &__form {
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                &__text {
                    @include font_jost(16px);
                    color: $color_text_third;
                }

                &__button {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background-color: $color_background;
                    border-color: transparent;
                }

                &__button:hover {
                    background-color: $color_text_brown;
                }
            }   
            
        }
    }
}


</style>