document.addEventListener('DOMContentLoaded', () => {

    const quotes = [
        "Be yourself; everyone else is already taken.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
        "So many books, so little time.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    ];

    const quoteDisplay = document.getElementById('quote');
    const inputBox = document.getElementById('input-box');
    const startButton = document.getElementById('start-button');
    const resultDisplay = document.getElementById('result-div');

    let startTime;
    let currentQuote;

    startButton.addEventListener('click', startTest);
    inputBox.addEventListener('input', checkInput);

    function startTest() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[randomIndex];
        quoteDisplay.textContent = currentQuote;
        inputBox.value = '';
        inputBox.removeAttribute('disabled');
        inputBox.focus();
        resultDisplay.textContent = '';
        startTime = new Date().getTime();
    }

    function checkInput() {
        const typedText = inputBox.value;

        if (typedText === currentQuote) {
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;
            const wordsPerMinute = (typedText.split(' ').length / timeTaken) * 60;
            inputBox.setAttribute('disabled', true);
            resultDisplay.textContent = `You typed at ${wordsPerMinute.toFixed(2)} words per minute`;
        }
    }

});
