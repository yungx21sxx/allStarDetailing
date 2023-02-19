<template>
	<v-text-field
		 ref="phoneInput"
		 v-model="model"
		 color="#c93"
		 density="compact"
		 label="Номер телефона"
		 variant="outlined"
	></v-text-field>

</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: ''
	}
})
const phoneInput = ref(null)

const emit = defineEmits(['update:modelValue'])

const model = computed({
	get() {
		return props.modelValue
	},

	set(value) {
		return emit('update:modelValue', value)
	}
})

//get phone input node


onMounted(() => {


	var getInputNumbersValue = function (input) {
		// Return stripped input value — just numbers
		return input.value.replace(/\D/g, '');
	}

	var onPhonePaste = function (e) {
		var input = e.target,
			 inputNumbersValue = getInputNumbersValue(input);
		var pasted = e.clipboardData || window.clipboardData;
		if (pasted) {
			var pastedText = pasted.getData('Text');
			if (/\D/g.test(pastedText)) {
				// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
				// formatting will be in onPhoneInput handler
				input.value = inputNumbersValue;

			}
		}
	}

	var onPhoneInput = function (e) {
		var input = e.target,
			 inputNumbersValue = getInputNumbersValue(input),
			 selectionStart = input.selectionStart,
			 formattedInputValue = "";

		if (!inputNumbersValue) {
			return input.value = "";
		}

		if (input.value.length != selectionStart) {
			// Editing in the middle of input, not last symbol
			if (e.data && /\D/g.test(e.data)) {
				// Attempt to input non-numeric symbol
				input.value = inputNumbersValue;
			}
			return;
		}

		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
			var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
			formattedInputValue = input.value = firstSymbols + " ";
			if (inputNumbersValue.length > 1) {
				formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
		}
		input.value = formattedInputValue;
	}
	var onPhoneKeyDown = function (e) {
		// Clear input after remove last symbol
		var inputValue = e.target.value.replace(/\D/g, '');
		if (e.keyCode == 8 && inputValue.length == 1) {
			e.target.value = "";
		}
	}

	phoneInput.value.addEventListener('keydown', onPhoneKeyDown);
	phoneInput.value.addEventListener('input', onPhoneInput, false);
	phoneInput.value.addEventListener('paste', onPhonePaste, false);

})

</script>

<style lang="scss" scoped>

.phone-input {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 3px;

	background: #F7F7F7;
	border: 1px solid #C5C5C5;
	border-radius: 7px;

	input {
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		background: none;
		padding-left: 9px;
		outline: none;
	}

	.line {
		height: 100%;
		width: 1px;
		background: #D9D9D9;
	}

	svg {
		height: 20px;
		margin: 0 5px;

	}
}

</style>