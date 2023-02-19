<template>
	<main>


	<div class="wrapper clients">
		<header class="clients__header">
			<h2 class="clients__subtitle">Портфолио работ</h2>
			<h1 class="clients__title">ALL STAR DETAILING</h1>
		</header>
		<div class="clients__grid">
			<v-card
				 v-for="{id, img, car} in clients"
				 :key="id"
				 @click="openDialog(id)"
			>
				<v-img
					 class="align-end"
					 height="240"
					 :src="img"
					 cover
				>
					<h3 class="clients__car-name">{{car}}</h3>
				</v-img>
			</v-card>
		</div>

	</div>
	</main>
	<v-dialog
		 v-model="dialog"
		 class="clients__dialog dialog"
		 :fullscreen="isMobile"
	>
		<div class="dialog__body">
			<button class="dialog__btn-mobile"
			        @click="dialog = false"
			>
				<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.49257 17.3009L0 8.8083L8.49257 0.315735L10 1.82317L3.01486 8.8083L10 15.7934L8.49257 17.3009Z" fill="#CC9933"/>
				</svg>
				<span>Назад</span>
			</button>
			<div class="dialog__bg-grey">
				<v-carousel
					 hide-delimiter-background
					 color="#c93"
					 :show-arrows="!isMobile"

				>
					<v-carousel-item
						 v-for="photo in currentClient.photos"
						 :key="photo"
						 :src="photo"
					></v-carousel-item>
				</v-carousel>
			</div>
			<div class="dialog__info">
				<h2 class="dialog__title">{{currentClient.car}}</h2>
				<p class="dialog__description" style="white-space: pre-line" v-html="currentClient.description"></p>
			</div>
		</div>
	</v-dialog>
	<Footer/>

</template>


<script setup>
	import {clients} from "~/store/ServicesData";
	import {useHead} from "@vueuse/head";

	const dialog = ref(false)
	const currentClient = ref({})
	const isMobile = ref(false)

	useHead({
		title: "Портфолио работ"
	})

	onMounted(() => {
		isMobile.value = window.innerWidth < 900
	})

	const openDialog = (id) => {
		currentClient.value = clients.filter(i => i.id === id)[0]
		dialog.value = true
	}





</script>

<style scoped lang="scss">
	.dialog {
		width: 1000px;
		@media screen and (max-width: 900px){
			width: 100%;
		}

		&__btn-mobile {
			@media screen and (min-width: 900px){
				display: none !important;
			}
			border-radius: 50px;
			display: flex !important;
			position: fixed;
			align-items: center;
			height: 33px;
			padding-left: 10px;
			padding-right: 14px;
			box-shadow: 3px 3px 7px rgba(0,0,0, .5);
			background-color: rgba(0,0,0,.65);
			width: fit-content;
			border: 0;
			z-index: 10;
			top: 10px;
			left: 10px;
			cursor: pointer;

			span {
				height: 19px;
				font-size: 14px;
				font-weight: 400;
				margin-left: 3px;
				font-style: normal;
				line-height: 19px;
				letter-spacing: 0.02px;
				padding-left: 4px;

				color: #fff;
			}
		}
		
		&__body {
			background: #fff;
			border-radius: 7px;
			overflow: auto;
			max-height: 80vh;
			@media screen and (max-width: 900px){
				height: 100vh;
				max-height: 100vh;
				border-radius: 0;
			}
		}

		&__title {
			border-bottom: 2px solid #c93;
			margin-bottom: 10px;
			padding-bottom: 10px;
		}
		
		&__bg-grey {
			//@media screen and (min-width: 900px){
				background: #f7f7f7;
			//}

		}

		&__info {
			padding: 10px 15px;
		}

		&__description {
			margin-bottom: 20px;
		}
		
	}
	.clients {
		&__car-name {
			background: #CC9933;
			color: white;
			width: fit-content;
			margin-left: auto;
			margin-bottom: 5px;
			margin-right: 5px;
			padding: 0 3px;
			border-radius: 4px;

		}
		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			gap: 25px;
			margin-bottom: 50px;
		}
		&__header {
			display: flex;
			align-items: flex-end;
			gap: 20px;
			margin-top: 15px;
			margin-bottom: 20px;

			@media screen and (max-width: 900px) {
				display: block;
			}
		}

		&__subtitle {
			font-style: normal;
			font-weight: 500;
			font-size: 24px;
			line-height: 38px;
			color: #CC9933;


			@media screen and (max-width: 900px) {
				font-size: 20px;
			}
		}

		&__title {
			font-weight: 400;
			font-size: 25px;
			line-height: 38px;
			/* or 134% */

			@media screen and (max-width: 900px) {
				font-size: 24px;
			}


			display: flex;
			align-items: center;
		}
	}

</style>