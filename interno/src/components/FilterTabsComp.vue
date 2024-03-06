<template>
    <div class="filter-articles">
        <div id="filterTabs">
            <h3 class="sidebar__title subtitle">Tags</h3>
            <ul class="tags__list list">
            <li  @click="sortByTag(index, $event)" class="tags__item" v-for="(tab, index) in tabs" :key="index">{{ tab.name }}</li>
        </ul>
        </div>
        <ul class="articles__list list" id="articles">
            <ArticlesComp v-for="article in newList" :key="article.id" :item="article"></ArticlesComp>
        </ul>
    </div>
</template>

<script>
import ArticlesComp from './ArticlesComp.vue';

export default {
    name: 'FilterTabsComp',
    props: {
    articles: Array
    },
    components: {
    ArticlesComp,
},

    data() {
        return {
            tabs: [
                { name: 'Kitchan' },
                { name: 'Bedroom' },
                { name: 'Interior' },
                { name: 'Living' },
            ],
            newList: [],
        }
    },

    methods: {
        sortByTag(index, event) {
            this.resetClassActrive();
            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
            } else {
                event.target.classList.add('active');
            }
            const filtredArticlesList = [];
            this.articles.forEach(article => {
                if (article.category.includes(this.tabs[index].name)) {
                    filtredArticlesList.push(article);
                }
            });

            this.newList = filtredArticlesList;

        },
        resetClassActrive(){
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