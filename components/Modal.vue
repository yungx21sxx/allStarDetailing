<template>

	<v-dialog
			 v-model="modal.isOpen"
			 :fullscreen="isMobile"
			 class="modal"
		>
			<section class="modal__body">
				<div class="modal__header">
					<h2 v-if="modal.service !== ''" class="modal__title">Записаться на услугу</h2>
					<h2 v-else class="modal__title">Записаться онлайн</h2>
					<svg class="modal__close-btn" fill="none" height="18" viewBox="0 0 17 18" width="17"
					     xmlns="http://www.w3.org/2000/svg" @click="modal.closeModal">
						<path
							 d="M8.49997 10.75L2.57913 16.875C2.35761 17.1042 2.07566 17.2188 1.7333 17.2188C1.39094 17.2188 1.10899 17.1042 0.887467 16.875C0.665939 16.6458 0.555176 16.3542 0.555176 16C0.555176 15.6458 0.665939 15.3542 0.887467 15.125L6.8083 9L0.887467 2.875C0.665939 2.64583 0.555176 2.35417 0.555176 2C0.555176 1.64583 0.665939 1.35417 0.887467 1.125C1.10899 0.895833 1.39094 0.78125 1.7333 0.78125C2.07566 0.78125 2.35761 0.895833 2.57913 1.125L8.49997 7.25L14.4208 1.125C14.6423 0.895833 14.9243 0.78125 15.2666 0.78125C15.609 0.78125 15.8909 0.895833 16.1125 1.125C16.334 1.35417 16.4448 1.64583 16.4448 2C16.4448 2.35417 16.334 2.64583 16.1125 2.875L10.1916 9L16.1125 15.125C16.334 15.3542 16.4448 15.6458 16.4448 16C16.4448 16.3542 16.334 16.6458 16.1125 16.875C15.8909 17.1042 15.609 17.2188 15.2666 17.2188C14.9243 17.2188 14.6423 17.1042 14.4208 16.875L8.49997 10.75Z"
							 fill="black"/>
					</svg>
				</div>

				<form class="modal__form" @submit.prevent="submit">
					<p class="modal__text">
						Оставьте свои данные и пожелания к работе, чтобы записаться. Вам перезвонит первый
						освободившийся специалсит.
					</p>
					<v-select
						 v-model="chosenServices"
						 :items="servicesList"
						 chips
						 clearable
						 color="#c93"
						 density="compact"
						 label="Выберите услуги"
						 multiple
						 variant="outlined"
						 required
					></v-select>

					<PhoneInput v-model="phone"
					            variant="outlined"
					            required
					/>
					<v-text-field
						 v-model="name"
						 color="#c93"
						 density="compact"
						 label="Как Вас зовут?"
						 variant="outlined"
						 required
					></v-text-field>
					<v-text-field
						 v-model="date"
						 density="compact"
						 label="На какое число хотели бы записаться?"
						 type="date"
						 variant="outlined"
						 required
					></v-text-field>
					<v-textarea v-model="question"
					            clearable
					            color="#CC9933"
					            label="Какие у вас пожелания к работе? (необязательно)"
					            variant="outlined"
					></v-textarea>
					<v-btn
						 :disabled="loading"
						 :loading="loading"
						 block
						 class="modal__btn"
						 color="#c93"
						 size="large"
						 type="submit"
						 variant="elevated"
					>{{ submitBtnText }}
					</v-btn>
				</form>

			</section>

		</v-dialog>




</template>

<script setup>

import {useModalStore} from "~/store/modalStore";
import {services} from "~/store/ServicesData";
import useTelegram from "~/composables/UseTelegram";



const modal = useModalStore()
const servicesList = services.map(i => i.title)
const isMobile = ref(false)
const loading = ref(false)
const submitBtnText = ref('Отправить заявку')

const chosenServices = ref([])
const phone = ref('')
const name = ref("")
const date = ref("")
const question = ref("")

const isFetched = ref(false)

const {requestForRegistration} = useTelegram()

const reset = () => {
	phone.value = name.value = date.value = question.value = ""
	chosenServices.value = []
	submitBtnText.value = 'Отправить заявку'
}



const submit = async () => {
	loading.value = true
	await requestForRegistration({
		phone: phone.value,
		name: name.value,
		services: chosenServices.value,
		date: date.value,
		question: question.value
	})
	await new Promise(resolve => setTimeout(() => {
		loading.value = false
		isFetched.value = true
		submitBtnText.value = 'Вы успешно записались'
		resolve()
	}, 300))
	await new Promise(resolve => setTimeout(() => {
		modal.closeModal()
		reset()
		resolve()
	}, 1000))

}

watch(
	 () => modal.service,
	 (service) => {
		 if (service !== '') {
			 chosenServices.value = [service]
		 } else {
			 chosenServices.value = []
		 }
	 }
)

onMounted(() => {
	isMobile.value = window.innerWidth < 900
})


</script>

<style lang="scss" scoped>
.modal {
	max-width: 575px;

	&__btn {
		margin-bottom: 30px;
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

	&__body {
		background: #fff;
		border-radius: 7px;
		overflow: auto;
		max-width: 575px;
		margin: 0 auto;
		@media screen and (max-width: 900px) {
			height: 100vh;
			max-height: 100vh;
			border-radius: 0;
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


}


</style>