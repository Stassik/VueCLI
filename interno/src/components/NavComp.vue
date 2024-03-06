<template>
    <nav :class="`${classEl}__nav`">
        <ul :class="`${classEl}__nav-list list`">
            <li v-for="item in navList" :key="item.id" :class="`${classEl}__nav-item`"><router-link :to="item.url" :class="`${classEl}__nav-link`">{{item.pageName}}</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
    classEl: String
  },
    name: 'NavComp',
    data(){
      return{
        navList:[
          {pageName: 'Home', url: '/'},
          {pageName: 'Project', url: '/project'},
          {pageName: 'Blog', url: '/blog'}
        ]
      }
    }
}
</script>
<style>
</style>