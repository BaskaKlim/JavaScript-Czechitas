
let viewer = document.querySelector("#viewer");
let one = document.querySelector("#viewer");

let keys = calculator.querySelector(".calculator__keys")











keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   // Do something
 }
})

const key = e.target
const action = key.dataset.action
if (!action) {
    console.log('number key!')
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'reset') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }


  const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})

function numberValue(reset){

}


function addition(operator, result) {
    let result= numberA + numberB;
   console.log(result);
}



function calculate(opreator,result) {
   
    numberA = document.getElementById("imput1").value;
    numberB = document.getElementById("imput2").value;
    let result = numberA+opreator+numberA;
    document.getElementById(result).value = result;
    return result;
  }

function substraction(numberB, numberB) {
    let result= numberA - numberB;
    console.log(result);
}


function substraction(numberA,numberB) {
    let result= numberA - numberB;
    console.log(result);
}


function multiplication(numberA,numberB) {
    let result= numberA * numberB;
    console.log (result);
}

function devision(numberA,numberB) {
    let result= numberA / numberB;
    console.log(result);
}

function modulo(numberA,numberB) {
    let result = numberA % numberA;
    console.log(result);
}

function reset() {
    document.getElementById("calculator").reset();
  }

