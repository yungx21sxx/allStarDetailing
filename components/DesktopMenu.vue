<template>
	<nav class="menu">
		<div class="wrapper menu__content">
			<div class="menu__block">
				<img alt="" class="menu__logo" src="~/assets/img/logo.svg">
				<div class="menu__nav">
					<NuxtLink :class="['menu__link', {
									'active': route.fullPath === '/'
					          }]"
					          to="/"
					>ГЛАВНАЯ
					</NuxtLink>
					<NuxtLink :class="['menu__link', {
									'active': route.fullPath.indexOf('service') > 0
					          }]"
					          to="/services/all">
						УСЛУГИ

					</NuxtLink>
					<NuxtLink :class="['menu__link', {
									'active': route.fullPath === '/clients'
					          }]" class="menu__link"
					          to="/clients"
					>НАШИ РАБОТЫ
					</NuxtLink>
					<NuxtLink :class="['menu__link', {
									'active': route.fullPath === '/contacts'
					          }]" to="/contacts">КОНТАКТЫ
					</NuxtLink>
				</div>
			</div>
			<div class="menu__block menu__block_right">
				<div class="menu__networks">
					<a class="menu__ext-link" href="https://vk.com/allstardetailing">
						<svg class="menu__icon" fill="none" height="32" viewBox="0 0 32 32" width="32"
						     xmlns="http://www.w3.org/2000/svg">
							<path
								 d="M20.911 0H11.088C2.12402 0 -0.000976562 2.125 -0.000976562 11.089V20.912C-0.000976562 29.876 2.12402 32.001 11.088 32.001H20.911C29.875 32.001 32 29.876 32 20.912V11.089C32 2.125 29.854 0 20.911 0ZM25.833 22.828H23.51C22.63 22.828 22.359 22.13 20.776 20.526C19.401 19.193 18.792 19.016 18.453 19.016C17.974 19.016 17.838 19.151 17.838 19.808V21.907C17.838 22.47 17.661 22.808 16.171 22.808C13.707 22.808 10.973 21.318 9.05602 18.542C6.16502 14.474 5.37402 11.427 5.37402 10.797C5.37402 10.458 5.50902 10.141 6.16002 10.141H8.48802C9.07702 10.141 9.30102 10.412 9.53002 11.042C10.681 14.365 12.598 17.276 13.389 17.276C13.681 17.276 13.816 17.141 13.816 16.396V12.964C13.727 11.381 12.894 11.245 12.894 10.683C12.894 10.412 13.118 10.141 13.477 10.141H17.138C17.633 10.141 17.815 10.412 17.815 10.995V15.625C17.815 16.125 18.039 16.302 18.174 16.302C18.466 16.302 18.716 16.125 19.257 15.583C20.929 13.708 22.127 10.817 22.127 10.817C22.283 10.478 22.554 10.161 23.143 10.161H25.471C26.169 10.161 26.325 10.52 26.169 11.02C25.877 12.374 23.028 16.395 23.028 16.395C22.783 16.801 22.689 16.978 23.028 17.431C23.278 17.77 24.091 18.473 24.632 19.103C25.627 20.233 26.392 21.181 26.596 21.837C26.825 22.488 26.487 22.827 25.83 22.827L25.833 22.828Z"
								 fill="black"/>
						</svg>
					</a>
					<a class="menu__ext-link" href="https://instagram.com/allstardetailng?igshid=YmMyMTA2M2Y=">
						<svg class="menu__icon" fill="none" height="32" viewBox="0 0 32 32" width="32"
						     xmlns="http://www.w3.org/2000/svg">
							<path
								 d="M15.9957 10.6642C13.0578 10.6642 10.6602 13.0618 10.6602 15.9997C10.6602 18.9376 13.0578 21.3352 15.9957 21.3352C18.9336 21.3352 21.3312 18.9376 21.3312 15.9997C21.3312 13.0618 18.9336 10.6642 15.9957 10.6642ZM31.9982 15.9997C31.9982 13.7903 32.0182 11.6008 31.8941 9.39536C31.7701 6.83368 31.1857 4.56019 29.3125 2.68695C27.4352 0.809721 25.1657 0.22934 22.604 0.105259C20.3946 -0.0188226 18.2052 0.00119056 15.9997 0.00119056C13.7902 0.00119056 11.6008 -0.0188226 9.39536 0.105259C6.83368 0.22934 4.56019 0.813724 2.68696 2.68695C0.809722 4.56419 0.22934 6.83368 0.105259 9.39536C-0.0188226 11.6048 0.00119056 13.7943 0.00119056 15.9997C0.00119056 18.2052 -0.0188226 20.3986 0.105259 22.604C0.22934 25.1657 0.813725 27.4392 2.68696 29.3124C4.56419 31.1897 6.83368 31.7701 9.39536 31.8941C11.6048 32.0182 13.7943 31.9982 15.9997 31.9982C18.2092 31.9982 20.3986 32.0182 22.604 31.8941C25.1657 31.7701 27.4392 31.1857 29.3125 29.3124C31.1897 27.4352 31.7701 25.1657 31.8941 22.604C32.0222 20.3986 31.9982 18.2092 31.9982 15.9997ZM15.9957 24.2091C11.4527 24.2091 7.78631 20.5427 7.78631 15.9997C7.78631 11.4567 11.4527 7.79031 15.9957 7.79031C20.5387 7.79031 24.2051 11.4567 24.2051 15.9997C24.2051 20.5427 20.5387 24.2091 15.9957 24.2091ZM24.5413 9.37135C23.4806 9.37135 22.6241 8.51478 22.6241 7.45409C22.6241 6.39339 23.4806 5.53683 24.5413 5.53683C25.602 5.53683 26.4586 6.39339 26.4586 7.45409C26.4589 7.70595 26.4095 7.95541 26.3133 8.18816C26.217 8.42092 26.0758 8.6324 25.8977 8.8105C25.7196 8.9886 25.5082 9.12981 25.2754 9.22605C25.0426 9.32229 24.7932 9.37166 24.5413 9.37135Z"
								 fill="black"/>
						</svg>
					</a>


				</div>
				<button class="menu__button" @click="modal.openModal('')">
					Записаться
				</button>
			</div>

		</div>

	</nav>
	<div class="overlay"></div>

</template>

<script setup>

import {useModalStore} from "~/store/modalStore";

const route = useRoute()

const modal = useModalStore()

</script>

<style lang="scss" scoped>
.overlay {
	height: 61px;
}

.menu {
	padding: 10px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
	//border-bottom: 1px solid #BEBEBE;
	position: fixed;
	width: 100%;
	z-index: 20;
	height: 61px;

	&__ext-link {
		margin: 0;
		padding: 0;
		height: fit-content;
		line-height: 1;
	}

	&__logo {
		width: 50px;
	}

	&__button {
		padding: 7px 10px;
		border: 2px solid #CC9933;
		border-radius: 7px;
		background: none;
		cursor: pointer;
		color: #CC9933;
		font-weight: 500;
		transition: .2s ease-in-out;

		&:hover {
			color: white;
			background: #CC9933;
		}

	}

	&__content, &__block, &__networks, &__nav {
		display: flex;
		align-items: center;
	}

	&__nav {
		position: relative;
		margin-left: 10px;
		top: 5px;
	}

	&__content {
		justify-content: space-between;
	}

	&__block_right {
		gap: 40px;
	}

	&__networks {
		gap: 20px;
	}

	&__icon {
		width: 25px;
		cursor: pointer;

		path {
			transition: .2s ease-in-out;
		}

		&:hover {
			path {
				fill: #CC9933;
			}
		}
	}


	&__link {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		border-bottom: 3px solid rgba(0, 0, 0, 0);
		text-decoration: none;
		color: black;
		display: block;
		margin-left: 36px;
		transition: .2s ease-in-out;
		padding-bottom: 2px;

		&.active {
			border-bottom: 3px solid #CC9933;
		}

		&_dropdown {
			display: flex;
			align-items: center;
			gap: 7px;
		}

		&:not(.active):hover {
			color: #CC9933;
		}

	}
}

</style>