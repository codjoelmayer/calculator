// Result
let results = document.querySelector('#results');
let firstOp = 0;
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
let btnDiv = document.querySelector('#btnDiv');
let btnMul = document.querySelector('#btnMul');
let btnSub = document.querySelector('#btnSub');
let btnAdd = document.querySelector('#btnAdd');
let btnEquals = document.querySelector('#btnEqual');
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
btnAdd.addEventListener('click', (e)=> {
    e.preventDefault();
    selectedOperator('+');
    results.value = "";
}) 
btnEquals.addEventListener('click', (e)=> {
    e.preventDefault();
    let secondOperator = results.value;
    switch(operator) {
        case '+':
            console.log(firstOp);
            results.value = eval(`${firstOp}${operator}${secondOperator}`);
        break;
        default:
            alert("Used of incorrect operator");
        break;
    }
}) 

// Return the first operand values
function firstOperand() {
    firstOp = results.value
    return firstOp;
}
// Return an operator
function selectedOperator(op) {
    firstOperand();
    operator = op;
    return operator;
}
