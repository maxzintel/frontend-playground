let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');
let runningEquation = "0";

// Following functions are just to shorten handleInput.
// There is probably a better way to dynamically update...
// ... the result and runningEq.
function resNew(input) {
  result.innerText = input;
}

function eqNew(input) {
  runningEquation = input;
}

function eqUsed(input) {
  runningEquation += input;
}

function resAfterNum(input) {
  result.innerText += input;
}

function handleInput(input) {
  if(result.innerText === "0" && runningEquation === "0") {
    resNew(input.target.innerText);
    eqNew(input.target.innerText);
    console.log(runningEquation);
  } else if(result.innerText === "0" && runningEquation != "0") {
    resNew(input.target.innerText);
    eqUsed(input.target.innerText);
    console.log(runningEquation);
  } else {
    handleSymbol(input.target.innerText);
  };
}; 

function init() {
  button.forEach( (element) => {
    element.addEventListener("click", (event) => {
      handleInput(event);
    });
  });
};

function handleSymbol(val) {
  switch(val) {
    case "C":
      resNew("0");
      eqNew("0");
      break;
    case "DEL": // Not working yet.
      break;
    case "÷":
      resNew("0");
      eqUsed("/");
      console.log(runningEquation)
      break;
    case "×":
      resNew("0");
      eqUsed("*");
      console.log(runningEquation)
      break;
    case "+":
    case "-":
      resNew("0");
      eqUsed(val);
      console.log(runningEquation)
      break;
    case "=": // Don't use eval.
      resNew(Function('return ' + runningEquation)());
      eqNew(result.innerText);
      console.log(runningEquation);
      break;
    default: // input is an additional digit to last number.
      resAfterNum(val);
      eqUsed(val);
      console.log(runningEquation);
      break;
  };
};

init();