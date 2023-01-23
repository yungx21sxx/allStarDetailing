<template>

	<div class="menu">
		<div class="menu__burger">
			<input type="checkbox" ref="toggler" class="toggler" @click="toggleMenu = !toggleMenu">
			<div class="hamburger">
				<div></div>
			</div>
		</div>

		<img src="~/assets/img/Logo.svg" alt="" class="menu__logo">
		<svg class="menu__phone" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"
             @click="service.openModal('')"
        >
			<path d="M13.5121 7.58001L8.86044 2.21064C8.32419 1.59189 7.34107 1.59464 6.71819 2.21889L2.89294 6.05101C1.75444 7.19089 1.42857 8.88351 2.08719 10.2406C6.02192 18.3875 12.5923 24.967 20.7336 28.9131C22.0893 29.5718 23.7806 29.2459 24.9191 28.106L28.7801 24.2381C29.4057 23.6125 29.4071 22.6239 28.7828 22.0876L23.3928 17.4608C22.8291 16.9768 21.9532 17.04 21.3881 17.6065L19.5126 19.4848C19.4166 19.5854 19.2902 19.6517 19.1528 19.6736C19.0154 19.6954 18.8747 19.6716 18.7522 19.6058C15.6866 17.8404 13.1436 15.2941 11.3822 12.2261C11.3162 12.1034 11.2923 11.9624 11.3142 11.8249C11.3361 11.6873 11.4025 11.5606 11.5032 11.4644L13.3732 9.59301C13.9397 9.02376 14.0016 8.14376 13.5121 7.57864V7.58001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>

	</div>
	<div class="overlay"></div>
	<transition name="slide-fade">
		<nav class="menu__body catalog" v-if="toggleMenu">
			<div @click="goToSection('/')" class="menu__link">Главная</div>
			<div @click="goToSection('/services/all')" class="menu__link">Услуги</div>
			<div @click="goToSection('/')" class="menu__link">Контакты</div>
			<div @click="goToSection('/')" class="menu__link">Наши работы</div>
		</nav>
	</transition>

</template>

<script setup>


import {useServiceStore} from "~/store/servicesStore";

const toggler = ref(null)
const router = useRouter()

const toggleMenu = ref(false)

const service = useServiceStore()


const goToSection = (link) => {
	router.push(link)
	toggler.value.click()
}



</script>

<style scoped lang="scss">

.overlay {
	height: 69px;
}
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.catalog {
	padding: 10px 10px 60px 10px;
	overflow-y: auto;

	&__item {
		max-width: 359px;
		width: 100%;
		margin: 10px auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: rgb(0 0 0 / 15%) 0px 0.5px 10px 0px;
		border-radius: 10px;
		background-size: cover;
		cursor: pointer;
		height: 80px;

		position: relative;
		overflow: hidden;
		padding: 10px 14px 10px 10px;
	}

	&__title {
		font-size: 22px;
		font-weight: 600;
		margin: 0;
		text-transform: uppercase;
	}
}

$grey: #4a4a4a;
.menu {
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
	background: rgba(255, 255, 255, 1);
	//backdrop-filter: blur(2px);
	border-bottom: 1px solid #BEBEBE;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 200;
	display: flex;

	align-items: center;

	height: 69px;

	&__phone {
		position: absolute;
		display: block;
		right: 15px;
	}

	&__logo {
		position: absolute;
		left:0;
		right:0;
		margin-left:auto;
		margin-right:auto;
		height: 47px;
		top: 10px;
	}

	&__body {
		position: fixed;
		width: 100%;
		max-height: 100vh;
		height: 100%;
		z-index: 150;
		background: #f6f6f6;
		overflow-y: auto;


		padding-bottom: 85px;
	}

	&__link {
		display: block;
		border-bottom: 1px solid #E2E2E2;
		padding: 20px 0;
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: black;
		text-decoration: none;
		&:hover, &:active {
			color: #CC9933;
		}
	}


}

.toggler{
	/* ALWAYS KEEPING THE TOGGLER OR THE CHECKBOX ON TOP OF EVERYTHING :  */
	z-index:2;
	height: 50px;
	width: 50px;
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
	opacity: 0;
}

.hamburger{

	top: 0;
	left: 0;
	height: 55px;
	width: 70px;
	padding: 0.6rem;

	/* FOR DISPLAYING EVERY ELEMENT IN THE CENTER : */

	display: flex;
	align-items: center;
	justify-content: center;
}

/* CREATING THE MIDDLE LINE OF THE HAMBURGER : */

.hamburger > div{
	position: relative;
	top: 0;
	left: 0;
	background: $grey;
	height: 4px;
	width: 60%;
	transition: all  0.4s ease;
}

/* CREATING THE TOP AND BOTTOM LINES :
TOP AT -10PX ABOVE THE MIDDLE ONE AND BOTTOM ONE IS 10PX BELOW THE MIDDLE: */

.hamburger > div::before,
.hamburger > div::after{
	content: '';
	position: absolute;
	top: -10px;
	background: $grey;
	width: 100%;
	height: 4px;
	transition: all  0.4s ease;
}

.hamburger > div::after{
	top: 10px;
}

/* IF THE TOGGLER IS IN ITS CHECKED STATE, THEN SETTING THE BACKGROUND OF THE MIDDLE LAYER TO COMPLETE BLACK AND OPAQUE :  */

.toggler:checked + .hamburger > div{
	background: rgba(0,0,0,0);
}

.toggler:checked + .hamburger > div::before{
	top: 0;
	transform: rotate(45deg);
	background: black;
}

/* AND ROTATING THE TOP AND BOTTOM LINES :  */

.toggler:checked + .hamburger > div::after{
	top: 0;
	transform: rotate(135deg);
	background: black;
}


/* MAIN MENU WITH THE WHITE BACKGROUND AND THE TEXT :  */



/* IF THE TOGGLER IS CHECKED, THEN INCREASE THE WIDTH OF THE MENU TO 30% , CREATING A SMOOTH EFFECT :  */




/* STYLING THE LIST :  */







</style>