<template>
    <TopNav/>
    <div class="q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-5">
          <h1>A NY based Website Developer</h1>
        </div>
        <div class="relative-position col-3">
          <div class="headshot-image-container">
            <img class="connor-headshot" src="@/assets/me.png" alt="A picture of me" />
          </div>
          <div class="headshot-accent-circles">
            <div class="headshot-accent-circle"></div>
            <div class="headshot-background-circle"></div>
            <div class="headshot-background-circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="who-am-i q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-6">
          <h2 class="text-center">Who Am I?</h2>
          <p class="text-body1">I am a Web Developer and Designer that has experience helping businesses and individuals acheive their goals related to digital presence. I've taken on projects ranging from making landing pages for local bands to developing the Front End for corporation websites with hundreds of thousands of visitors. There isn't an assingment that scares me, and whatever I don't know, I will learn and get the job done.</p>
          <p class="text-body1">My value extends beyond technical ability - I also provide business value with my skills in A/B testing, analytics implementations, performance improvement initiatives as well as User Experience and truly understanding customers and what they need.</p>
        </div>
      </div>
    </div>
    <div class="skillsets q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-6">
          <h2 class="text-center">How can I benefit you?</h2>
          <p class="text-body1">I am a Web Developer and Designer that has experience helping businesses and individuals acheive their goals related to digital presence. I've taken on projects ranging from making landing pages for local bands to developing the Front End for corporation websites with hundreds of thousands of visitors. There isn't an assingment that scares me, and whatever I don't know, I will learn and get the job done.</p>
          <p class="text-body1">My value extends beyond technical ability - I also provide business value with my skills in A/B testing, analytics implementations, performance improvement initiatives as well as User Experience and truly understanding customers and what they need.</p>
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
  h1 {
    color: #000;
  }
</style>
  