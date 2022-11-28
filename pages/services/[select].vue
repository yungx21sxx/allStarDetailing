<template>
	<div class="services">
		<aside class="services__menu menu">
			<div class="wrapper">
				<div class="menu__header">
					<h2 class="menu__subtitle">Услуги детейлинг центра </h2>
					<h1 class="menu__title">ALL STAR DETAILING</h1>
				</div>
				<nav class="menu__nav">
					<NuxtLink to="/services/all"
					          :class="['menu__link', {
									'active': route.params.select === 'all'
					          }]"
					>Все</NuxtLink>
					<NuxtLink to="/services/salon"
					          :class="['menu__link', {
									'active': route.params.select === 'salon'
					          }]"
					>Салон</NuxtLink>
					<NuxtLink to="/services/body"
					          :class="['menu__link', {
									'active': route.params.select === 'body'
					          }]"
					>Кузов</NuxtLink>
					<NuxtLink to="/services/complexes"
					          :class="['menu__link', {
									'active': route.params.select === 'complexes'
					          }]"
					>Комплексы работ</NuxtLink>
				</nav>
			</div>
		</aside>
		<div class="services__list">
			<div class="wrapper">
				<ServicesList :type="route.params.select"/>
			</div>
		</div>
		
	</div>
	
</template>

<script setup>

	
	const route = useRoute()
	
	
</script>

<style scoped lang="scss">

	.services {
		&__list {
			margin-top: 30px;
		}
		
	}
	
	.menu {
		background: #F7F7F7;
		padding-top: 90px;
		padding-bottom: 30px;
		&__header {
			display: flex;
			align-items: flex-end;
			gap: 25px;
			margin-bottom: 15px;
		}
		
		&__subtitle {
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 38px;
			color: #CC9933;
			letter-spacing: 1.5px;
		}
		
		&__title {
			font-weight: 400;
			font-size: 28px;
			line-height: 38px;
			/* or 134% */
			
			display: flex;
			align-items: center;
			letter-spacing: 1.5px;
		}
		
		&__nav {
			display: flex;
			align-items: center;
			gap: 10px;
		}
		&__link {
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			display: block;
			text-decoration: none;
			border: 2px solid rgba(0,0,0,0);
			border-radius: 7px;
			padding: 5px 12px;
			color: black;
			
			
			
			&.active {
				border: 2px solid #CC9933;
				&:hover {
					color: black !important;
				}
				
			}
			
			&:hover {
				color: #CC9933;
			}
			
			
		}
	}

</style>