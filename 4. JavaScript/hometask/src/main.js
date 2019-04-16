import { Prompts } from './prompt/prompts';
const checkWord = require('check-word')('en');

export class Application {
	async init() {
		const val = await Prompts.getValues();
		val.action === 'encrypt' ? this.encode(val) : this.decode(val);
	}

	encode(val) {
		const { text, shift } = val;
		const str = text.toLowerCase();
		let cipher = '';

		for (let i = 0; i < str.length; i++) {
			const code = str.charCodeAt(i);

			if (code >= 97 && code <= 122) {
				let sum = code + shift;
				// ASCII code: a(97)...z(122)
				if (sum > 122) {
					sum = sum - 26;
				}
				cipher += String.fromCharCode(sum);
			} else {
				cipher += String.fromCharCode(code);
			}
		}

		console.log(cipher);
	}

	decode(val) {
		const { text } = val;
		const sentence = text.toLowerCase();

		// Check if input contains only letters and spaces
		const regex = /^[a-z][a-z\s]*$/;

		if (!regex.test(sentence)) {
			console.log('Bad input. I accept only English letters and spaces!');
			return;
		}

		const words = sentence.split(' ');
		let decrypted = [];

		for (let i = 0; i < words.length; i++) {
			const word = words[i];

			for (let shift = 0; shift <= 27; shift++) {
				if (shift === 27) {
					console.log('Unable to decode this  ¯\\_(ツ)_/¯');
					return;
				}

				let str = '';

				for (let k = 0; k < word.length; k++) {
					const code = word.charCodeAt(k);
					let sum = code + shift;

					if (sum > 122) {
						sum = sum - 26;
					}

					str += String.fromCharCode(sum);
				}

				// Check if the word exists
				// Exit the loop if true
				if (checkWord.check(str)) {
					decrypted.push(str);
					shift = 99;
				}
			}
		}

		console.log(decrypted.join(' '));
	}
}
