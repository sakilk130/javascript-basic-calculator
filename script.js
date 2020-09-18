const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let nextValue = false;

function numberValue(number) {
  if (nextValue) {
    calculatorDisplay.textContent = number;
    nextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  if (nextValue) return;
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log('currentVAlue:', currentValue);
  }
  nextValue = true;
  operatorValue = operator;

  console.log('firstvalue:', firstValue);
  console.log('OperatorValue:', operatorValue);
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => numberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

function clearAll() {
  firstValue = 0;
  operatorValue = '';
  nextValue = false;
  calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', clearAll);
