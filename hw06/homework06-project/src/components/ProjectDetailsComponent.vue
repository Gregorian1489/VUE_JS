<template>
  <section class="project__details center">
    <div class="project__details__wrapper">
        <p class="project__details__wrapper__title">{{ titleitems }}</p>
        <p class="project__details__wrapper__text">{{ descriptionitems }}</p>
    </div>
    <img :src="imgitems" :alt="altitems">
    <div class="project__details__slider">
        <button class="project__details__slider__button_1" @click="slider(0)"></button>
        <button class="project__details__slider__button_2" @click="slider(1)"></button>
        <button class="project__details__slider__button_3" @click="slider(2)"></button>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'; 

export default {
  name: 'ProjectDetailsComponent',
  computed: {
    ...mapGetters(['titleitems', 'descriptionitems', 'imgitems','altitems']),
    ...mapState(['projectData']),
  },
  methods: {
    ...mapMutations(['slider']),     
  }
};
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.project__details {
    padding-top: 150px;

    &__wrapper {
        padding-left: 200px;
        padding-right: 200px;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 50px;

        &__title {
        @include font_DM(30px);
        color: $color_text;
        margin-bottom: 20px;
        }

        &__text {
        @include font_jost(22px);
        color: $color_text_third;
        }
   }

    &__slider {
        margin-top: 50px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

        &__button_1, &__button_2, &__button_3 {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: white;
            border-color: black;
            
        }
    }    
}
</style>