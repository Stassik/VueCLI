<template>
    <div class="page-single">
        <HeaderComp></HeaderComp>
        <main class="main blog">
          <div class="banner banner-blog">
            <img class="banner__img" src="../assets/single-banner.jpg" alt="banner image">
          </div>
          <section class="single-section blog__container container center">
              <div class="single__left">
                  <div class="single__post">
                      <h2 class="single__title title">Let’s Get Solution for Building
                          Construction Work</h2>
                      <div class="single__post-box">
                          <div class="blog__img-box single__img-box">
                              <img src="../assets/7.png" alt="blog image" class="blog__img">
                          </div>
                          <div class="articles__item-descr">
                              <p class="articles__item-text text-mini">26 December,2022</p>
                              <div class="single__post-breadcrumbs  ">
                                  <a href="./index.html" class="breadcrumbs__link ">Interior</a>
                                  <a href="./index.html" class="breadcrumbs__link">Home</a>
                                  <span class="breadcrumbs__link">Decore</span>
                              </div>
                          </div>
                          <div class="blog__text text">
                              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                                  in.Contrary
                                  to popular belief.There are many variations of passages of Lorem Ipsum available, but
                                  the
                                  majority have suffered alteration in some form, by injecthumour, or randomised words
                                  which
                                  don't look even slightly believable.</p>
                              <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                  tend to repeat predefined chunks as necessary.</p>
                          </div>
                      </div>
                  </div>
                  <div class="single__post">
                      <h2 class="single__title title">Design sprints are great</h2>
                      <div class="single__post-box">
                          <div class="blog__text text single-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                                  in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                  available, but the majority have suffered.</p>
                              <ol class="blog__text-list  single-text">
                                  <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                      available, but the majority have suffered.</li>
                                  <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                      available, but the majority have suffered.</li>
                                  <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                      available, but the majority have suffered.</li>
                              </ol>

                          </div>
                          <div class="blog__img-box single__img-box">
                              <img src="../assets/single_2.jpg" alt="blog image" class="blog__img">
                          </div>
                          <div class="blog__text text">
                              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                                  in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                  available, but the majority have suffered.</p>
                          </div>
                      </div>

                  </div>
              </div>

              <div class="single__sidebar">
                  <div class="sidebar__container">
                    <div class="filter-articles">
                        <FilterTabsComp :list="articles.array" :tabs="articles.tabs" :title="titleTags"  @newList="getNewList"></FilterTabsComp>
                        <ul class="articles__list list" id="articles">
                            <ArticlesComp v-for="article in newList" :key="article.id" :item="article"></ArticlesComp>
                        </ul>
                    </div>     
                  </div>
              </div>
          </section>

        </main>
        <FooterComp></FooterComp>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import FilterTabsComp from './FilterTabsComp.vue';
import ArticlesComp from './ArticlesComp.vue';
import FooterComp from './FooterComp.vue';

export default {
    name: 'PageSingleComp',
    props: {
    articles: Object,
    currentArticle: Object
  },
  components: {
    HeaderComp,
    FilterTabsComp,
    ArticlesComp,
    FooterComp,
  },
  data(){
    return{
        titleTags: 'Tags',
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
<style>
    
</style>