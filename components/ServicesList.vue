<template>
	
	<div class="services">
		<TransitionGroup name="fade">
			<ServicesItem v-for="service in serviceType"
			              :key="service.id"
			              :service="service"
			              class="services__item"
			/>
		</TransitionGroup>
		
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
.fade-move,
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
	position: absolute;
}

	.services {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 25px;
		margin-bottom: 50px;
	}
</style>