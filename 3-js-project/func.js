let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');
let prevOp;
const zero = "0";

function handleInput(input) {
  result.innerText += input.target.innerText;
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
      //code
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
      //code
      break;
    case "=":
      //code
      break;
  };
};

init();