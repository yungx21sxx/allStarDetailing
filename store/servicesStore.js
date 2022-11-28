import { defineStore } from 'pinia'


export const useServiceStore = defineStore({
	id: 'service-store',
	state() {
		return {
			services: [
				{
					title: "Тонировка",
					id: "toner",
					promoList: [
						"Красота",
						"Защита салона от салона от нагрева и выгарния летом",
						"Меньше устают глаза",
					],
					
					time: "1 день",
					type: "body",
					price: "3 000 ₽",
					description: "Основные преимущества тонированных стёкол: <br/> 1) Красота - Автомобиль с тонированными стёклами выглядит эстетично более красивым <br/>2) Защита - В летний период салон автомобиля будет защищен от выгорания <br/>3) Безопасность - Правильная и профессиональная тонировка не мешает а наоборот помогает. Глаза меньше напрягаются, в случае ДТП стёкла останутся приклены к плёнке, а если вы оставили что то ценное на задних сидениях, ни кто этого не сможет увидеть. <br/>4) Расход материалов - В летний период тонировка позволяет меньше использовать кондиционер. Зимой же тонированный автомобиль гораздо медленней отдаёт тепло.",
					img: "/fHO8NhRXr4M.jpg"
				},
				{
					title: "Нанесение керамики или жидкого стекла",
					id: "ceramics",
					promoList: [
						"Защищает ЛКП",
						"Придает блеск"
					],
					time: "1 день",
					type: "body",
					price: "от 10 000 ₽",
					description: "Керамика или жидкое стекло — особый состав, который образует на поверхности машины защитный прочный слой. Нанесение такого средства улучшает эксплуатационные качества ЛКП и делает его внешний вид более привлекательным.",
					img: "/LxMT-QGv-NE-min.jpg"
				},
				{
					title: "Трёхфазная мойка",
					id: "wash",
					promoList: [
						"Чательная мойка кузова",
						"Покрытие воском"
					],
					time: "2 часа",
					type: "body",
					price: "от 1 000 ₽",
					description: "Трехфазная мойка это самый правильной способ мойки автомобиля. Обработка кузова осуществляется в три этапа - предварительная мойка, основная мойка и консервация. Задача предварительной мойки - удаление грубых загрязнений. Задача основной мойки - удаление остаточных статических загрязнений. После прохождения этих этапов автомобиль покрывают консервантом (жидкий воск) и сушат",
					img: "/2JN0Y10gjp0-min.jpg"
				},
				{
					title: "Базовая полировка",
					id: "base-polish",
					promoList: [
						"Устрание царапин",
						"Востановление блеска",
						"Полировка фар"
					],
					time: "3 часа",
					type: "body",
					price: "от 12 000 ₽",
					description: "Полировка- это деликатное снятие слоя лака с поверхности.  В процессе эксплуатации любой автомобиль подвержен повреждению лакокрасочного покрытия(ЛКП). Большинство производителей авто наносят около 140микрон ЛКП в том числе 40-60микрон лака. Благодаря грамотной полировке возможно убрать царапины и восстановить блеск и привлекательный внешний вид автомобилю. Полировка убирает около 5микрон лака тем самым выравнивает поверхность с уровнем глубины царапин.  Полировка фар помимо внешнего эффекта так же скажется на видимость в ночное время суток.  Так же возможна полировка деревянных элементов салона.\n" +
						"\n",
					img: "/1L3BnIoVSTQ-min.jpg"
				},
				{
					title: "Глубокая полировка в 3 этапа",
					id: "deep-polish",
					promoList: [
						"Устрание царапин",
						"Востановление блеска",
						"Полировка фар"
					],
					time: "5 часов",
					type: "body",
					price: "от 20 000 ₽",
					description: "Полировка- это деликатное снятие слоя лака с поверхности.  В процессе эксплуатации любой автомобиль подвержен повреждению лакокрасочного покрытия(ЛКП). Большинство производителей авто наносят около 140микрон ЛКП в том числе 40-60микрон лака. Благодаря грамотной полировке возможно убрать царапины и восстановить блеск и привлекательный внешний вид автомобилю. Полировка убирает около 5микрон лака тем самым выравнивает поверхность с уровнем глубины царапин.  Полировка фар помимо внешнего эффекта так же скажется на видимость в ночное время суток.  Так же возможна полировка деревянных элементов салона.",
					img: "/1BPk56L8yk8-min.jpg"
				},
				{
					title: "Химчистка салона авто",
					id: "dry-salon",
					promoList: [
						"Глубокая очистка всех поверхностей салона",
						"Чистка под снимаемыми элементами (сиденья, накладки)"
					],
					time: "5 часов",
					type: "salon",
					price: "от 8 000 ₽",
					description: "Химчистка автомобиля - это процесс глубокой очистки всех поверхностей от различных загрязнений, пятен, пыли, жира и частиц пищи при помощи специальной нейтральной химии и инструментов  Возможна химчистка как со снятием большинства элементов салона(таких как сидения, пластиковые накладки и деревянные элементы), так и более поверхностная с фокусировкой на конкретные элементы по запросу владельца авто.",
					img: "/ur-tuRtlVuk-min.jpg"
				},
				{
					title: "Оклейка плёнкой",
					id: "film-pasting",
					promoList: [
						"Защита заводской краски",
						"Оклайка всего кузова либо отдельных элементов",
						"Поможем с подбором пленки",
					],
					time: "1 день",
					type: "body",
					price: "от 8 000 ₽",
					description: "Бронепленка — это прозрачное или цветное покрытие, которое наклеивается на весь кузов или его отдельные элементы, а также на светотехнику автомобиля для защиты от царапин и сколов. Разумеется, до определенного предела. «Поранить» покрытие могут не только острые предметы. Если долго не смывать с пленки следы жизнедеятельности птиц и «кляксы» от разбившихся насекомых, они тоже способны повредить защитное покрытие. Что действительно может бронепленка, так это продлить срок, в течение которого ЛКП автомобиля при правильном уходе сохранит свой изначальный блеск и качество. На рынке присутствуют два вида бронепленки: Виниловая и Полиуретановая. Мы поможем подобрать плёнку по вашему вкусу и потребностям",
					img: "/5-G24ak6p4Y-min.jpg"
				},
				{
					title: "Оклейка фар бронеплёнкой",
					id: "light-armor",
					promoList: [
						"Защита",
						"Тонировка"
					],
					time: "1 день",
					type: "body",
					price: "4 000 ₽",
					description: "Чистые и прозрачные фары это не только красиво, но и безопасно.",
					img: "/HSvzU9UHSyM-min.jpg"
				},
				{
					title: "Шумоизоляция и виброизоляция",
					id: "noise-isalation",
					promoList: [
						"Делает вождение комфортнее",
						"Акустика при прослушивании музыки более выразительная",
						"Защита кузова от коррозии",
					],
					time: "1 день",
					type: "salon",
					price: "3 000 ₽",
					description: "Шумоизоляция и виброизоляция автомобиля это специальный процесс, который позволяет улучшить ощущения от вождения автомобиля, прослушивания музыки(акустика становится более выразительной) а так же помогает защитить ваш автомобиль от коррозии.",
					img: "/87sRZXqzPfA-min.jpg"
				},
	
			
			
			],
			photos: {
				all: {
				
				}
			},
			modal: {
				isOpen: false,
				service: "",
				type: "",
			}
		}
	},
	actions: {
		find(id) {
			return this.services.filter(i => i.id === id)[0]
		},
		openModal(serviceName, type = 'service') {
			this.modal = {
				isOpen: true,
				service: serviceName,
				type,
			}
		},
		
		closeModal() {
			this.modal = {isOpen: false, service: '', type: ""}
		}
	},
	getters: {
		all: state => state.services,
		body: state => state.services.filter(i => i.type === 'body'),
		salon: state => state.services.filter(i => i.type === 'salon'),
		complexes: state => state.services.filter(i => i.type === 'complexes')
	},
})