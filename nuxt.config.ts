import vuetify from "vite-plugin-vuetify";


export default defineNuxtConfig({
	css: ["@/assets/main.scss"],
	build: {
		transpile: ["vuetify"],
		analyze: true,
		babel: {
			// envName: server, client, modern
			presets({ envName }) {
				return [
					[
						'@nuxt/babel-preset-app',
						{
							corejs: { version: 3 }
						}
					]
				]
			}
		}
	},
	vite: {
		ssr: {
			noExternal: ["vuetify"],
		},
		define: {
			"process.env.DEBUG": false,
		},

	},
	sitemap: {
		hostname: 'https://all-star-detailing.ru',
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: [
				'/',
			]
		}
	},
	buildModules: [
		['@nuxt-modules/compression', {
			algorithm: 'brotliCompress'
		}]
	],

	modules: [
		'@pinia/nuxt',
		'nuxt-simple-sitemap',
		async (options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
		},

	],

	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				{ rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
				{ rel: 'icon', sizes: "32x32",  type: 'image/png', href: '/favicon-32x32.png' },
				{ rel: 'icon', sizes: "16x16", type: 'image/png', href: '/favicon-16x16.png' },
				{ rel: 'manifest',  href: '/site.webmanifest' },
				{ rel: 'mask-icon', color: "#5bbad5", href: '/safari-pinned-tab.svg' },

			],
			meta: [
				{ name: "msapplication-TileColor", content: "#da532c" },
				{ name: "theme-color", content: "#ffffff"},
				{ charset: 'utf-16' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Мы можем закрыть любую потребность связанную с автомобилем. Подобрать вам автомобиль, сделать страховку по самой приятной цене, выполнить качественный детейлинг комплекс, ну а когда вы захотите его продать, мы также сможем помочь.' },

			],
			title: 'All Star Detailing: Детейлинг центр в СПб'
		},



	}

});
