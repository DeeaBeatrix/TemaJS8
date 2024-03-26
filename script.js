const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const multiplierButton = document.querySelector('.multiplier-button');
const divideButton = document.querySelector('.divide-button');
const helpButton = document.querySelector('.help-button');
const resetButton = document.querySelector('.reset-button');
const numberClick = document.querySelector('.number-click');
const calculatorNumber = document.querySelector('.calculator-number');

// Varianta 1
// console.log(typeof calculatorNumber.innerText)

// const addOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) + 1;
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) -1;
// };

// minusButton.addEventListener('click', minusOne);

// Varianta 2
// let number = 0;

// const addOne = () => {
//     number++; //number += 10 sau cat si ce vrei tu;
//     calculatorNumber.innerText = number;

//     if (number >= 5) {
//         calculatorNumber.style.color = 'green';
//     }

//     if( number>= -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     number--;
//     calculatorNumber.innerText = number;

//     if(number <= -5) {
//         calculatorNumber.style.color = 'red';
//     }
//     if( number>= -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// minusButton.addEventListener('click', minusOne);

// Varianta 3
let number = 0;
let clickNumber = 0;

const updateCalculatorNumber = () => {
    calculatorNumber.innerText = number;

    if (number >= 5) {
        calculatorNumber.style.color = 'green';
    }

    if( number>= -5 && number < 5) {
        calculatorNumber.style.color = 'black';
    }
    if (number >= 10) {
        calculatorNumber.style.fontSize = '80px';
    }

    if (number < 10) {
        calculatorNumber.style.fontSize = '52px';
    }

};

const addOne = () => {
    number++; 
    updateCalculatorNumber();
};

plusButton.addEventListener('click', addOne);

const minusOne = () => {
    number--;
    updateCalculatorNumber();
};

minusButton.addEventListener('click', minusOne);

const multiplierOne = () => {
    number = number * 2;
    updateCalculatorNumber();
};

multiplierButton.addEventListener('click', multiplierOne);

const divideOne = () => {
    number = number / 2;
    updateCalculatorNumber();
};

divideButton.addEventListener('click', divideOne);

const helpOne = () => {
    helpButton.innerText = 'Instructiuni de folosire';
};

helpButton.addEventListener('click', helpOne);

const resetOne = () => {
    number = 0;
    updateCalculatorNumber();
    clickNumber++;
    numberClick.innerText = clickNumber;
 };

resetButton.addEventListener('click', resetOne);


// 1. de completat functionalitatea pentru butoanele de inmultire si impartire - DONE
// 2. undeva in dreapta jos pe ecran sa apara un buton de help care odata apasat sa afiseze un alert 
// cu instructiuni de folosire al calculatorului - DONE
// 3. daca cifra din calculator este mai mare decat 10 atunci textul din 
// calculator sa aiba un font size mai mare ( cand scadeti sub 10 sa revina la ce am pus noi ) - DONE
// 4. de adaugat buton de reset (odata apasat sa reseteze cifra la zero )
// 5. undeva pe ecran sa apara numarul de resetari ale calculatorului 
// "Calculatorul a fost resetat de X ori"