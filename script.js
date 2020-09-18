const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function numberValue(number) {
  //calculatorDisplay.textContent = number;
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === '0' ? number : displayValue + number;
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => numberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => numberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => numberValue(inputBtn.value));
  }
});
