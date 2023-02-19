import { defineStore } from 'pinia'
import {th} from "vuetify/locale";


export const useModalStore = defineStore({
	id: 'modal-store',
	state: () => ({
		isOpen: false,
		service: ""
	}),
	actions: {
		openModal(serviceName) {
			this.isOpen = true;
			this.service = serviceName
		},
		closeModal() {
			this.isOpen = false;
			this.service = ""
		}
	},

})