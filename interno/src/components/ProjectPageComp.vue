<template>
    <div class="project">
        <HeaderComp></HeaderComp>
        <main class="main project__container">
            <BannerSection :page="page"></BannerSection>
            <div class="project__content container center">
                <FilterTabsComp :list="projects.array" :tabs="projects.tabs" :title="titleTags" @newList="getNewList"></FilterTabsComp>
                <ul>
                    <ProjectsComp v-for="project in newList" :key="project.id" :item="project"></ProjectsComp>
                </ul>

            </div>
        </main>
        <FooterComp></FooterComp>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import BannerSection from './BannerSection.vue';
import FilterTabsComp from './FilterTabsComp.vue';
import FooterComp from './FooterComp.vue';
import ProjectsComp from './ProjectsComp.vue';
export default {
    name: 'ProjectPageComp',
    props: {
        projects: Object
    },
    components: {
        HeaderComp,
        BannerSection,
        FilterTabsComp,
        ProjectsComp,
        FooterComp,
    },
    data(){
    return{
        page:{
            title: 'Our Project',
            src: 'project-banner.jpg',
            breadcrumb: 'Project'
        },
        
        titleTags: '',
        newList:[],
    }
  },
  methods: {
    getNewList(newList){
        this.newList = newList
    }
  }
}
</script>
<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
} 

.projects__item{
    width: calc((100% - 30px) / 2);
    max-width: 100%;
}
</style>