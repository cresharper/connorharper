<template>
  <header class="menu-and-logo">
      <a class="logo-link" href="/">
        <div class="name-logo relative-position text-h3">
        <span>C</span>
        <span>H</span>
        </div>
      </a>
      <nav class="menu">
        <ul>
          <li class="q-mr-lg"><router-link :to="{name: 'HomePage'}">Home</router-link></li>
          <li class="q-mr-lg"><router-link :to="{name: 'MyWork'}">My Experience</router-link></li>
          <li class="q-mr-lg"><router-link :to="{name: 'ContactPage'}">Contact</router-link></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
