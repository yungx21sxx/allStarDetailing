<template>
	<NuxtLink class="service"
	          :to="'/service/' + service.id"
	>
		<v-img
			 cover
			 :src="props.service.img"
			 :alt="props.service.title"
			 class="service__bg"
		>
			<article class="service__body">
				<div class="service__header">
					<h2 class="service__title">{{service.title}}</h2>
				</div>
				<ul class="service__list">
					<li class="service__text" v-for="promo in service.promoList"
					>{{promo}}</li>
				</ul>
				<div class="service__footer">
					<span class="service__time">Время: {{service.time}}</span>
					<span class="service__price">{{service.price}}</span>
				</div>
			</article>
		</v-img>
	</NuxtLink>
</template>

<script setup>

	const props = defineProps({
		service: {
			required: true,
			type: Object,
		}
	})

</script>

<style scoped lang="scss">


@media screen and (max-width: 900px) {
	.service {

		&__price {
			font-size: 1rem !important;
		}

		&__text {
			font-size: .9rem !important;
			line-height: 20px !important;
		}


		&__bg {
			height: 225px !important;
		}

	}


}

	.service {
		background: none;
		text-decoration: none;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);


		transition: .3s ease;
		border-radius: 5px;



		&:hover {
			box-shadow: 5px 5px 10px rgba(0, 0, 0, .7);
		}
		&__time {
			letter-spacing: 1.2px;
			font-style: normal;
			font-weight: 300;
			font-size: 0.8rem;
			color: #F7F7F7;
			position: relative;
			bottom: 3px;
		}
		&__bg {
			height: 260px;
			background-position: center center;
			background-size: cover;
			border-radius: 5px;
		}
		
		&__body {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.7);
			//backdrop-filter: blur(1px);
			padding: 10px 15px;
			display: flex;
			flex-direction: column;
			border-radius: 7px;
			//font-size: 10rem;
		}
		
		&__title {
			font-style: normal;
			
			font-weight: 500;
			font-size: 1rem;
			
			color: white;
		
		}
		
		&__header {
			height: 61px;
			border-bottom: 2px solid #CC9933;
			display: flex;
			align-items: center;
		}
		
		&__list {
			margin-left: 20px;
			margin-top: 10px;
		}
		
		&__text {
			font-style: normal;
			font-weight: 300;
			font-size: .9rem;
			line-height: 23px;
			color: #F7F7F7;
		}
		
		&__footer {
			margin-top: auto;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
		
		&__price {
			font-style: normal;
			font-weight: 400;
			font-size: 1.2rem;
			color: #CC9933;
			
		}
		
		
	}

</style>