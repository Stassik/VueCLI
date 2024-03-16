<template>
  <div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-for="(slide, index) in projectsForGallery" :key="index" v-bind:style="{ transform: 'translateX(' + (projectsForGallery.findIndex(slide => slide.isActive) * -100) + '%)' }">
          <img :src="require(`@/assets/${slide.fileName}`)" />
        </div>
      </div>
      <div class="controls">
        <button class="controls__item controls__item_prev" @click="prevSlide">&#8592;</button>
        <button class="controls__item controls__item_next" @click="nextSlide">&#8594;</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SliderComp',
  data() {
    return {
      projectsForGallery: [
        { fileName: '1.jpg', isActive: true },
        { fileName: '2.jpg', isActive: false },
        { fileName: '3.jpg', isActive: false },
        { fileName: '4.jpg', isActive: false },
        { fileName: '5.jpg', isActive: false },
        { fileName: '6.jpg', isActive: false },
        { fileName: '7.jpg', isActive: false },
        { fileName: '8.jpg', isActive: false },
      ]
    }
  },
  computed: {    
    activeSlide() {
      return this.projectsForGallery.find(slide => slide.isActive);
    }
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  methods: {
    nextSlide() {
      const lastSlideIndex = this.projectsForGallery.length - 1;
      const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
      const nextSlideIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1;
      this.projectsForGallery[currentSlideIndex].isActive = false;
      this.projectsForGallery[nextSlideIndex].isActive = true;
    },
    prevSlide() {
      const lastSlideIndex = this.projectsForGallery.length - 1;
      const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
      const prevSlideIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1;

      this.projectsForGallery[currentSlideIndex].isActive = false;
      this.projectsForGallery[prevSlideIndex].isActive = true;
    }
  }
}
</script>

<style>

  .slider-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    overflow: hidden;
  }
  .slider {
    display: flex;
    max-height: 799px;
    overflow: hidden;
    border-radius: 70px;
    
  }
  .slide{
   min-width: 100%;
  
  }
  .slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .controls{
    width: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: space-between;
  }

  .controls__item{
    border: none;
    height: 132px;
    width: 132px;
    background-color: rgba(255, 255, 255, .6);
    color: #CDA274;
    font-size: 37px;
    font-weight: 600;
    transition: transform .5s ease-in-out, background-color .2s ease-in-out;
  }

  .controls__item:hover {
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }

  .controls__item_prev {
    transform: translateX(-200px);
    border-radius: 0 30px 30px 0;
  }

  .controls__item_next {
    transform: translateX(200px);
    border-radius: 30px 0 0 30px;
  }

  .slider-container:hover .controls__item{
    transform: translateX(0);
  }


  
</style> 



<!-- <template>
  <div class="slider-container">
    <div class="slider">
      <div class="slide" v-for="(slide, index) in projectsForGallery" :key="index" v-bind:style="{ transform: 'translateX(' + (index * -100) + '%)' }">
      <div class="slide" v-for="(slide, index) in projectsForGallery" :key="index" v-show="activeSlide">
        <img :src="require(`@/assets/${slide.fileName}`)" />
      </div>
    </div>
    <div class="slider__pagination">
      <div class="pagination-dot" v-for="slide in projectsForGallery" :key="slide.id"></div>
    </div>
    <div class="controls">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>
<script>
  import { mapGetters} from 'vuex';

  export default { 
    name: 'SliderComp',
    data(){
      return{
        projectsForGallery: [],
      }
    },
    computed: {
      ...mapGetters(['getCategoryProjects']),
      activeSlide() {
        return this.projectsForGallery.find(slide => slide.isActive);
      }
    },
    mounted() {
      this.projectsForGallery = this.getCategoryProjects('Bedroom');
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    methods: {
      nextSlide() {
        const lastSlideIndex = this.projectsForGallery.length - 1;
        const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
        const nextSlideIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1;
        this.projectsForGallery[currentSlideIndex].isActive = false;
        this.projectsForGallery[nextSlideIndex].isActive = true;
      },
      prevSlide() {
      const lastSlideIndex = this.projectsForGallery.length - 1;
      const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
      const prevSlideIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1;

      this.projectsForGallery[currentSlideIndex].isActive = false;
      this.projectsForGallery[prevSlideIndex].isActive = true;
    }
    }
  }
</script>
<style>

  .slider-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  .slider {
    display: flex;
    max-height: 799px;
    overflow: hidden;
    border-radius: 70px;
    
  }
  .slide{
   min-width: 100%;
  
  }
  .slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .slider__pagination {
    display: flex;
    gap: 5px;
  }

  .pagination-dot{
    width: 15px;
    height: 15px;
    border: 1px solid #000;
    border-radius: 50%;
  }

  .pagination-dot:hover {
    cursor: pointer;
    background-color: #F4F0EC;
  }
  .pagination-dot.active {
    background-color: #F4F0EC;
  }
</style> -->