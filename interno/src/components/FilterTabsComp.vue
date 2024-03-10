<template>
    <div id="filterTabs">
        <h3 v-show="title" class="sidebar__title subtitle">{{ title }}</h3>
            <ul class="tags__list list">
            <li  @click="sortByTag(index, $event)" class="tags__item" v-for="(tab, index) in tabs" :key="index">{{ tab.name }}</li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'FilterTabsComp',
    props: {
    list: Array,
    tabs: Array,
    title: String
    },
    components: {
},

    data() {
        return {
            newList: [],
        }
    },
    mounted(){
       const firstTab = document.querySelector('.tags__item');
       firstTab.classList.add('active');
        const filtredList = [];
        this.list.forEach(item => {
            if (item.category.includes(this.tabs[0].name)) {
                filtredList.push(item);
            }
        });
        this.newList = filtredList;
        this.$emit('newList', this.newList);   
    },

    methods: {
        sortByTag(index, event) {
            this.resetClassActive();
            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
            } else {
                event.target.classList.add('active');
            }
            const filtredList = [];
            this.list.forEach(item => {
                if (item.category.includes(this.tabs[index].name)) {
                    filtredList.push(item);
                }
            });

            this.newList = filtredList;
            this.$emit('newList', this.newList);
        },
        resetClassActive(){
            const tabs = document.querySelectorAll('.tags__item');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
        }
        
    }
}
</script>

<style>
    
</style>