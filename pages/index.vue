<template>
	<Banner class="banner"/>
	<div class="wrapper services">
		<header class="services__header header">
			<h1 class="header__title">Команда ALL STAR</h1>
			<h3 class="header__subtitle">
				<span class="header__subtitle_left">ALL STAR </span>
				<span class="header__subtitle_right">- это не просто детейлинг студия.</span>
			</h3>
			<p class="header__text">
				Мы можем закрыть любую потребность связанную с автомобилем.
				Подобрать вам автомобиль, сделать страховку по самой приятной цене, выполнить качественный
				детейлинг комплекс, ну а когда вы захотите его продать, мы также сможем помочь.
			</p>
			<h3 class="header__subtitle_right">Что вы можете ожидать от нашей команды оставляя нам свой автомобиль в
				работу?</h3>
			<ul class="header__list">
				<li>Бесплатная консультация, для подбора услуг и расчёта времени на их выполнение!</li>
				<li>Высокое качество проделанной работы!</li>
				<li>Гарантию на услуги!</li>
				<li>Соблюдение заранее поставленных сроков!</li>
				<li>Доставка автомобиля до студии и обратно, если вам неудобно вести его самостоятельно!</li>
				<li>Полный фото и видео отчёт по вашему автомобилю в процессе работы!</li>
				<li>Ну и самое ценное это эмоции и ощущение нового автомобиля!</li>
			</ul>
		</header>

	</div>


	<div class="line"></div>
	<div
		 class="bg-grey"
	>
		<div class="wrapper">
			<h2 class="services__title">Типы Услуг</h2>

			<section class="services__grid">

				<v-lazy transition="scroll-y-transition" class="services__category_lazy">
					<NuxtLink class="services__category category category_1"
					          to="/services/body"
					>
						<aside class="category__body">
							<h3 class="category__title">
								Кузов
							</h3>
							<ul class="category__list">
								<li>Выпрямление вмятин</li>
								<li>Трёх-фазная мойка</li>
								<li>Полировка</li>
								<li>Тонировка</li>

							</ul>
							<div class="category__link category__go">
								<p class="category__title">Перейти</p>
							</div>
						</aside>
						<div class="category__vector"></div>
						<div class="category__dark"></div>
						<img class="category__img" src="~/assets/img/XXL.webp" alt="">
					</NuxtLink>
				</v-lazy>

				<v-lazy transition="scroll-y-transition" class="services__category_lazy">
					<NuxtLink class="services__category category category_1"
				          to="/services/salon"
				>
					<aside class="category__body">
						<h3 class="category__title">
							Салон
						</h3>
						<ul class="category__list">
							<li>Восстановление кожи</li>
							<li>Химчистка салона</li>
							<li>Перешив руля</li>
							<li>Шумоизоляция</li>
						</ul>
						<div class="category__link category__go">
							<p class="category__title">Перейти</p>
						</div>

					</aside>
					<div class="category__vector"></div>
					<div class="category__dark"></div>
					<img class="category__img" src="~/assets/img/porsche-normal.jpg" alt="">
				</NuxtLink>
				</v-lazy>

				<v-lazy transition="scroll-y-transition" class="services__category_lazy">
					<NuxtLink class="services__category category category_1"
				          to="/services/complexes"
				>
					<aside class="category__body">
						<h3 class="category__title">
							Комплексы работ
						</h3>
						<ul class="category__list">
							<li>Подготовка к продаже</li>
							<li>Оклейка пленкой</li>
							<li>Детейлинг салона <br>и кузова</li>
						</ul>

						<div class="category__link category__go">
							<p class="category__title">Перейти</p>
						</div>


					</aside>
					<div class="category__vector"></div>

					<div class="category__dark">
					</div>
					<img class="category__img" src="~/assets/img/PMMU8E2MzS4.jpg" alt="">
				</NuxtLink>
				</v-lazy>

			</section>


			<div class="services__center">
				<NuxtLink class="services__btn" to="/services/all">Смотреть все услуги</NuxtLink>
			</div>

		</div>
	</div>
	<v-parallax
		 class="promo"
		 src="/IMG_5865.jpg"
		 cover
		 scale="0.8"
	>
		<div class="promo__overlay">
			<div class="promo__wrapper wrapper">
				<h2 class="services__title">Наши преимущества</h2>
				<v-lazy transition="scroll-y-transition">
					<section class="promo__body">
						<article class="promo__col">
							<img class="promo__icon" src="/VectorLike.svg" alt="">
							<p class="promo__text">
								Пользуемся только лучшей автохимией, безопасной для ЛКП и салона автомобиля. Покупаем её только
								у проверенных поставщиков, которые не занимаются подделками.
								<br>
								Используем только оригинальное оборудование. Никаких китайских аналогов.
							</p>
						</article>
						<article class="promo__col">
							<img class="promo__icon" src="/VectorStar.svg" alt="">
							<p class="promo__text">
								Перед тем как взять машину в работу мы проводим тщательный осмотр и обсуждаем все нюансы с
								собственником.
								<br>
								Каждый наш клиент получает бонусную услугу бесплатно.(все любят подарки и наши клиенты не
								исключение)
							</p>
						</article>


						<article class="promo__col">
							<img class="promo__icon" src="/VectorSubmit.svg" alt="">
							<p class="promo__text">
								Несём ответственность за выполненную работу. И всегда рассказываем как правильно ухаживать за
								автомобилем после детейлинга.
								<br>
								Всегда делаем работу в срок. Для нашей команды качество работы и сроки превыше всего.
							</p>
						</article>

					</section>
				</v-lazy>
			</div>


		</div>


	</v-parallax>

	<Footer/>
</template>

<script setup>
import Banner from "~/components/Banner.vue";
import Footer from "~/components/Footer.vue";
import {useModalStore} from "~/store/modalStore";

const test = ref([])
const modal = useModalStore()


</script>

<style scoped lang="scss">
@import "~/assets/index";

.services__btn {
	background: none;
	border: 2px solid #c93;
	border-radius: 7px;
	color: #c93;
	cursor: pointer;
	font-weight: 600;
	font-size: 16px;
	padding: 7px 15px;
	transition: .2s ease-in-out;
	display: block;
	width: fit-content;
	text-decoration: none;
}

.services__center {
	display: flex;
	justify-content: center;
	width: 100%;
	padding-bottom: 30px;
}

.wrapper {
	height: 100%;


}


</style>