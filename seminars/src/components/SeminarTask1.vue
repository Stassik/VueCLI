
<template>
    <div class="gallery">
        <h2>Задание 3</h2>
        <div class="img-box">
            <img class="img" :src="photos[currentPhotoIndex]" alt="Фото">
        </div>
        <div class="img-box_prev">
            <img v-on:click="clickOnPhoto(index)" class="img_prev img" v-for="(photo, index) in photos" :key="index" v-bind:src="photo" alt="Фото">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SeminarTask',
        data(){
            return{
                photos:[
                    'https://wdorogu.ru/images/wp-content/uploads/2020/10/f1fda080713507f02387.jpg', 
                    'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-48.jpg', 
                    'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696422785_gas-kvas-com-p-kartinki-milie-kotyat-45.jpg', 
                    'https://img.razrisyika.ru/kart/27/1200/107258-malenkie-kotiki-33.jpg'],
                currentPhotoIndex: 0,    
            };
        },
        methods: {
            clickOnPhoto(index){
                this.currentPhotoIndex = index;
            }
        },
    }
</script>

<style lang="css" scoped>
.gallery {
    max-width: 900px;
    margin: 0 auto ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.img-box {
    max-height: 400px;
    width: 800px;
}

.img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
}
.img-box_prev {
    display: flex;
    gap: 15px;
}
    .img_prev {
        max-width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }

    .img_prev:hover{
        cursor: pointer;
    }
</style>