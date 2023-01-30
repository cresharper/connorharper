<template>
  <!-- https://vuejsexamples.com/a-cute-timeline-component-for-vue-js/ -->
    <TopNav/>
    <h1 class="text-center">MY WORK</h1>
    <FooterArea/>
</template>
  
<script>
import TopNav from '../components/TopNav.vue'
import FooterArea from '../components/FooterArea.vue'

export default {
    name: 'MyWork',
    components: {
      TopNav,
      FooterArea
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  