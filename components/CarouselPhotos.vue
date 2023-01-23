<template>
    <div class="carousel">
	    <div class="carousel__container">
		    <transition-group name="mode-fade" >
			    <img
				     v-for="photo in indexedPhotoList"
				     :src="photo.src"
				     :key="photo.id"
				     v-show="currentPhoto.id === photo.id"
				     :alt="photo.src"
				     class="carousel__img"
			    >
		    </transition-group>
	    </div>

        <div class="carousel__pagination pagination"
             v-if="indexedPhotoList.length > 1"
        >
            <div class="pagination__item"
                 v-for="index in indexedPhotoList.length"
                 :id="index"
                 :class="{
				      'active': index === currentPhoto.id
		     }"
                 @click="changeIndexPrevent(index)"
            ></div>
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


    const currentPhoto = ref(indexedPhotoList[0])
    let interval = null
    const sliderIndex = ref(1)
    const timeout = 4000



    const changeCurrent = (id) => {
        currentPhoto.value = indexedPhotoList.filter(i => i.id === id)[0]
    }

    const changeIndexPrevent = (id) => {
        changeCurrent(id)
        clearInterval(interval)
        interval = initInterval(timeout)
    }

    const initInterval = (timeout) => setInterval(() => {
        changeCurrent(sliderIndex.value)
        if (sliderIndex.value < indexedPhotoList.length) {
            sliderIndex.value += 1
        } else {
            sliderIndex.value = 1
        }
    }, timeout)


    onMounted(() => {
	    interval = initInterval(timeout)
    })


</script>

<style lang="scss" scoped>
	.mode-fade-enter-active, .mode-fade-leave-active {
		transition: opacity .4s ease-in-out;
	}

	.mode-fade-enter-from, .mode-fade-leave-to {
		opacity: 0
	}


	@media screen and (max-width: 900px) {
		.carousel {
			&__container {
					height: 500px !important;
					width: 100% !important;
					max-width: 100% !important;
					//min-width: 400px;
					object-fit: cover;
			}
		}
	}

	@media screen and (max-width: 600px){
		.carousel {
			&__container  {
				max-width: 100% !important;
				width: 100% !important;
				height: 400px !important;
				margin-top: 0 !important;
				object-fit: cover;
			}
		}
	}


	.carousel {
	   display: flex;
		flex-direction: column;
		justify-content: center;



		&__container {
			position: relative;
			height: 401px;
			width: 360px;
		}

		&__img {
			position: absolute;
			object-position: center;
			width: 100%;
			height: 100%;
			object-fit: cover;

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