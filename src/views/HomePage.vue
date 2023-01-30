<template>
    <TopNav/>
    <section class="q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-12 col-md-6">
          <h1>A NY based Tech Professional</h1>
        </div>
        <div class="relative-position col-12 col-md-2">
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
    </section>
    <section class="who-am-i q-mt-lg q-pb-lg">
      <div class="row justify-center">
        <div class="col-6">
          <h2 class="text-center">Who Am I?</h2>
          <p class="text-body1">As a professional web developer, I have a strong focus on front-end technologies and have extensive experience in building highly interactive and user-friendly websites. My expertise lies in HTML, CSS, JavaScript, and modern frameworks such as Vue and React. I have a keen eye for design and pay close attention to details, ensuring that the end result meets the highest standards of quality and usability.</p>
          <p class="text-body1">In addition to front-end development, I also have experience in developing e-commerce websites and integrating them with payment gateways and shipping providers. I am knowledgeable in analytics, tagging, and A/B testing, allowing me to provide valuable insights into website performance and user behavior. I understand the importance of data-driven decisions and always strive to provide the best possible user experience through continuous optimization and improvement.</p>
        </div>
      </div>
    </section>
    <section class="skillsets q-mt-lg q-pa-md">
      <h2 class="text-center">How can I benefit you or your organization?</h2>
      <div class="row justify-center items-center">
        <div class="col-12 col-md-6">
          <h3 class="text-center">Web Development</h3>
        </div>
        <div class="col-12 col-md-6">
          <div class="value-prop-images">
            <img src="@/assets/html.png" alt="HTML Logo">
            <img src="@/assets/css.png" alt="CSS Logo">
            <img src="@/assets/js.png" alt="JS Logo">
            <img src="@/assets/vue.png" alt="Vue Logo">
            <img src="@/assets/nodejs.png" alt="Node Logo">
          </div>
        </div>
      </div>
      <div class="row justify-center items-center q-mb-lg">
        <div class="col col-md-6">
          <p class="text-body1 text-center text-weight-medium q-mt-lg">7+ years of professional experience working in a variety of Front End technologies. Is known for producing at a rapid pace and is able to change course quickly in an agile environment. Has a proven track record of understanding end users and formulating creative solutions to problems.</p>
        </div>
      </div>
      <div class="ecommerce-skills row justify-center items-center">
        <div class="col-12 col-md-5">
          <div class="value-prop-images ecommerce-logos">
            <img src="@/assets/shopify.png" alt="Shopify Logo">
            <img src="@/assets/bigcommerce.png" alt="Bigcommerce Logo">
            <img src="@/assets/stripe.png" alt="Stripe Logo">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h3 class="text-center">E-Commerce Development and Integrations</h3>
        </div>
      </div>
      <div class="row justify-center items-center q-mb-lg">
        <div class="col col-md-6">
          <p class="text-body1 text-center text-weight-medium q-mt-lg">Has expert knowledge of E-Commerce development platforms and understands how to integrate with third party API solutions to gather business metrics and deliver value to stakeholders.</p>
        </div>
      </div>
      <div class="row justify-center items-center" style="margin-top: 3rem;">
        <div class="col-12 col-md-6">
          <h3 class="text-center">Analytics and Tagging</h3>
        </div>
        <div class="col-12 col-md-6">
          <div class="value-prop-images">
            <img src="@/assets/GAnalytics.png" alt="Google Analytics Logo">
            <img src="@/assets/gtm.svg" alt="Google Tag Manager Logo">
            <img src="@/assets/Adobe-Analytics.png" alt="Adobe Analytics Logo">
            <img src="@/assets/google-optimize.png" alt="Google Optimize Logo">
            <img src="@/assets/search-console.png" alt="Search Console Logo">
          </div>
        </div>
      </div>
      <div class="row justify-center items-center q-mb-lg">
        <div class="col col-md-6">
          <p class="text-body1 text-center text-weight-medium q-mt-lg">Working closely with digital and marketing teams to implement Analytics and tagging solutions to gather valuable business and customer insights to enable organizations to make high impact business desicions.</p>
        </div>
      </div>
    </section>
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
  /* .value-prop-images:before {
    display: table;
    content: '';
    position: absolute;
    right: 20%;
    width: 400px;
    height: 400px;
    border: 1px dotted rgba(139, 139, 139, 0.338);
    border-radius: 100%;
  } */
  @media screen and (max-width: 980px) {
    h1 {
      text-align: center;
    }
    .ecommerce-skills {
      flex-direction: column-reverse;
    }
  }
</style>
  