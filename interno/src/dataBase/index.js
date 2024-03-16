import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        articlesData: {
            array: [
                {
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    date: '26 December,2022',
                    fileName: '2_1.jpg'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                    category: 'Living Design',
                    date: '22 December,2022',
                    fileName: '2_2.jpg'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    date: '25 December,2022',
                    fileName: '2_3.jpg'
                },
                {
                    title: 'Let’s Get Solution For Building Construction Work',
                    category: 'Kitchan Design',
                    date: '26 December,2022',
                    fileName: '2_4.jpg'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas. Work',
                    category: 'Living Design',
                    date: '22 December,2022',
                    fileName: '2_5.jpg'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution',
                    category: 'Interior Design',
                    date: '25 December,2022',
                    fileName: '2_6.jpg'
                },

            ],
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Interior' },
                { name: 'Living' },
            ]
        },
        projectsData: {

            array: [
                {
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '1.jpg',
                },
                {
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '2.jpg'
                },
                {
                    category: 'Modern Kitchan',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '3.jpg'
                },
                {
                    category: 'Modern Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '4.jpg'
                },
                {
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '5.jpg'
                },
                {
                    category: 'Minimal Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '6.jpg',
                    content: {
                        title: 'Minimal Look Bedrooms',
                        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n 
                        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
                    }
                },
                {
                    category: 'Classic Minimal Bathroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '7.jpg'
                },
                {
                    category: 'Modern Living room',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '8.jpg'
                },
                {
                    category: 'System Table',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '9.jpg'
                },
                {
                    category: 'Modern Bedroom',
                    subCategory: 'Decor / Artchitecture',
                    fileName: '10.jpg'
                }
            ],
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Bathroom' },
                { name: 'Living' },
            ],
        }
    },
    mutations: {

    },
    getters: {
        getCategoryProjects: (state) => (value) => {
            const categoryProjects = [];
            state.projectsData.array.forEach(item => {
                if (item.category.includes(value)) {
                    categoryProjects.push(item);
                }
            });
            categoryProjects.forEach(project => {
                project['isActive'] = false;
            });
            categoryProjects[0].isActive = true;
            return categoryProjects;

        },
        getProjectsPreview: (state) => state.projectsData.array.slice(0, 4),
        getProjectsList: (state) => state.projectsData.array,

    }

});