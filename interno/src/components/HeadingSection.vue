<template>
    <div :class="`${classEl}__descr section__descr center`">
        <h2 :class="`${classEl}__title title`">{{title}}</h2>
        <p :class="`${classEl}__text text`">{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
    classEl: String,    
    title: String,
    description: String
  },
    name: 'HeadingSection',
}
</script>

<style>

</style>