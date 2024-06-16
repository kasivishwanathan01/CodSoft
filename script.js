let history = '';
let result = '0';
let currentOperation = null;
let pastCalculations = [];

const historyElement = document.getElementById('history');
const resultElement = document.getElementById('result');
const pastHistoryElement = document.getElementById('pastHistory');

function updateDisplay() {
    historyElement.textContent = history;
    resultElement.textContent = result;
}

function clearDisplay() {
    history = '';
    result = '0';
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (result === '0') {
        result = number.toString();
    } else {
        result += number;
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation) {
        calculate();
    }
    history = result + ' ' + operation;
    result = '0';
    currentOperation = operation;
    updateDisplay();
}

function calculate() {
    if (!currentOperation) return;

    const firstNumber = parseFloat(history.split(' ')[0]);
    const secondNumber = parseFloat(result);
    let calculation;

    switch (currentOperation) {
        case '+':
            calculation = firstNumber + secondNumber;
            break;
        case '-':
            calculation = firstNumber - secondNumber;
            break;
        case '*':
            calculation = firstNumber * secondNumber;
            break;
        case '/':
            calculation = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    result = calculation.toString();
    const calculationString = `${history} ${secondNumber} = ${result}`;
    history += ' ' + secondNumber + ' = ' + result;
    pastCalculations.push(calculationString);
    currentOperation = null;
    updateDisplay();
}

function toggleHistory() {
    if (pastHistoryElement.style.display === 'none') {
        pastHistoryElement.style.display = 'block';
        pastHistoryElement.innerHTML = pastCalculations.join('<br>');
    } else {
        pastHistoryElement.style.display = 'none';
    }
}
