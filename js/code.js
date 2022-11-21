// Result
let results = document.querySelector('#results');
// Selected Operator
let operator = "";
// Numbers (Buttons)
let btnSeven = document.querySelector('#btnSeven');
let btnEight = document.querySelector('#btnEight');
let btnNine = document.querySelector('#btnNine');
let btnFour = document.querySelector('#btnFour');
let btnFive = document.querySelector('#btnFive');
let btnSix = document.querySelector('#btnSix');
let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');
let btnZero = document.querySelector('#btnZero');
let btnDecimal = document.querySelector('#btnDecimal');
// Operators
let btnDiv = document.querySelector('#btnSeven');
let btnMul = document.querySelector('#btnEight');
let btnSub = document.querySelector('#btnNine');
let btnAdd = document.querySelector('#btnFour');
let btnEquals = document.querySelector('#btnFive');
// Add event listener
btnSeven.addEventListener('click', ()=> {
    results.value += btnSeven.textContent;
})
//Eight
btnEight.addEventListener('click', ()=> {
    results.value += btnEight.textContent;    
})
//Nine
btnNine.addEventListener('click', ()=> {
    results.value += btnNine.textContent;
})
//Four
btnFour.addEventListener('click', ()=> {
    results.value += btnFour.textContent; 
})
//Five
btnFive.addEventListener('click', ()=> {
    results.value += btnFive.textContent;
})
//Six
btnSix.addEventListener('click', ()=> {
    results.value += btnSix.textContent; 
})
//One
btnOne.addEventListener('click', ()=> {
    results.value += btnOne.textContent;
})
//Two
btnTwo.addEventListener('click', ()=> {
    results.value += btnTwo.textContent; 
})
//Three
btnThree.addEventListener('click', ()=> {
    results.value += btnThree.textContent;
})
//Zero
btnZero.addEventListener('click', ()=> {
    results.value += btnZero.textContent;
})
//Decimal point
btnDecimal.addEventListener('click', ()=> {
    results.value += btnDecimal.textContent;
})
// Operators
btnDiv.addEventListener('click', ()=> {
    selectedOperator('/');
}) 
btnMul.addEventListener('click', ()=> {
    selectedOperator('*');    
}) 
btnSub.addEventListener('click', ()=> {
    selectedOperator('-');
}) 
btnAdd.addEventListener('click', ()=> {
    results.value = "";
    console.log(selectedOperator('+'));
}) 
btnEquals.addEventListener('click', ()=> {
    let secondOperator = results.value;
    switch(operator) {
        case '+':
            results.value = eval(`${firstOperand()}${operator}${secondOperator}`);
        break;
        default:
            alert("Used of incorrect operator");
        break;
    }
}) 

// Return the first operand values
function firstOperand() {
    return results.value;
}
// Return an operator
function selectedOperator(op) {
    operator = op;
    return operator;
}
