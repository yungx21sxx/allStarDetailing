<template>

	<div class="modal"
	     :class="{
			'hidden': !service.modal.isOpen
	     }"
	>
		
		<transition name="fade">
			<section class="modal__body" v-if="service.modal.isOpen"
			>
				<div class="modal__header">
					<h2 class="modal__title" v-if="service.modal.service !== ''">Записаться на услугу</h2>
					<h2 class="modal__title" v-else>Получить консультацию</h2>
					<svg @click="service.closeModal()" class="modal__close-btn" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.49997 10.75L2.57913 16.875C2.35761 17.1042 2.07566 17.2188 1.7333 17.2188C1.39094 17.2188 1.10899 17.1042 0.887467 16.875C0.665939 16.6458 0.555176 16.3542 0.555176 16C0.555176 15.6458 0.665939 15.3542 0.887467 15.125L6.8083 9L0.887467 2.875C0.665939 2.64583 0.555176 2.35417 0.555176 2C0.555176 1.64583 0.665939 1.35417 0.887467 1.125C1.10899 0.895833 1.39094 0.78125 1.7333 0.78125C2.07566 0.78125 2.35761 0.895833 2.57913 1.125L8.49997 7.25L14.4208 1.125C14.6423 0.895833 14.9243 0.78125 15.2666 0.78125C15.609 0.78125 15.8909 0.895833 16.1125 1.125C16.334 1.35417 16.4448 1.64583 16.4448 2C16.4448 2.35417 16.334 2.64583 16.1125 2.875L10.1916 9L16.1125 15.125C16.334 15.3542 16.4448 15.6458 16.4448 16C16.4448 16.3542 16.334 16.6458 16.1125 16.875C15.8909 17.1042 15.609 17.2188 15.2666 17.2188C14.9243 17.2188 14.6423 17.1042 14.4208 16.875L8.49997 10.75Z" fill="black"/>
					</svg>
				</div>
				
				<form class="modal__form">
					<p class="modal__text">Оставьте свои данные и пожелания к работе, чтобы получить консультацию. Вам перезвонит первый освободившийся специалсит.</p>
					<section class="modal__option" v-if="service.modal.type === 'service' && service.modal.service !== ''">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.17 13.71L15.57 11.29C15.66 11.14 15.62 10.95 15.49 10.84L14.01 9.68C14.04 9.46 14.06 9.23 14.06 9C14.06 8.77 14.04 8.54 14.01 8.31L15.49 7.15C15.62 7.04 15.66 6.85 15.57 6.7L14.17 4.28C14.08 4.13 13.9 4.07 13.74 4.13L12 4.83C11.64 4.55 11.25 4.32 10.82 4.14L10.56 2.29C10.5432 2.20912 10.4994 2.13636 10.4358 2.08366C10.3722 2.03096 10.2926 2.00145 10.21 2H7.41C7.24 2 7.09 2.13 7.06 2.3L6.8 4.15C6.38 4.33 5.98 4.56 5.62 4.84L3.88 4.14C3.72 4.08 3.54 4.14 3.45 4.29L2.05 6.71C1.96 6.86 2 7.05 2.13 7.16L3.61 8.32C3.58 8.54 3.56 8.77 3.56 9C3.56 9.23 3.58 9.46 3.61 9.69L2.13 10.85C2 10.96 1.96 11.15 2.05 11.3L3.45 13.72C3.54 13.87 3.72 13.93 3.88 13.87L5.62 13.17C5.98 13.45 6.37 13.68 6.8 13.86L7.06 15.71C7.09 15.87 7.24 16 7.41 16H10.21C10.38 16 10.53 15.87 10.56 15.7L10.82 13.85C11.24 13.67 11.64 13.44 12 13.16L13.74 13.86C13.9 13.92 14.08 13.86 14.17 13.71V13.71ZM8.81 11C7.71 11 6.81 10.1 6.81 9C6.81 7.9 7.71 7 8.81 7C9.91 7 10.81 7.9 10.81 9C10.81 10.1 9.91 11 8.81 11ZM21.92 18.67L20.96 17.93C20.98 17.79 21 17.64 21 17.49C21 17.34 20.99 17.19 20.96 17.05L21.91 16.31C21.99 16.24 22.02 16.12 21.96 16.02L21.06 14.47C21.01 14.37 20.89 14.34 20.78 14.37L19.67 14.82C19.44 14.64 19.19 14.49 18.91 14.38L18.74 13.2C18.7361 13.1466 18.7124 13.0965 18.6736 13.0595C18.6347 13.0226 18.5836 13.0013 18.53 13H16.74C16.63 13 16.53 13.08 16.52 13.19L16.35 14.37C16.08 14.49 15.82 14.63 15.59 14.81L14.48 14.36C14.429 14.3408 14.3729 14.3404 14.3217 14.3587C14.2704 14.377 14.2273 14.4129 14.2 14.46L13.3 16.01C13.25 16.11 13.26 16.23 13.35 16.3L14.3 17.04C14.2588 17.3319 14.2588 17.6281 14.3 17.92L13.35 18.66C13.27 18.73 13.24 18.85 13.3 18.95L14.2 20.5C14.25 20.6 14.37 20.63 14.48 20.6L15.59 20.15C15.82 20.33 16.07 20.48 16.35 20.59L16.52 21.77C16.54 21.88 16.63 21.96 16.74 21.96H18.53C18.64 21.96 18.74 21.88 18.75 21.77L18.92 20.59C19.19 20.47 19.45 20.33 19.67 20.15L20.79 20.6C20.89 20.64 21.01 20.6 21.07 20.5L21.97 18.95C22.03 18.86 22 18.74 21.92 18.67V18.67ZM17.63 18.83C17.2718 18.8299 16.9284 18.6875 16.6752 18.4341C16.422 18.1807 16.2799 17.8372 16.28 17.479C16.2801 17.1208 16.4225 16.7774 16.6759 16.5242C16.9293 16.271 17.2728 16.1289 17.631 16.129C17.9892 16.1291 18.3326 16.2715 18.5858 16.5249C18.839 16.7783 18.9811 17.1218 18.981 17.48C18.9809 17.8382 18.8385 18.1816 18.5851 18.4348C18.3317 18.688 17.9882 18.8301 17.63 18.83V18.83Z" fill="#CC9933"/>
						</svg>
						<h3>{{service.modal.service}}</h3>
					</section>
					<CustomSelect :params="service.services" v-else/>
					<!-- <input type="date" class="modal__input modal__input_date"> -->
					<div class="modal__input">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="black"/>
						</svg>
						<div class="line"></div>
						<input type="tel" placeholder="Телефон" required v-model="phone">
					</div>
					<textarea class="modal__textarea" placeholder="Какую проблему Вы хотите решить? (необезательно)"></textarea>
					<input type="submit" class="modal__btn" value="Записаться на услугу">
				</form>
				
			</section>
			
		</transition>
		<transition name="fade">
			<section class="modal__body" v-if="service.modal.isOpen && service.modal.type === 'photo'">
			
			</section>
		</transition>
		
		
		<transition name="fade">
			<div class="modal__overlay"
			     v-if="service.modal.isOpen"
			     @click="service.closeModal()"
			></div>
		</transition>
		
	</div>
	
	

</template>

<script setup>

import {useServiceStore} from "~/store/servicesStore";
import CustomSelect from "~/components/CustomSelect.vue";



const phone = ref('')

const inputValid = ref(false)

const service = useServiceStore()

function changeOverflow (isOpen) {
	const body = document.querySelector('body')
	body.style.overflow = isOpen ? 'hidden' : 'auto'
}

watch(
	 () => service.modal.isOpen,
	 changeOverflow
)



</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(-30px);
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
	.modal {
	
		
	
		
		&__btn {
			padding: 10px 15px;
			border: 2px solid #CC9933;
			border-radius: 7px;
			background: none;
			cursor: pointer;
			color: #CC9933;
			font-weight: 500;
			transition: 0.2s ease-in-out;
			margin-bottom: 30px;
			&:hover {
				background: #CC9933;
				color: white;
			}
		}
		
		&__close-btn {
			cursor: pointer;
			path {
				transition: .2s ease;
			}
			
			&:hover path {
				fill: #CC9933;
			}
		}
		&__overlay {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: 11;
			background: rgba(0, 0, 0, 0.51);
		}
		
		&__body {
			background: white;
			z-index: 20;
			
			border-radius: 7px;
			box-shadow: 5px 5px 10px rgba(0,0,0,.4);
			max-width: 576px;
			width: 100%;
			position: fixed;
			left: 50%;
			transform: translate(-50%, 0);
			top: 150px;

			@media screen and (max-width: 900px){
				border-radius: 0;
				top: 67px;
				height: 100vh;

			}
		}
		
		&__header {
			height: 65px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #F7F7F7;
			border-radius: 7px 7px 0 0;
			padding: 18px 28px;
		}
		
		&__title {
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
			letter-spacing: 1.1px;
			
			color: #CC9933;
		}
		
		&__text {
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;
			color: #646464;
		}
		
		&__form {
			padding: 18px 28px;
			& > * {
				margin-bottom: 15px;
			}
		}
		
		&__textarea {
			width: 100%;
			height: 180px;
			padding: 9px;
			resize: none;
			background: #F7F7F7;
			border: 1px solid #C5C5C5;
			border-radius: 7px;
		}
		
		&__input {
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;
			padding: 3px;
			
			background: #F7F7F7;
			border: 1px solid #C5C5C5;
			border-radius: 7px;
			
			input {
				display: block;
				width: 100%;
				height: 100%;
				border: 0;
				background: none;
				padding-left: 9px;
				outline: none;
			}
			
			.line {
				height: 100%;
				width: 1px;
				background: #D9D9D9;
			}
			
			svg {
				height: 20px;
				margin: 0 5px;
				
			}
		}
		&__option {
			display: flex;
			align-items: center;
			gap: 10px;
			
			h3 {
				font-weight: 600;
				font-size: 16px;
				line-height: 38px;
				color: #CC9933;
			}
		}
		
		
		
	}
	

</style>