<template>


		<Banner class="banner"/>

		<section class="wrapper">

				<div class="services">

					<div class="services__flex" :style="{
						display: service.isMobile ? 'block' : 'flex'
					}">
						<article>
							<h1 class="services__title"> Услуги детейлинга</h1>
							<div class="services__text">
								Все работы выполняются сертифицированными специалистами, которые проводят качественную очистку всех труднодоступных частей от загрязнений. Опытные мастера выполнят полировку, а также восстановление блеска покрытия. Благодаря оклейке кузова специальной пленкой или обработке кузова защитным покрытием, автомобиль будет надежно защищен от неблагоприятного воздействия внешней среды. После нанесения защитного покрытия повышается прочность поверхности, которой не страшны удары гравия. Также поверхность наделяется влагоотталкивающими способностями. Избавиться от пятен, неприятных запахов в салоне, а также сделать обивку чистой и эстетичной поможет профессиональный детейлинг салона.
							</div>
						</article>


						<img src="~/assets/img/ur-tuRtlVuk.jpg" alt="">
					</div>
				</div>

			</section>


		<div class="line"></div>
		<div class="bg-grey">
			<div class="wrapper">
				<h2 class="services__title">Типы Услуг</h2>
				<section class="services__grid">
					<NuxtLink class="services__category category category_1"
					          to="/services/body"
					>
						<div class="category__body">
							<h3 class="category__title">
								Кузов
							</h3>
							<ul class="category__list">
								<li>Полировка</li>
								<li>Керамика</li>
								<li>Мойка</li>
							</ul>
							<div class="category__link category__go">
								<p class="category__title">Перейти</p>
							</div>
						</div>
						<div class="category__vector"></div>
						<div class="category__dark"></div>
						<img class="category__img" src="~/assets/img/XXL.webp" alt="">
					</NuxtLink>
					<NuxtLink class="services__category category category_1"
					          to="/services/salon"
					>
						<div class="category__body">
							<h3 class="category__title">
								Салон
							</h3>
							<ul class="category__list">
								<li>Химчистка салона</li>
								<li>Шумоизоляция</li>
							</ul>
							<div class="category__link category__go">
								<p class="category__title">Перейти</p>
							</div>

						</div>
						<div class="category__vector"></div>
						<div class="category__dark"></div>
						<img class="category__img" src="~/assets/img/porsche-normal.jpg" alt="">
					</NuxtLink>
					<NuxtLink class="services__category category category_1"
					          to="/services/complexes"
					>
						<div class="category__body">
							<h3 class="category__title">
								Комплексы работ
							</h3>
							<ul class="category__list">
								<li>Оклейка пленкой</li>
								<li>Полная чистка</li>
								<li>Подготовка к зиме</li>
							</ul>

							<div class="category__link category__go">
								<p class="category__title">Перейти</p>
							</div>


						</div>
						<div class="category__vector"></div>

						<div class="category__dark">
						</div>
						<img class="category__img" src="~/assets/img/PMMU8E2MzS4.jpg" alt="">
					</NuxtLink>

				</section>
			</div>
		</div>
		<div class="promo">

			<div class="promo__overlay">
				<div class="promo__wrapper wrapper">
					<h2 class="services__title">Наши преимущества</h2>
					<section class="promo__body">
						<article class="promo__col">
							<img class="promo__icon" src="~/assets/img/Vector.png" alt="">
							<p class="promo__text">
								Все работы выполняются сертифицированными специалистами, которые проводят качественную очистку всех труднодоступных частей от загрязнений. Опытные мастера выполнят полировку, а также восстановление блеска покрытия.
							</p>
						</article>
						<article class="promo__col">
							<img class="promo__icon" src="~/assets/img/Vector1.png" alt="">
							<p class="promo__text">
								Все работы выполняются сертифицированными специалистами, которые проводят качественную очистку всех труднодоступных частей от загрязнений. Опытные мастера выполнят полировку, а также восстановление блеска покрытия.
							</p>
						</article>




						<article class="promo__col">
							<img class="promo__icon" src="~/assets/img/Vector3.png" alt="">
							<p class="promo__text">
								Все работы выполняются сертифицированными специалистами, которые проводят качественную очистку всех труднодоступных частей от загрязнений. Опытные мастера выполнят полировку, а также восстановление блеска покрытия.
							</p>
						</article>

					</section>
				</div>
			</div>



		</div>




</template>

<script setup>
	import Banner from "~/components/Banner.vue";
	import Footer from "~/components/Footer.vue";
	import {useServiceStore} from "~/store/servicesStore";

    onMounted(() => {

    })

	const service = useServiceStore()
</script>

<style scoped lang="scss">
	@import "~/assets/index";

	.wrapper {
		height: 100%;


	}




</style>