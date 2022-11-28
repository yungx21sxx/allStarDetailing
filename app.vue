<template>
	<DesktopMenu/>
	<modal/>
	<main>
		<NuxtPage/>
	</main>
	<Footer/>
</template>


<script setup>

import DesktopMenu from "~/components/DesktopMenu.vue";
import Footer from "~/components/Footer.vue";
import Modal from "~/components/Modal.vue";

const route = useRoute()

watch(
	() => route.fullPath,
	() => {
		window.scroll(0,0)

	}
)


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

	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>