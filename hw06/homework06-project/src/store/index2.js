import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        value: 0,
        projectData: [
            {
                id: 1,
                title: 'Minimal Look Bedroom',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                img:'../assets/img/minimal_bedrooms_img.png',
                alt:'interior',
            },
            {
                id: 2,
                title: 'Minimal Look Bedroom',
                description: 'Description 2',
                img:'',
                alt:'interior',
            },
            {
                id: 3,
                title: 'Minimal Look Bedroom',
                description: 'Description 3',
                img:'',
                alt:'interior',
            }
        ],

    },
    getters: {
        titleitems: state => {
            return state.projectData[state.value].title;
        },
        descriptionitems: state => {
            return state.projectData[state.value].description;
        },
        imgitems: state => {
            return state.projectData[state.value].img;
        },
        altitems: state => {
            return state.projectData[state.value].alt;
        }
    },
    mutations: {
        slider(state, values) {
            state.value = values;
            console.log(state.value);
        }
    }

})

export default store;