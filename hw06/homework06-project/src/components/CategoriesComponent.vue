<template>
  <div class="centr center">   
    <section class="categories">
        <button class="categories__buttons" @click="changeButton(button.title)" v-for="button in buttons" :key="button.id">
        {{button.title}}
        </button>
    </section>
    <section class="projects center">
            <section class="projects__wrapper" >
                <div class="projects__wrapper__item" v-for="temp in tempArray" :key="temp.id">
                    <img :src="require(`../assets/img/${temp.img}.png`)" :alt="temp.alt" class="projects__left__item__img">
                    <div class="projects__wrapper__item__content">
                      <div class="projects__wrapper__item__content__left"> 
                        <p class="projects__wrapper__item__content__text">{{temp.title}}</p>
                        <p>Decor/Architecture</p>  
                      </div>
                      <div class="projects__wrapper__item__content__right">
                        <router-link to="/project_details"><button class="projects__wrapper__item__content__button">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button></router-link>
                      </div>
                    </div>
                </div>
             </section>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'CategoriesComponent',

  data() {
    return {
      buttons: [
        { id: 1, title: 'Bathroom' },
        { id: 2, title: 'Bedroom' },
        { id: 3, title: 'Kitchen' },
        { id: 4, title: 'Architecture' },
      ],
      projectData: [
        { id: 1, img: "bedroom_1", alt: 'interior', title: 'Minimal Bedroom', tag: 'Bedroom' },
        { id: 2, img: "bedroom_2", alt: 'interior', title: 'Classic Minimal Bedroom', tag: 'Bedroom' },
        { id: 3, img: "bedroom_3", alt: 'interior', title: 'Minimal Bedroom Table', tag: 'Bedroom' },
        { id: 4, img: "bedroom_4", alt: 'interior', title: 'Modern Bedroom', tag: 'Bedroom' },
        { id: 5, img: "bedroom_5", alt: 'interior', title: 'Minimal Bedroom', tag: 'Bedroom' },
        { id: 6, img: "bedroom_6", alt: 'interior', title: 'Modern Bedroom', tag: 'Bedroom' },
        { id: 7, img: "bedroom_7", alt: 'interior', title: 'System Table', tag: 'Bedroom' },
        { id: 8, img: "bedroom_8", alt: 'interior', title: 'Modern Bedroom', tag: 'Bedroom' },
        { id: 9, img: "bedroom_1", alt: 'interior', title: 'Bathroom 1', tag: 'Bathroom' },

      ],
      tempArray: [],
    };
  },
  methods: {
    changeButton(button) {
        this.tempArray = this.projectData.slice();
        this.tempArray = this.tempArray.filter(project => project.tag === button);

    }
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';


.centr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.categories {

    display: flex;
    align-items: center;
    justify-content: center;
    width: 880px;
    height: 75px;
    border: 1px solid #CDA274;
    border-radius: 20px;
    margin-bottom: 40px;

    &__buttons {
        background-color: #fff;
        border-color: transparent;
        border-radius: 19px;
        height: 73px;
        width: 220px;
    }

    &__buttons:hover {
        background-color: #CDA274;
    }
}

.projects {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &__wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 3200px;
        gap: 20px;

        &__item {
          
            &__content {
                display: flex;
                justify-content: space-between;

                &__text {
                  @include font_DM(25px);
                  color: $color_text;
                }

                &__left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                }

                &__button {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background-color: #F4F0EC;
                    border-color: transparent;
                }

                &__button:hover {
                    background-color: #CDA274;
                }

            }
        }
    }
}

</style>