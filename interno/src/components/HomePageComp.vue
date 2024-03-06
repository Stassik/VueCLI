<template>
    <div class="home">
        <HeaderComp></HeaderComp>
        <main class="main">
            <section class="banner banner-main">
                <div class="banner__container container center">
                    <img src="../assets/Image.jpg" alt="banner image" class="banner__img">
                    <div class="banner__inner">
                        <h1 class="banner__title">Let Your Home Be Unique</h1>
                        <p class="banner__text text">There are many variations of the passages of lorem Ipsum fromavailable,
                            majority.</p>
                        <button class="banner__btn btn btn-dark">
                            <span>Get Started</span>
                            <svg class="banner__btn-icon btn-icon">
                                <use xlink:href="../assets/sprite.svg#arrow_right-btn"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section class="projects">
                <div class="projects__container container center">
                    <HeadingSection classEl="projects" title="Follow Our Projects" 
                    description="It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."></HeadingSection>
                    
                    <ul class="projects__list list">
                        <li class="projects__item">
                            <img src="../assets/1.jpg" alt="item photo" class="projects__item-img">
                            <div class="projects__item-box">
                                <div class="prodects__item-descr">
                                    <h3 class="projects__item-title subtitle">Modern Kitchan</h3>
                                    <p class="projects__item-text text">Decor / Artchitecture</p>
                                </div>
                                <button class="projects__item-btn btn btn-light">
                                    <svg class="projects__btn-icon btn-icon">
                                        <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li class="projects__item">
                            <img src="../assets/2.jpg" alt="item photo" class="projects__item-img">
                            <div class="projects__item-box">
                                <div class="prodects__item-descr">
                                    <h3 class="projects__item-title subtitle">Modern Kitchan</h3>
                                    <p class="projects__item-text text">Decor / Artchitecture</p>
                                </div>
                                <button class="projects__item-btn btn btn-light">
                                    <svg class="projects__btn-icon btn-icon">
                                        <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li class="projects__item">
                            <img src="../assets/3.jpg" alt="item photo" class="projects__item-img">
                            <div class="projects__item-box">
                                <div class="prodects__item-descr">
                                    <h3 class="projects__item-title subtitle">Modern Kitchan</h3>
                                    <p class="projects__item-text text">Decor / Artchitecture</p>
                                </div>
                                <button class="projects__item-btn btn btn-light">
                                    <svg class="projects__btn-icon btn-icon">
                                        <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li class="projects__item">
                            <img src="../assets/4.jpg" alt="item photo" class="projects__item-img">
                            <div class="projects__item-box">
                                <div class="prodects__item-descr">
                                    <h3 class="projects__item-title subtitle">Modern Kitchan</h3>
                                    <p class="projects__item-text text">Decor / Artchitecture</p>
                                </div>
                                <button class="projects__item-btn btn btn-light">
                                    <svg class="projects__btn-icon btn-icon">
                                        <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="counter">
                <div class="counter__container container center">
                    <div class="counter__list">
                        <div class="counter__item">
                            <h3 class="counter__subtitle">12</h3>
                            <p class="counter__text text">Years Of Experiance</p>
                        </div>
                        <div class="counter__item">
                            <h3 class="counter__subtitle">85</h3>
                            <p class="counter__text text">Success Project</p>
                        </div>
                        <div class="counter__item">
                            <h3 class="counter__subtitle">15</h3>
                            <p class="counter__text text">Active Project</p>
                        </div>
                        <div class="counter__item">
                            <h3 class="counter__subtitle">95</h3>
                            <p class="counter__text text">Happy CUstomers</p>
                        </div>
                    </div>
                </div>

            </div>
            <section class="articles">
                <div class="articles__container container center">
                    <HeadingSection classEl="articles" title="Articles & News" 
                        description="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.">
                    </HeadingSection>

                    <ul class="articles__list list" id="articles">
                        <ArticlesComp v-for="article in articles" :key="article.id" :item="article"></ArticlesComp>
                    </ul>
                </div>
            </section>
        </main>
        <FooterComp></FooterComp>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';
import HeadingSection from './HeadingSection.vue';
import ArticlesComp from './ArticlesComp.vue';


export default {
    name: 'HomePageComp',
    props: {
    articles: Array
  },

    components: {
    HeaderComp,
    FooterComp,
    HeadingSection,
    ArticlesComp
  },
}
</script>

<style>
    
</style>