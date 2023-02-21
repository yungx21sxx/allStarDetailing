<template>



	<div class="mobile">
		<MobileMenu/>
	</div>
	<div class="desktop">
		<DesktopMenu class="desktop"/>
	</div>

	<NuxtPage/>

	<Modal/>




</template>

<script>


</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

$desktop-menu-height: 61px;
$mobile-menu-height: 69px;

$footer-height: 300px;

.mobile {
	display: none !important;
	@media screen and (max-width: 900px) {
		display: block !important;
	}
}

.desktop {
	display: block !important;
	@media screen and (max-width: 900px) {
		display: none !important;
	}
}


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
	background: #f0f2f5 !important;
}

main {
	min-height: 65vh;
}


</style>