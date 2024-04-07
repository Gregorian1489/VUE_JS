<template>
  <section class="news center">
        <p class="news__title">Articles & News</p>
        <div class="news__items" id="cardbox-container">
            <div class="news__items__item" v-for="article in articlesData" :key="article.id">
                <img :src="require(`../assets/img/${article.src}.png`)" :alt="article.alt" class="news__items__item__img">
                <p class="news__items__item__text">{{article.title}}</p>
                <a href="#" class="news__items__item__tag">{{article.button}}</a>
                <div class="news__items__item__content">
                    <p class="news__items__item__content__date">{{article.date}}</p>
                    <button class="news__items__item__content__button"><img src="../assets/img/Vector_2.svg" alt="vector"></button>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'NewsComponent',

  data() {
    return {
        articlesData: [
                { id: 1, src:"img_blog_1", alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 2, src: 'img_blog_2', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 3, src: 'img_blog_3', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
                { id: 4, src: 'img_blog_4', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 5, src: 'img_blog_5', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 6, src: 'img_blog_6', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' }
                ]
       };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.news {
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;

    &__title {
        @include font_DM(50px);
        color: $color_text;
        margin-bottom: 10px;
    }

    &__items {
        display: flex;
        flex-wrap: wrap;
        gap:20px;

        &__item {
            width: 384px;
            height: 520px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px;
            border: 1px solid #F4F0EC;
            border-radius: 40px;   
            
            &__tag {
                text-decoration: none;
                position: relative;
                top: -178px;
                right: -30px;
                @include font_jost(16px);
                color: $color_text_third;
                width: 115px;
                background-color: #fff;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                border-bottom-right-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;

                                
            }                         

            &__text {
                width: 270px;
                @include font_DM(25px);
                color: $color_text;
            }

            &__content {
                position: relative;
                top: -30px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &__date {
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