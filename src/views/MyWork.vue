<template>
    <TopNav/>
    <h1 class="text-center">MY WORK</h1>
    <div class="q-mt-lg q-pa-md">
      <h2 class="text-center">Web Development</h2>
      <div class="row justify-center">
        <div class="col-10">
          <img src="@/assets/fq-careers.png" alt="FQ CAREERS">
        </div>
      </div>
    </div>
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
  