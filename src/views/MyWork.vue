<template>
  <!-- https://www.primefaces.org/primevue/timeline -->
  <TopNav/>
  <h1 class="text-center">MY WORK</h1>
  <Timeline :value="events" align="alternate" class="customized-timeline">
	<template #marker="slotProps">
		<span class="custom-marker" :style="{backgroundColor: slotProps.item.color}">
			<i :class="slotProps.item.icon"></i>
		</span>
	</template>
	<template #content="slotProps">
		<Card>
			<!-- <template #title>
				{{slotProps.item.company}}
			</template> -->
			<template #subtitle>
				{{slotProps.item.date}}
			</template>
			<template #content>
				<img v-if="slotProps.item.companyLogo" :src="require('@/assets/' + slotProps.item.companyLogo)" :alt="slotProps.item.name" width="200" />
        <div v-if="slotProps.item.company === 'Naadam'" class="position-footnote">(Contract Position)</div>
        <div v-if="slotProps.item.company === 'Conductor'" class="position-footnote">(Impacted by RIF due to WeWork buyout)</div>
				<p>{{slotProps.item.blurb}}</p>
				<!-- <Button label="Read more" class="p-button-text"></Button> -->
			</template>
		</Card>
	</template>
</Timeline>
  <FooterArea/>
</template>
  
<script>
import TopNav from '../components/TopNav.vue'
import FooterArea from '../components/FooterArea.vue'
// import Button from 'primevue/button';
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';

export default {
    name: 'MyWork',
    components: {
      TopNav,
      Card,
      Timeline,
      FooterArea
    },
    data() {
        return {
            events: [
                {company: 'Amyris', companyLogo: 'logo-amyris-colour.svg', date: '2020 - Present', blurb: 'Maintain tagging and analytics for major brands including but not limited to Biossance, JVN Hair and Pipette Baby. Migrated 50+ tags from these brands to Google Tag Manager. Build internal dashboard with Vue.JS and node to integrate with third party APIs (DataDog, Tag Inspector) to display critical website metrics, including a visual map of tags installed on the site and how they are loaded. Use this data to audit Shopify stores to improve site speed and overall performance (boost core web vital scores from 40-50 to 80). Give presentations to executive shareholders on website metrics and performance and give guidance on how to achieve operational excellence.', icon: 'pi pi-cog'},
                {company: 'FloQast', companyLogo: 'FQ-logo.png', date: '2020-2022', blurb: 'Wordpress and PHP Web Development building out highly converting marketing pages. Gather project requirements from stakeholders, navigate ambiguity, and act as technical project manager and define scope and technical feasibility. Manage and configure A/B tests to evaluate user metrics and optimize website for maximum business value – boost signups for demos by 15%.', icon: 'pi pi-check'},
                {company: 'Naadam', companyLogo: 'naadam.png', date: 'March 2020 - August 2020', blurb: 'Shopify related E-Commerce Development for luxury cashmere sweater brand - re-build Shopify theme from ground up utilizing ThemeKit. Managed integrations with third party APIs, coded custom checkout scripts for sale campaigns.', icon: 'pi pi-check'},
                {company: 'Conductor', companyLogo: 'conductor.png', date: 'December 2019 - February 2020', blurb: 'Lead all Wordpress development initiatives for previously WeWork owned Conductor.com – conduct A/B testing on homepage and develop changes which resulted in a 30% increase in conversion rate.', icon: 'pi pi-check'},
                {company: 'Barnes & Noble', companyLogo: 'Logo-Barnes-Noble.jpg', date: '2017 - 2019', blurb: 'Re-developed the front end for SparkNotes, a leading educational resource for high school and college students. Working closely with Graphic and UX designers to implement the new FrontEnd. Assisted in UAT testing for new site design. Working closely with technologies ranging from Sass, Webpack and Gulp. Rapidly gained familiarity with Node.JS and Express.', icon: 'pi pi-check'},
                {company: 'Master & Dynamic', companyLogo: 'Master_&_Dynamic_logo.jpg', date: '2016-2017', blurb: 'Lead all Web Development initiatives for fast growing luxury headphones company. Increased Google PageSpeed score by 30+ points. Established best practices for development work, implemented agile workflow. Wrote clear concise Front End Code and Markup (HTML5, CSS3, JS) that is scalable and follows best conventions. Offered valuable insight into UX of site based on analytics data for best conversion rates.', icon: 'pi pi-check'},
                {company: 'Dynatrace', companyLogo: 'dynatrace_web.png', date: 'March 2016 - September 2016', blurb: 'Worked closely with the marketing team to design and develop an effective user experience for the Dynatrace website that drives conversions. Wrote custom CSS framework that is frequently used on Front End projects. Optimize/reduce code base by thousands of lines to ensure fast load times for web pages. Collaborated with the development team to write scalable and clean code along with working with the Graphic Designers to build out the Front End. Ensured quality of digital assets are high by following through on a thorough debugging process. Assisted in writing clear, concise copy that demonstrates the brand well.', icon: 'pi pi-check'},
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'primevue/resources/primevue.min.css';
  @import 'primevue/resources/themes/saga-blue/theme.css';
  @import 'primeicons/primeicons.css';

  .position-footnote {
    font-size: 12px;
  }
  .position-footnote {
    padding: 10px 0;
  }
</style>
  