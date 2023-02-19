import {createVuetify} from "vuetify";
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'
import {
	VBtn,
	VCard,
	VCardText,
	VCardTitle,
	VCarousel, VCarouselItem, VDialog,
	VImg, VLazy, VParallax, VSelect,
	VTextarea,
	VTextField
} from "vuetify/components";

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		ssr: true,
		theme: {
			defaultTheme: 'light',
		},
		components: [
			VBtn,
			VCard,
			VTextField,
			VTextarea,
			VCardText,
			VCardTitle,
			VImg,
			VCarousel,
			VCarouselItem,
			VDialog,
			VSelect,
			VLazy,
			VParallax
		],
		directives: [],
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi,
			},
		},
	})
	app.vueApp.use(vuetify);
})