<template>
	<div class="carousel">
		<div class="carousel__container">
			<v-carousel
				 cycle
				 color="#CC9933"
				 height="100%"
				 :show-arrows="false"
				 :hide-delimiters="indexedPhotoList.length < 2"
			>
				<v-carousel-item
					 v-for="photo in indexedPhotoList"
					 :key="photo.id"
					 :src="photo.src"
					 cover
				></v-carousel-item>

			</v-carousel>
		</div>


	</div>

</template>

<script setup>
const props = defineProps({
	photos: {
		type: Array,
		required: true
	}
})

const indexedPhotoList = props.photos.map((src, index) => {
	return {
		src: src,
		id: index + 1
	}
})


</script>

<style lang="scss" scoped>


@media screen and (max-width: 900px) {
	.carousel {
		margin-top: 0 !important;

		&__container {
			height: 500px !important;
			width: 100% !important;
			max-width: 100% !important;
			//min-width: 400px;
			object-fit: cover;
		}
	}
}

@media screen and (max-width: 600px) {
	.carousel {
		margin-top: 0 !important;

		&__container {
			max-width: 100% !important;
			width: 100% !important;
			height: 400px !important;
			margin-top: 0 !important;
			object-fit: cover;

		}
	}
}


.carousel {
	margin-top: 47px;

	&__container {
		height: 401px;
		width: 460px;
	}

}


</style>