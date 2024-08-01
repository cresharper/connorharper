<template>
    <footer class="q-mt-lg q-mb-lg">
        (C) <span v-html="currentYear"></span> Connor Harper Web Development and Design
    </footer>    
</template>
  
  <script>
  export default {
    name: 'FooterArea',
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  </style>
  