<template>
    <section class="project center">
        <h2><span class="project__title">Follow Our Projects</span></h2>
        <p class="project__text">
            <span class="project__text__span">It is a long established fact that a reader will be distracted by the of readable <br> content of page  lookings at its layouts  points.</span>
        </p>
        <div class="project__cards">
            <div class="project__cards__item">
                <img class = "project__cards__item__img1" src="../assets/img/img1.png" alt="img1">
                <div class="project__cards__item__info">
                    <div class="project__cards__item__info__left">
                        <h4><span class="project__cards__item__info__left__title">Modern Kitchan</span></h4>
                        <p class="project__cards__item__info__left__text">Decor / Artchitecture</p>
                    </div>
                    <button class="project__cards__item__info__button">
                        <img src="../assets/img//Vector_2.svg" alt="vector">
                    </button>
                </div>    
            </div>
            <div class="project__cards__item">
                <img class = "project__cards__item__img2" src="../assets/img/img2.png" alt="">
                <div class="project__cards__item__info">
                    <div class="project__cards__item__info__left">
                        <h4><span class="project__cards__item__info__left__title">Modern Kitchan</span></h4>
                        <p class="project__cards__item__info__left__text">Decor / Artchitecture</p>
                    </div>
                    <button class="project__cards__item__info__button">
                        <img src="../assets/img/Vector_2.svg" alt="vector">
                    </button>
                </div>    
            </div>
            <div class="project__cards__item">
                <img class = "project__cards__item__img1" src="../assets/img/img3.png" alt="">
                <div class="project__cards__item__info">
                    <div class="project__cards__item__info__left">
                        <h4><span class="project__cards__item__info__left__title">Modern Kitchan</span></h4>
                        <p class="project__cards__item__info__left__text">Decor / Artchitecture</p>
                    </div>
                    <button class="project__cards__item__info__button">
                        <img src="../assets/img//Vector_2.svg" alt="vector">
                    </button>
                </div>    
            </div>
            <div class="project__cards__item">
                <img class = "project__cards__item__img1" src="../assets/img/img4.png" alt="">
                <div class="project__cards__item__info">
                    <div class="project__cards__item__info__left">
                        <h4><span class="project__cards__item__info__left__title">Modern Kitchan</span></h4>
                        <p class="project__cards__item__info__left__text">Decor / Artchitecture</p>
                    </div>
                    <button class="project__cards__item__info__button">
                        <img src="../assets/img//Vector_2.svg" alt="vector">
                    </button>
                </div>    
            </div>
            
        </div>

    </section>
</template>

<script>
export default {
  name: 'project',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.project {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 100px;

    &__title {
        @include font_DM(50px);
        color: $color_text;
    }

    &__text {
        margin-bottom: 100px;

        &__span {
            @include font_jost(22px);
            color: $color_text_third;
            margin-bottom: 100px;
        }
    }

    
    &__cards {
        display: flex;
        gap: 98px;
        flex-wrap: wrap;
        

        &__item {
            display: flex;
            flex-direction: column;
            gap: 24px;

            &__info {
                display: flex;
                justify-content: space-between;

                &__left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;

                    &__title {
                        @include font_DM(25px);
                        color: $color_text;   
                    }

                    &__text {
                        @include font_jost(22px);
                        color: $color_text_third;
                    }
                }

                &__button {
                    width: 70px;
                    border-radius: 50%;
                    border-color: transparent;
                }

                &__button:hover {
                    background-color: $color_text_brown;
                    transition: 0.3s;
                }
            }

        }
        
        

    }


}
</style>