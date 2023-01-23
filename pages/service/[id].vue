<template>
	<div class="service">
		<button class="service__btn-mobile"
		        @click="router.push(`/services/${service.type}`)"
		>
			<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.49257 17.3009L0 8.8083L8.49257 0.315735L10 1.82317L3.01486 8.8083L10 15.7934L8.49257 17.3009Z" fill="#CC9933"/>
			</svg>
			<span>Услуги</span>
		</button>

		<div class="wrapper service__promo">
			<section class="service__info">
				<div class="service__header">
					<button class="service__back-btn"
					        @click="router.push(`/services/${service.type}`)"
					>
						<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.49257 17.3009L0 8.8083L8.49257 0.315735L10 1.82317L3.01486 8.8083L10 15.7934L8.49257 17.3009Z" fill="#CC9933"/>
						</svg>
						<span>Услуги</span>
					</button>
					<h1 class="service__title">
						{{service.title}}
					</h1>
					
				</div>
				<p class="service__text" style="white-space: pre-line" v-html="service.description">
				</p>
				
				<div class="service__footer footer">

					<div class="footer__top">
						<strong class="service__price">{{service.price}}</strong>
						<p class="service__time">Выполним за {{service.time}}</p>
					</div>
					<button class="service__btn footer__btn"
					        @click="services.openModal(service.title)"
					>Записаться на услугу</button>
				</div>

			</section>
			

<!--				<img :src="service.img" :alt="service.title">-->
                <carousel-photos :photos="service.photos"/>

		</div>
			
	
	</div>

</template>

<script setup>
    import CarouselPhotos from "~/components/CarouselPhotos.vue";
	import {useServiceStore} from "~/store/servicesStore";
	
	const services = useServiceStore()
	const route = useRoute()
	const router = useRouter()
	

	const service = services.get(route.params.id)

</script>

<style scoped lang="scss">

	@import "~/assets/service";
	
	@media screen and (max-width: 900px) {
		.wrapper {
			margin: 0;
			padding: 0;
		}

	}

</style>