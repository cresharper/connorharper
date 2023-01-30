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
				<p>{{slotProps.item.blurb}}</p>
				<Button label="Read more" class="p-button-text"></Button>
			</template>
		</Card>
	</template>
</Timeline>
  <FooterArea/>
</template>
  
<script>
import TopNav from '../components/TopNav.vue'
import FooterArea from '../components/FooterArea.vue'
import Button from 'primevue/button';
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';

export default {
    name: 'MyWork',
    components: {
      TopNav,
      Button,
      Card,
      Timeline,
      FooterArea
    },
    data() {
        return {
            events: [
                {company: 'Amyris', companyLogo: 'logo-amyris-colour.svg', date: '2020 - Present', blurb: 'somethimg somethimg somethimg somethimgsomethimgsomethimgsomethimgsomethimgsomethimg', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                {company: 'FloQast', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {company: 'Naadam', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {company: 'Conductor', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'},
                {company: 'Barnes & Noble', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
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
</style>
  