<template>
  <!-- https://www.primefaces.org/primevue/timeline -->
  <TopNav/>
  <h1 class="text-center">My Experience</h1>
  <Timeline :value="events" align="alternate" class="customized-timeline">
	<template #marker="slotProps">
		<span class="custom-marker" :style="{backgroundColor: slotProps.item.color}">
			<i :class="slotProps.item.icon"></i>
		</span>
	</template>
	<template #content="slotProps">
		<Card>
			<template #subtitle>
				{{slotProps.item.date}}
			</template>
			<template #content>
				<img v-if="slotProps.item.companyLogo" :src="require('@/assets/' + slotProps.item.companyLogo)" :alt="slotProps.item.name" width="200" />
        <p v-if="slotProps.item.jobTitle" class="text-body1 text-weight-medium">{{ slotProps.item.jobTitle }}</p>
        <div v-if="slotProps.item.companyLogo === 'naadam.png'" class="position-footnote">(Contract Position)</div>
        <div v-if="slotProps.item.companyLogo === 'conductor.png'" class="position-footnote">(Impacted by RIF due to <a href="https://techcrunch.com/2019/12/12/condutor-wework-buyout/">WeWork buyback</a>)</div>
				<div v-html="slotProps.item.blurb"></div>
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
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';
import dowJonesHtml from '@/assets/html/dowJonesHtml.html'
import nycFinanceHtml from '@/assets/html/nycFinance.html';
import amyrisHtml from '@/assets/html/amyrisHtml.html';
import floqastHtml from '@/assets/html/floqastHtml.html';
import naadamHtml from '@/assets/html/naadamHtml.html';
import conductorHtml from '@/assets/html/conductorHtml.html';
import sparknotesHtml from '@/assets/html/sparknotesHtml.html';
import masterdynamicHtml from '@/assets/html/masterdynamicHtml.html';
import dynatraceHtml from '@/assets/html/dynatraceHtml.html';

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
                {
                  jobTitle: 'Lead Software Engineer - Web/SEO', 
                  companyLogo: 'Dow_Jones_Logo.svg', 
                  date: '2025 - Present', 
                  blurb: dowJonesHtml,
                  icon: 'pi pi-cog'
                },
                {
                  jobTitle: 'Digital Web Product Manager', 
                  companyLogo: 'Nyc_finance_logo_website.png', 
                  date: '2023 - 2025', 
                  blurb: nycFinanceHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'E-Commerce Operations Engineer', 
                  companyLogo: 'logo-amyris-colour.svg', 
                  date: '2022 - 2023', 
                  blurb: amyrisHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Web Developer', 
                  companyLogo: 'FQ-logo.png', 
                  date: '2020-2022', 
                  blurb: floqastHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Shopify Developer', 
                  companyLogo: 'naadam.png', 
                  date: 'March 2020 - August 2020', 
                  blurb: naadamHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Web Developer', 
                  companyLogo: 'conductor.png', 
                  date: 'December 2019 - February 2020', 
                  blurb: conductorHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Front End Developer', 
                  companyLogo: 'Logo-Barnes-Noble.jpg', 
                  date: '2017 - 2019', 
                  blurb: sparknotesHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Shopify Front End Developer', 
                  companyLogo: 'Master_&_Dynamic_logo.jpg', 
                  date: '2016-2017', 
                  blurb: masterdynamicHtml,
                  icon: 'pi pi-check'
                },
                {
                  jobTitle: 'Marketing Web Developer', 
                  companyLogo: 'dynatrace_web.png', 
                  date: 'March 2016 - September 2016', 
                  blurb: dynatraceHtml,
                  icon: 'pi pi-check'
                },
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
h1 {margin-top: 120px;}
}
</style>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '~primevue/resources/primevue.min.css';
  @import '~primevue/resources/themes/saga-blue/theme.css';
  @import '~primeicons/primeicons.css';

  .position-footnote {
    font-size: 12px;
  }
  .position-footnote {
    padding: 10px 0;
  }

  .p-card-content:nth-child(even) {
    text-align: left;
  }

  @media screen and (max-width: 960px) {
    .p-timeline {
      max-width: 375px;
      margin: 0 auto;
    }
    .p-timeline-event {
      flex-direction: row-reverse;
    }
    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {text-align: left;}
    .p-timeline-event-opposite {display: none;}
  }
</style>
  