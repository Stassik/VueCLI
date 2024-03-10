<template>
    <section class="banner banner-blog">
        <img class="banner__img" :src="require(`@/assets/${page.src}`)" alt="banner image">
        <div class="banner__descr-blog">
            <div class="banner__title-blog title"> {{ page.title }}</div>
            <div class="banner__breadcrumbs">
                <router-link to="/" class="breadcrumbs__link">Home</router-link>
                <span class="breadcrumbs__link"> {{ page.breadcrumb }}</span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BannerSection',
    props: {
        page: Object
    }
}
</script>
<style>
    
</style>