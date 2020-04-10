const form = document.querySelector('form');
let { hash } = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
	document.querySelector('.message-generator').classList.add('hide');
	document.querySelector('.message').innerText = message;
	document.querySelector('.message-container').classList.remove('hide');
}
form.addEventListener('submit', (e) => {
	e.preventDefault();
	document.querySelector('.message-generator').classList.add('hide');
	document.querySelector('.share').classList.remove('hide');

	const input = document.querySelector('#message-input');
	const link = document.querySelector('#link-input');
	const encrypted = btoa(input.value);

	link.value = `${window.location}#${encrypted}`;
	link.select();
	document.execCommand('copy');
	// document.querySelector('.message-container').classList.remove('hide');
});
