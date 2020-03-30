let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');
let prevOp;
const zero = "0";

function init() {
  button.forEach( (element) => {
    element.addEventListener("click", (event) => {
      result.innerText = event.target.innerText;
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