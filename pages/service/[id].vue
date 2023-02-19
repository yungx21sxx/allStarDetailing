<template>
	<main>


		<div class="service">
			<button class="service__btn-mobile"
			        @click="router.push(`/services/${service.type}`)"
			>
				<svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">
					<path
						 d="M8.49257 17.3009L0 8.8083L8.49257 0.315735L10 1.82317L3.01486 8.8083L10 15.7934L8.49257 17.3009Z"
						 fill="#CC9933"/>
				</svg>
				<span>Услуги</span>
			</button>

			<div class="wrapper service__promo">

				<section class="service__info">
					<div class="service__header">
						<button class="service__back-btn"
						        @click="router.push(`/services/${service.type}`)"
						>
							<svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">
								<path
									 d="M8.49257 17.3009L0 8.8083L8.49257 0.315735L10 1.82317L3.01486 8.8083L10 15.7934L8.49257 17.3009Z"
									 fill="#CC9933"/>
							</svg>
							<span>Услуги</span>
						</button>
						<h1 class="service__title">
							{{ service.title }}
						</h1>

					</div>
					<client-only>
						<p class="service__text" v-html="service.description"></p>
					</client-only>


					<div class="service__footer footer">

						<div class="footer__top">
							<p class="service__time">Выполним за {{ service.time }}</p>
							<strong class="service__price">{{ service.price }}</strong>
						</div>
						<button class="service__btn footer__btn"
						        @click="modal.openModal(service.title)"
						>Записаться на услугу
						</button>
					</div>

				</section>
				<carousel-photos :photos="service.photos"/>
			</div>
		</div>
	</main>
	<Footer/>

</template>

<script setup>
import CarouselPhotos from "~/components/CarouselPhotos.vue";
import {useModalStore} from "~/store/modalStore";
import {services} from "~/store/ServicesData";
import {useHead} from "@vueuse/head";

const modal = useModalStore()
const route = useRoute()
const router = useRouter()
const service = ref(services.filter(i => i.id === route.params.id)[0])


useHead({
	title: service.value.title,
})
</script>

<style lang="scss" scoped>

@import "~/assets/service";

@media screen and (max-width: 900px) {
	.wrapper {
		margin: 0;
		padding: 0;
	}

}

</style>