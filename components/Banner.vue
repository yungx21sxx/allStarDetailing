<template>
	<header class="banner"
	>
		<div class="banner__overlay">
			<div class="wrapper">
				<transition-group name="mode-fade" >

					<article class="banner__content"
				         v-for="{
				            titleMain, titleWhite, text, id
				            } in pages"
							:style="{
									display: currentPage.id == id ? 'block' : 'none'
							}"
				         :key="id + 112"
				    >
                        <div class="banner__header">
                            <h2 class="banner__title banner__title_white"
                                v-if="titleWhite !== ''"
                            >{{titleWhite}}</h2>
                            <h1 class="banner__title banner__title_main"
                                v-if="titleMain !== ''"
                            >{{titleMain}}</h1>
                        </div>

                        <p class="banner__text"
                            v-if="text !== '' && typeof text !== 'Array'"
                        >{{text}}</p>
                        <ul class="banner__list" v-if="Array.isArray(text)">
                            <li class="banner__list-item"
                                v-for="item in text"
                            >
                                {{item}}
                            </li>
                        </ul>


                        <button class="banner__btn">Записаться онлайн</button>
				
				    </article>
				</transition-group>
			</div>
		</div>
		<transition-group name="mode-fade" >
			<img
				 v-for="{img, titleMain, id} in pages"
				 :src="img"
				 :key="titleMain"
				 v-show="currentPage.id === id"
				 :alt="currentPage.id"
				 class="banner__img"
			>
		</transition-group>
		
	</header>
	<div class="pagination">
		<div class="pagination__item"
		     v-for="index in pages.length"
		     :id="index"
		     :class="{
				 'active': index === currentPage.id
		     }"
		     @click="changeIndexPrevent(index)"
		></div>
	</div>
</template>

<script setup>


	const pages = ref([
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Рады приветствовать Вас на сайте нашего детейлинг центра! У нас можно заказать полный комплекс услуг направленных на внешнюю и внутреннию отделку Вашей машины. Гарантируем оперативность, высокое качество, доступную цену!\n",
			service: "main",
			img: "q7AwP7fm4XU.jpg",
			id: 1
		},
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Дарим скидку 30% на полную чистку салона.",
			service: "main",
			img: "IMG_5930.jpg",
			id: 2
		},
	
		{
			titleWhite: "Детейлинг центр",
			titleMain: "ALL STAR DETAILING",
			text: "Рады приветсетейлинг центра! У нас можно заказать полный комплекс услуг направленных на внешнюю и внутреннию отделку Вашей машины. Гарантируем оперативность, высокое качество, доступную цену!\n",
			service: "main",
			img: "IMG_6349.jpg",
			id: 3
		},
	])
	
	const currentPage = ref(pages.value[0])
	let interval = null
    const sliderIndex = ref(1)
    const timeout = 4000


	const changeCurrent = (id) => {
        currentPage.value = pages.value.filter(i => i.id === id)[0]
    }
	
    const changeIndexPrevent = (id) => {
        changeCurrent(id)
        clearInterval(interval)
        interval = initInterval(timeout)
    }

    const initInterval = (timeout) => setInterval(() => {
        changeCurrent(sliderIndex.value)
        if (sliderIndex.value < pages.value.length) {
            sliderIndex.value += 1
        } else {
            sliderIndex.value = 1
        }

    }, timeout)

	
	onMounted(() => {
		interval = initInterval(timeout)
	})
	

</script>

<style scoped lang="scss">
.mode-fade-enter-active, .mode-fade-leave-active {
	transition: opacity .4s cubic-bezier(1, 0.5, 0.8, 1);
}

.mode-fade-enter-from, .mode-fade-leave-to {
	opacity: 0
}
	.banner {
		height: 550px;

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
			height: 100%;
			position: absolute;
			z-index: 1;
		}
	}
	
	.pagination {
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 10px 0;
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