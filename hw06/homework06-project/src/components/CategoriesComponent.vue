<template>
  <div class="centr center">   
    <section class="categories">
        <button class="categories__buttons" @click="changeButton(button.title)" v-for="button in buttons" :key="button.id">
        {{button.title}}
        </button>
    </section>
    <section class="projects">
            <section class="projects__left" v-for="project in projectData" :key="project.id">
                <div class="projects__left__item">
                    <img :src="project.img" :alt="project.alt" class="projects__left__item__img">
                    <p class="projects__left__item__text">{{project.title}}</p>
                    <p>Decor/Architecture</p>   
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
        { id: 1, img: "", alt: 'interior', title: 'Minimal Bedroom', tag: 'Bedroom' },
        { id: 2, img: "", alt: 'interior', title: 'Classic Minimal Bedroom', tag: 'Bedroom' },
        { id: 3, img: "", alt: 'interior', title: 'Minimal Bedroom Table', tag: 'Bedroom' },
        { id: 4, img: "", alt: 'interior', title: 'Modern Bedroom', tag: 'Bedroom' },
        { id: 5, img: "", alt: 'interior', title: 'Bathroom', tag: 'Bathroom' },

      ]
    };
  },
  methods: {
    changeButton(button) {
        
        this.projectData = this.projectData.filter(project => project.tag === button);

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

    &__left {
        display: flex;
        flex-direction: column;
    }
}

</style>