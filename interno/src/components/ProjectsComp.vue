<template>
    <li class="projects__item">
        <img :src="require(`@/assets/${fileImg}`)" alt="item photo" class="projects__item-img">
        <div class="projects__item-box">
            <div class="prodects__item-descr">
                <h3 class="projects__item-title subtitle">{{item.category}}</h3>
                <p class="projects__item-text text">{{item.subCategory}}</p>
            </div>
            <button class="projects__item-btn btn btn-light">
                <svg class="projects__btn-icon btn-icon">
                    <use xlink:href="../assets/sprite.svg#arrow_right"></use>
                </svg>
            </button>
        </div>
    </li>
</template>
<script>
export default {
    name: 'ProjectsComp',
    props: {
        item: Object,  
    },
    computed: {
        fileImg(){
            return this.item.fileName;
        }
    }
}
</script>