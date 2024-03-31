<template>
    <section class="counter">
        <div class="counter__wrapper center">
            <div class="counter__item border">
                    <p class="counter__item__num">12</p>
                    <p class="counter__item__text">Years Of Experiance</p>
            </div>
            <div class="counter__item border">
                    <p class="counter__item__num">85</p>
                    <p class="counter__item__text">Success Project</p>
            </div>
            <div class="counter__item border">
                    <p class="counter__item__num">15</p>
                    <p class="counter__item__text">Active Project</p>
            </div>
            <div class="counter__item">
                    <p class="counter__item__num">95</p>
                    <p class="counter__item__text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'counter',
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_mixins.scss';
@import '../assets/styles/_vars.scss';

.counter {
    display: flex;
    justify-content: center;
    height: 457px;
    background-color: $color_background;
    margin-top: 100px;
    margin-bottom: 100px;

    &__wrapper {
        @include flex_center(0px);
    }
}
.counter__item {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    &__num {
        @include font_DM(85px);
        color: $color_text_brown;
    }

    &__text {
        @include font_jost(22px);
        color: $color_text_second;
    }
    
}

.border {
    border-right: 1px solid $color_text_brown;
}

</style>