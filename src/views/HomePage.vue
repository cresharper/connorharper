<template>
    <TopNav/>
    <section class="summary q-mt-lg q-pa-md">
      <div class="row justify-center">
        <div class="col-12 col-md-6">
          <h1>Hello! I'm Connor.</h1>
        </div>
        <div class="my-pic relative-position col-12 col-md-2">
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
        <div class="col-9 col-sm-6">
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
          <p class="first-p text-body1 text-center text-weight-medium q-mt-lg">7+ years of professional experience working in a variety of Front End technologies. Works cross functionally with a team mentality, and is able to change course quickly in an agile environment. Has a proven track record of understanding end users and formulating creative solutions to problems.</p>
        </div>
      </div>
      <div class="ecommerce-skills row justify-center items-center">
        <div class="col-12 col-md-6">
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
          <p class="second-p text-body1 text-center text-weight-medium q-mt-lg">Possesses extensive knowledge of E-Commerce development platforms and understands how to integrate with third party API solutions to deliver exceptional customer experiences.</p>
        </div>
      </div>
      <div class="row justify-center items-center" style="margin-top: 3rem;">
        <div class="col-12 col-md-6">
          <h3 class="text-center">Analytics and Tagging</h3>
        </div>
        <div class="col-12 col-md-6">
          <div class="value-prop-images">
            <img src="@/assets/Google-a.png" alt="Google Analytics Logo">
            <img src="@/assets/gtm.svg" alt="Google Tag Manager Logo">
            <img src="@/assets/Adobe-a.png" alt="Adobe Analytics Logo">
            <img src="@/assets/google-optimize.png" alt="Google Optimize Logo">
            <img src="@/assets/search-console.png" alt="Search Console Logo">
          </div>
        </div>
      </div>
      <div class="row justify-center items-center q-mb-lg">
        <div class="col col-md-6">
          <p class="third-p text-body1 text-center text-weight-medium q-mt-lg">Can build an integral relationship with digital marketing and product teams to implement analytics and tagging solutions to gather valuable business and customer insights to enable organizations to make high impact business desicions.</p>
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
  @media screen and (max-width: 1024px) {
    h1 {
      text-align: center;
    }
    .ecommerce-skills {
      flex-direction: column-reverse;
    }
    .summary .my-pic {
      margin-left: 50%;
    }
    .skillsets .value-prop-images {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
    .skillsets .value-prop-images img {
      position: relative;
      top: 0;
      left: 0;
    }
    .first-p, .third-p {
      margin-top: 4rem;
    }
  }
</style>
  