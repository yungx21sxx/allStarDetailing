<template>

	<v-carousel
		 cycle
		 hide-delimiter-background
		 class="banner"
		 :show-arrows="false"
		 color="#CC9933"
		 current-color="black"
		 interval="8000"
	>
		<v-carousel-item
			 v-for="{
				  titleMain, titleWhite, text, id, img
					} in pages"
			 :key="id"
			 :src="img"
			 cover
		>
			<div class="banner__wrapper wrapper">
				<v-lazy transition="scroll-y-transition">
					<header class="banner__content">
						<div class="banner__header">
							<h2 class="banner__title banner__title_white"
							    v-if="titleWhite !== ''"
							    style="white-space: pre-line"
							>{{ titleWhite }}</h2>
							<h1 class="banner__title banner__title_main"
							    v-if="titleMain !== ''"
							>{{ titleMain }}</h1>
						</div>

						<p class="banner__text"
						   style="white-space: pre-line"
						   v-if="text !== ''"
						   v-html="text"
						></p>
						<ul class="banner__list" v-if="Array.isArray(text)">
							<li class="banner__list-item"
							    v-for="item in text"
							>
								{{ item }}
							</li>
						</ul>
						<button class="banner__btn" @click="modal.openModal('')">Записаться онлайн</button>
					</header>
				</v-lazy>
			</div>
		</v-carousel-item>


	</v-carousel>


</template>

<script setup>


import {useModalStore} from "~/store/modalStore";

const pages = ref([
	{
		titleWhite: "Детейлинг центр",
		titleMain: "ALL STAR DETAILING",
		text: "Это качественный и профессиональный уход за вашим автомобилем. Мы оказываем огромный " +
			 "спектор услуг от простых химчисток и полировок до смены цвета автомобиля за счёт плёнки.",
		service: "main",
		img: "q7AwP7fm4XU.jpg",
		id: 1
	},
	{
		titleWhite: "Встречаем весну",
		titleMain: "Скидка 30% на все услуги!",
		text: "Чтобы получить скидку нужно сделать всего 3 действия: <ul style='margin-left: 20px;'><li>Поставить лайк на последний пост в нашей группе VK</li> <li>Быть подписанным на нее</li><li>Cделать репост этой записи на свою страницу</li></ul>",
		service: "main",
		img: "IMG_5930.jpg",
		id: 2
	},

	{
		titleWhite: "Детейлинг центр",
		titleMain: "ALL STAR DETAILING",
		text: "Автомобиль уже не сияет как раньше? Вернём ему вид нового и защитим керамикой! \n" +
			 "Никаких царапин и насыщенный цвет.",
		service: "main",
		img: "IMG_6349.jpg",
		id: 3
	},
])

const modal = useModalStore()


</script>

<style scoped lang="scss">

.banner {
	height: 520px !important;


	background: black;

	//@media screen and (min-width: 1200px) {
	//	background-position: 0 -190px;
	//}

	position: relative;

	&__title {
		&_white {
			font-weight: 300;
			font-size: 26px;
			color: white;

		}

		&_main {
			font-weight: 500;
			font-size: 30px;
			color: #CC9933;
		}
	}

	&__header {
		border-bottom: 2px solid #CC9933;
		padding-bottom: 10px;
	}

	&__text {
		font-weight: 300;
		font-size: 16px;
		line-height: 28px;
		color: white;
		max-width: 490px;
		margin-bottom: 20px;
		margin-top: 7px;


	}

	&__btn {
		display: block;
		width: 172px;
		height: 42px;
		background: none;
		color: #CC9933;
		border: 2px solid #CC9933;
		border-radius: 7px;
		font-weight: 600;
		font-size: 14px;
		line-height: 30px;
		transition: .2s ease-in-out;

		&:hover {
			color: white;
			background: #CC9933;
		}

		cursor: pointer;
	}

	&__content {
		width: fit-content;
		padding: 13px 20px;
		backdrop-filter: blur(2px);
		box-shadow: 2px 2px 7px rgba(0, 0, 0, .3);
		background: rgba(10, 10, 10, 0.7);
		border-radius: 7px;
		//margin: 0 auto;

	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	&__overlay {
		position: absolute;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.35);
		z-index: 2;
	}

	&__img {
		width: 100%;
		object-fit: cover;
		height: 100%;
		position: absolute;
		z-index: 1;
	}
}


</style>