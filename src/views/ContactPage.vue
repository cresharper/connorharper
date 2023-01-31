<template>
    <TopNav />
    <h1 class="text-center">Contact</h1>
    <div class="q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-6">
          <q-form id="contact_form" action="contactme.php" method="post">
			<div id="contact_results"></div>
				<q-input type="text" name="name" id="name" required="true" placeholder="Name (required)" />
				<q-input type="email" name="email" id="email" required="true" placeholder="E-mail (required)" />
				<q-input name="message" id="message" class="text-area-field" required="true" placeholder="Your Message (required)"></q-input>
				<q-btn type="submit" label="Submit" name="submit-button" id="submit_btn" />
			</q-form>
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
    h1 {margin-top: 120px;}
  }
  #submit_btn {
    margin-top: 2rem;
  }
</style>