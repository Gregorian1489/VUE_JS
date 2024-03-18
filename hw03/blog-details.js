Vue.component('main-blog', {
  data() {
    return {
        buttons: [
            { id: 1, title: 'Kitchen'},
            { id: 2, title: 'Bedroom' },
            { id: 3, title: 'Building' },
            { id: 4, title: 'Architecture' },
            { id: 5, title: 'Kitchen Planning' },
            { id: 6, title: 'Interior Design' },
        ]
    }
  },

  template: `<div class="blog__details__wrapper">
    <div class="blog__details__wrapper__left">
        <p class="blog__details__wrapper__left__title">Let’s Get Solution for Building Construction Work</p>
        <img class="blog__details__wrapper__left__img" src="/hw01/maket/img/img_blog_details_1.png" alt="banner">
        <div class="blog__details__wrapper__left__data">
            <p class="blog__details__wrapper__left__data__date">26 December,2022</p>
            <p class="blog__details__wrapper__left__data__crump">Interior / Home / Decore</p>
        </div>
        <p class="blog__details__wrapper__left__article">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.

        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <img class="blog__details__wrapper__left__img__2" src="/hw01/maket/img/img_blog_details_2.png" alt="banner">
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
        <img class="blog__details__wrapper__left__img__2" src="/hw01/maket/img/img_blog_details_3.png" alt="banner">
        <p class="blog__details__wrapper__left__article__2__text__2">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
        </p>
    </div>
    <div class="blog__details__wrapper__right">
        <p class="blog__details__wrapper__right__title">
        Tags
        </p>
        <button class="blog__details__wrapper__right__button__1" v-for="button in buttons">{{button.title}}</button>
    </div>
  </div>
  `,
});