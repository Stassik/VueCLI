<template>
    <li class="articles__item">
        <div class="articles__img-box">
            <img :src="require(`@/assets/${fileImg}`)" alt="item photo" class="articles__item-img">
            <span class="articles__item-label text-mini">{{item.category}}</span>
        </div>
        <div class="articles__item-box">
            <h3 class="articles__item-title subtitle">{{item.title}}</h3>
            <div class="articles__item-descr">
                <p class="articles__item-text text-mini">{{item.date}}</p>
                <router-link :currentArticle="item" to="/page-single" class="articles__item-btn btn btn-light">
                    <svg class="articles__btn-icon btn-icon">
                        <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                    </svg>
                </router-link>
            </div>
        </div>
    </li>
</template>
<script>


export default {
    props: {
    item: Object,  
  },
    name: 'ArticlesComp',
    data() {
        return {
            
        }
    },
    computed: {
        fileImg(){
            return this.item.fileName;
        }
    }


}
</script>

<style>
    
</style>