<template>
    <TopNav />
    <h1 class="text-center">Contact</h1>
    <div class="q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-6">
          <p class="text-body1 text-center">I am best reached via <a class="cl cl-email" href="mailto:connor@connorharper.com">email</a> or <a class="cl cl-linkedin" href="https://www.linkedin.com/in/connor-harper-1900aa4b/">LinkedIn</a></p>
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

<style scoped>
@media screen and (max-width: 960px) {
  h1 {
    margin-top: 120px;
  }
}

#submit_btn {
    margin-top: 2rem;
}
</style>