export default () => {
	const token = ''
	const chatID = 0
	const getUrl = (text) => `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${text}`
	const requestForCall = (form) => {
		const {name, phone, question} = form
		const text = `Клиент оставил заявку: %0AИмя: ${name} %0AНомер телефона: ${phone} %0AВопрос: ${question}`
		const url = getUrl(text)

		return useLazyFetch(url)
	}
	const requestForRegistration = (form) => {
		const {name, phone, question, date, services} = form

		const servicesText = services.map(i => `%0A🛠️${i}`)
		const text = `🚗Клиент записался на услугу🚗: %0A👶Имя: ${name} %0A📱Номер телефона: ${phone} %0A📝Вопрос: ${question}, %0A📅Дата: ${date}%0A%0AУслуги:${servicesText}`

		const url = getUrl(text)

		return useLazyFetch(url)
	}

	return {
		requestForCall,
		requestForRegistration
	}

}