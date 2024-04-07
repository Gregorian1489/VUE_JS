<template>
    <section class="blog__details center" id="blog_details">
        <div class="blog__details__wrapper">
        <div class="blog__details__wrapper__left">
            <p class="blog__details__wrapper__left__title">{{title}}</p>
            <img class="blog__details__wrapper__left__img" :src="require(`../assets/img/${img}.png`)" alt="banner">
            <div class="blog__details__wrapper__left__data">
                <p class="blog__details__wrapper__left__data__date">{{date}}</p>
                <p class="blog__details__wrapper__left__data__crump">Interior / Home / Decore</p>
            </div>
            <p class="blog__details__wrapper__left__article">{{content}}
            </p>
            <img class="blog__details__wrapper__left__img__2" src="../assets/img/img_blog_details_2.png" alt="banner">
            <p class="blog__details__wrapper__left__article__2">
            Design sprints are great
            </p>
            <p class="blog__details__wrapper__left__article__2__text__1">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <p class="blog__details__wrapper__left__article__2__text__2">
            <span class="blog__details__wrapper__left__article__2__text__2__span">
            1 
            </span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <p class="blog__details__wrapper__left__article__2__text__2">
            <span class="blog__details__wrapper__left__article__2__text__2__span">
            2 
            </span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <p class="blog__details__wrapper__left__article__2__text__2">
            <span class="blog__details__wrapper__left__article__2__text__2__span">
            3 
            </span>
            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <img class="blog__details__wrapper__left__img__2" src="../assets/img/img_blog_details_3.png" alt="banner">
            <p class="blog__details__wrapper__left__article__2__text__2">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
        </div>
        <div class="blog__details__wrapper__right">
            <p class="blog__details__wrapper__right__title">Tags</p>
            <button class="blog__details__wrapper__right__button__1" @click="changeTag(button.title)" v-for="button in buttons" :key="button.id">{{button.title}}</button>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'MainBlogComponent',

  data() {
    return {
        buttons: [
            { id: 1, title: 'Kitchen'},
            { id: 2, title: 'Bedroom' },
            { id: 3, title: 'Building' },
            { id: 4, title: 'Architecture' },
            { id: 5, title: 'Kitchen Planning' },
            { id: 6, title: 'Interior Design' },
        ],
        articlesData: [
            { id: 1, img:'img_blog_details_1', alt: 'interior', title: 'Let’s Get Solution for Building Construction Work', content:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", date: '26 December,2022', tag: "Kitchen",},
            { id: 2, img: 'img_blog_details_22', alt: 'interior', title: 'Title for Bedroom', content:"Content about Bedroom", date: '22 January,2023', tag: "Bedroom",},
        ],
        title: 'Default title',
        img: "img_blog_details_1",
        date: '31 December,2000',
        content: 'Default content',
      
    };
  },

  methods: {
    changeTag(button) {
        console.log(button);
        for (const iterator of this.articlesData) {
          if (iterator.tag === button) {
            this.title = iterator.title;
            this.img = iterator.img;
            this.date = iterator.date;
            this.content = iterator.content;
          } 
        }
    },
    
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.blog__details{
    
    margin-top: 300px;
    margin-bottom: 200px;

    &__wrapper {
        display: flex;
        gap: 52px;

        &__left {
            width: 800px;
            display: flex;
            flex-direction: column;

            &__title {
                @include font_DM(50px);
                color: $color_text;
                margin-bottom: 20px;
            }

            &__img {
                margin-bottom: 40px;
            }

            &__data {
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;

                &__date {
                    @include font_jost(16px);
                    color: $color_text_third;
                }

                &__crump {
                    @include font_jost(16px);
                    color: $color_text_third;
                }
            }

            &__article {
                @include font_jost(22px);
                color: $color_text_third;
                margin-bottom: 40px;
            }

            &__img__2 {
                margin-bottom: 40px;
            }

            &__article__2 {
                @include font_DM(50px);
                color: $color_text;
                margin-bottom: 30px;

                &__text__1 {
                    @include font_jost(22px);
                    color: $color_text_third;
                    margin-bottom: 30px;
                }

                &__text__2 {
                    @include font_jost(22px);
                    color: $color_text_third;
                    margin-bottom: 30px;

                    &__span {
                        @include font_DM(20px);
                        color: $color_text_brown;
                    }
                }
            }

        }

        &__right {
            padding-left: 20px;

            &__title {
                @include font_DM(25px);
                color: $color_text;
                margin-bottom: 20px;
            }

            &__button__1 {
                min-width: 120px;
                height: 40px;
                border-radius: 10px;
                background-color: $color_background;
                border-color: transparent;
                @include font_jost(16px);
                color: $color_text_third;
                margin-right: 5px;
                margin-bottom: 5px;
            }

            &__button__1:hover {
                background-color: $color_text;
                color: $color_background;
                transition: 0.3s;
                
            }
        }
    }
}
</style>