const textarea = document.querySelector('#area');
const allCharacters = document.querySelector('#characters');
const allCharactersNoSpaces = document.querySelector('#characters-no-spaces');
const allWords = document.querySelector('#words');
const allSentences = document.querySelector('#sentences');

const showStatistics = () => {
	const text = textarea.value;
	const numCharacters = text.length;
	const numCharactersNoSpaces = text.replace(/[r\n\ ]/g, '').length;
	const numWords = text.replace(/[r\n\ ]/g, ' ').split(' ').length;
	const numSentences = text.split('.').length;

	if (numCharacters == 0) {
		allCharacters.innerHTML = '';
		allCharactersNoSpaces.innerHTML = '';
		allWords.innerHTML = '';
		allSentences.innerHTML = '';
	} else {
		allCharacters.innerHTML = numCharacters;
		allCharactersNoSpaces.innerHTML = numCharactersNoSpaces;
		allWords.innerHTML = numWords;
		allSentences.innerHTML = numSentences;
	}
};

textarea.addEventListener('input', showStatistics);
