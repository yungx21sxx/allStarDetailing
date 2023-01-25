<template>
	<MobileMenu v-if="service.isMobile"/>
	<DesktopMenu v-else/>
	<Modal/>
	<main>
		<NuxtPage/>
	</main>
	<Footer/>

	<v-carousel hide-delimiters

	>
		<v-carousel-item
			 src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
			 cover
		>
			fdsfdsfdsfsdf
		</v-carousel-item>

		<v-carousel-item
			 src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
			 cover
		></v-carousel-item>

		<v-carousel-item
			 src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
			 cover
		></v-carousel-item>
	</v-carousel>
	<v-parallax
		 dark
		 src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
	>
		<v-row
			 align="center"
			 justify="center"
		>
			<v-col
				 class="text-center"
				 cols="12"
			>
				<h1 class="text-h4 font-weight-thin mb-4">
					Vuetify
				</h1>
				<h4 class="subheading">
					Build your application today!
				</h4>
			</v-col>
		</v-row>
	</v-parallax>
</template>


<script setup>

import DesktopMenu from "~/components/DesktopMenu.vue";
import Footer from "~/components/Footer.vue";
import Modal from "~/components/Modal.vue";
import {useServiceStore} from "~/store/servicesStore";

const service = useServiceStore()


onMounted(() => {
	service.setMobile(window.innerWidth < 900)
	window.addEventListener('resize', event => {
		service.setMobile(window.innerWidth < 900)
	})
})



</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');


	 * {
		 margin: 0;
		 padding: 0;
		 box-sizing: border-box;
		 font-family: 'Montserrat', sans-serif;
	 }
	.wrapper {
		max-width: 1000px;
		width: 100%;
		margin: 0 auto;
		padding: 0 15px;
	}

	.bg-grey {
		background: #F7F7F7;
	}

	main {
		min-height: 80vh;
	}


</style>