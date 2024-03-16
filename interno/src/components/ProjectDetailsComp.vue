<template>
    <div class="details">
        <HeaderComp></HeaderComp>
        <main class="main blog">
            <div class="banner banner-blog">
                <img class="banner__img" src="../assets/details.webp" alt="banner image">
            </div>
            <section class="details__container container center">
                <div class="details__text-box center">
                    <h2 class="single__title title">{{ getProjectsList[5].content.title }}</h2>
                    <p class="details__text">{{ getProjectsList[5].content.text }}</p>
                </div>
                   <SliderComp></SliderComp>
            </section>
        </main>
        <FooterComp></FooterComp>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';
import SliderComp from './SliderComp.vue';
import {mapState, mapGetters} from 'vuex';

export default {
    name: 'ProjectDeteilsComp',
    components: {
        HeaderComp,
        FooterComp,
        SliderComp
    },
    computed: {
        ...mapState(['projectsData']),
        ...mapGetters(['getProjectsList'])
    }
}
</script>
<style>
    .details__text-box{
        max-width: 658px;
    }

    .details__text {
        margin-bottom: 35px;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: #4D5053;
    }
</style>