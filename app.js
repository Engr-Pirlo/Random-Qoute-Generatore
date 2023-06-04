const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

const speechSynth = window.speechSynthesis;
const readBtn = document.getElementById('read-btn');

function speakQuote() {
  const utterance = new SpeechSynthesisUtterance(quoteText.textContent);
  speechSynth.speak(utterance);
}

readBtn.addEventListener('click', speakQuote);



async function getQuote() {
	const response = await fetch('https://api.quotable.io/random');
	const data = await response.json();
	return data.content;
}

async function renderQuote() {
	const quote = await getQuote();
	quoteText.textContent = quote;
}

newQuoteBtn.addEventListener('click', renderQuote);

renderQuote();
