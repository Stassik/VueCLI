<template>
    <div class="blog">
        <HeaderComp></HeaderComp>
        <main class="main blog">
            <section class="banner banner-blog">
                <img class="banner__img" src="../assets/blog-banner.jpg" alt="banner image">
                <div class="banner__descr-blog">
                    <div class="banner__title-blog title">Articles & News</div>
                    <div class="banner__breadcrumbs">
                        <router-link to="/" class="breadcrumbs__link">Home</router-link>
                        <span class="breadcrumbs__link">Blog</span>
                    </div>
                </div>
            </section>
            <section class="blog-section blog__container container center">
                <div class="blog__descr">
                    <h2 class="blog__title title">Latest Post</h2>
                </div>
                <div class="blog__post">
                    <div class="blog__img-box">
                        <img src="../assets/7.png" alt="blog image" class="blog__img">
                    </div>
                    <div class="blog__descr">
                        <h3 class="blog__title subtitle">Low Cost Latest Invented Interior Designing&nbsp;Ideas</h3>
                        <div class="blog__text text">
                            <p>ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                                dignissim maximus.posuere in.Contrary to popular belief.</p>
                            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        </div>
                        <div class="articles__item-descr">
                            <p class="articles__item-text text-mini">26 December,2022</p>
                            <router-link to="/page-single" class="articles__item-btn btn btn-light">
                                <svg class="articles__btn-icon btn-icon">
                                    <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog-section blog__container container center">
                <div class="blog__descr">
                    <h2 class="blog__title title">Articles & News</h2>
                </div>
                <ul class="articles__list list" id="articles">
                    <ArticlesComp v-for="article in articles" :key="article.id" :item="article"></ArticlesComp>
                </ul>
                <div class="blog__pagination">
                    <div class="pagination__btn btn btn_active">01</div>
                    <div class="pagination__btn btn">02</div>
                    <div class="pagination__btn btn">03</div>
                    <button class="pagination__btn btn">
                        <svg class="pagination__btn-icon btn-icon">
                            <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                        </svg>
                    </button>
                </div>
            </section>
        </main>
        <FooterComp></FooterComp>
    </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';
import ArticlesComp from './ArticlesComp.vue';
import FooterComp from './FooterComp.vue';

export default {
    name: 'BlogPageComp',
    props: {
    articles: Array
  },

    components: {
    HeaderComp,
    ArticlesComp,
    FooterComp,
  },
}
</script>

<style>
</style>