<template>
	
	<div class="services">

		<ServicesItem v-for="service in serviceType"
		              :key="service.id"
		              :service="service"
		              class="services__item"
		/>

	</div>

</template>

<script setup>

	import ServicesItem from "~/components/ServicesItem.vue";
	import {useServiceStore} from "~/store/servicesStore";
	
	const route = useRoute()
	const {services} = useServiceStore()

	
	const props = defineProps({
		type: {
			type: String,
			default: 'all'
		}
	})

	
	const serviceType = props.type === 'all' ? services : services.filter(i => i.type === props.type)

</script>

<style scoped lang="scss">
	.services {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 25px;
		margin-bottom: 50px;
	}
</style>