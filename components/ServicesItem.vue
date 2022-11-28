<template>
	<NuxtLink class="service"
	          :to="'/service/' + service.id"
	>
		<div class="service__bg" ref="bg">
			<article class="service__body">
				<div class="service__header">
					<h2 class="service__title">{{service.title}}</h2>
				</div>
				<ul class="service__list">
					<li class="service__text" v-for="promo in service.promoList"
					
					>{{promo}}</li>
				</ul>
				<div class="service__footer">
					<span class="service__text service__time">Время: {{service.time}}</span>
					<var class="service__price">{{service.price}}</var>
				</div>
			</article>
			
			
			
		</div>
	</NuxtLink>
</template>

<script setup>
	const bg = ref(null)
	
	onMounted(() => {
		bg.value.style.backgroundImage = `url(${props.service.img})`
	})
	
	const props = defineProps({
		service: {
			required: true,
			type: Object,
		}
	})

</script>

<style scoped lang="scss">

	.service {
		background: none;
		text-decoration: none;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, .15);
		border-radius: 7px;
		transition: .3s ease;
		&:hover {
			box-shadow: 5px 5px 10px rgba(0, 0, 0, .7);
		}
		&__time {
			letter-spacing: 1.2px;
		}
		&__bg {
			height: 300px;
			background-position: center center;
			background-size: cover;
			border-radius: 7px;
		}
		
		&__body {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			padding: 10px 15px;
			display: flex;
			flex-direction: column;
			border-radius: 7px;
		}
		
		&__title {
			font-style: normal;
			
			font-weight: 400;
			font-size: 22px;
			
			color: white;
		
		}
		
		&__header {
			height: 70px;
			border-bottom: 3px solid #CC9933;
			display: flex;
			align-items: center;
		}
		
		&__list {
			margin-left: 20px;
			margin-top: 15px;
		}
		
		&__text {
			font-style: normal;
			font-weight: 300;
			font-size: 18px;
			line-height: 30px;
			color: #F7F7F7;
		}
		
		&__footer {
			margin-top: auto;
			display: flex;
			justify-content: space-between;
		}
		
		&__price {
			font-style: normal;
			font-weight: 400;
			font-size: 24px;
			line-height: 30px;
			color: #CC9933;
			
		}
		
		
	}

</style>