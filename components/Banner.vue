<template>
	<header class="banner"
	>
		<div class="banner__overlay">
			<div class="wrapper">
				<article class="banner__content" :key="currentPage.id">
					<div class="banner__header">
						<h2 class="banner__title banner__title_white"
						    v-if="currentPage.titleWhite !== ''"
						>{{currentPage.titleWhite}}</h2>
						<h1 class="banner__title banner__title_main"
						    v-if="currentPage.titleMain !== ''"
						>{{currentPage.titleMain}}</h1>
					</div>
					
					<p class="banner__text"
					    v-if="currentPage.text !== '' && typeof currentPage.text !== 'Array'"
					>{{currentPage.text}}</p>
					<ul class="banner__list" v-if="Array.isArray(currentPage.text)">
						<li class="banner__list-item"
						    v-for="item in currentPage.text"
						>
							{{item}}
						</li>
					</ul>
					
					
					<button class="banner__btn">Записаться онлайн</button>
				
				</article>
			</div>
		</div>
		<transition-group name="mode-fade" >
			<img src="~/assets/img/q7AwP7fm4XU.jpg" alt="" class="banner__img" v-if="currentPage.id === 1" >
			<img src="~/assets/img/IMG_5930.jpg"  alt="" class="banner__img" v-if="currentPage.id === 2" >
			<img src="~/assets/img/IMG_6349.jpg"  alt="" class="banner__img" v-if="currentPage.id === 3" >
			
			
			
		</transition-group>
		
	</header>
	<div class="pagination">
		<div class="pagination__item"
		     v-for="index in pages.length"
		     :id="index"
		     :class="{
				 'active': +index === +currentPage.id
		     }"
		     @click="chengeCurrent(index)"
		></div>
	</div>
</template>

<script setup>


	const pages = [
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Рады приветствовать Вас на сайте нашего детейлинг центра! У нас можно заказать полный комплекс услуг направленных на внешнюю и внутреннию отделку Вашей машины. Гарантируем оперативность, высокое качество, доступную цену!\n",
			service: "main",
			id: 1
		},
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Рады приветствовать Вас на сайте нашего детейлинг центра! У нас можно заказать полный комплекс услуг направленных на внешнюю и внутреннию отделку Вашей машины. Гарантируем оперативность, высокое качество, доступную цену!\n",
			service: "main",
			id: 2
		},
	
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Рады приветствовать Вас на сайте нашего детейлинг центра! У нас можно заказать полный комплекс услуг направленных на внешнюю и внутреннию отделку Вашей машины. Гарантируем оперативность, высокое качество, доступную цену!\n",
			service: "main",
			id: 3
		},
	]
	
	const currentPage = ref(pages[0])
	
	const chengeCurrent = (id) => currentPage.value = pages.filter(i => i.id === id)[0]
	
	const sliderIndex = ref(1)
	
	onMounted(() => {
		setInterval(() => {
			chengeCurrent(sliderIndex.value)
			console.log(sliderIndex.value)
			if (sliderIndex.value < pages.length) {
				sliderIndex.value += 1
			} else {
				sliderIndex.value = 1
			}

		}, 3000)
	})
	

</script>

<style scoped lang="scss">
.mode-fade-enter-active, .mode-fade-leave-active {
	transition: opacity .5s ease
}

.mode-fade-enter-from, .mode-fade-leave-to {
	opacity: 0
}
	.banner {
		height: 610px;
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
				margin-bottom: 5px;
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
			width: 490px;
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
			box-shadow: 2px 2px 7px rgba(0,0,0,.3);
			background: rgba(10, 10,10 , 0.5);
			border-radius: 7px;
			
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
			height: 610px;
			position: absolute;
			z-index: 1;
		}
	}
	
	.pagination {
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 10px;
		gap: 10px;
		&__item {
			width: 10px;
			height: 10px;
			background: #a9a9a9;
			border-radius: 50%;
			&.active {
				background: #797979;
			}
			cursor: pointer;
		}
		
		
	}
	
	
	

</style>