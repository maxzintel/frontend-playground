let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');
let runningEquation = "0";

function handleInput(input) {
  if(result.innerText === "0" && runningEquation === "0") {
    result.innerText = input.target.innerText;
    runningEquation = input.target.innerText;
    console.log(runningEquation);
  } else if(result.innerText === "0" && runningEquation != "0") {
    result.innerText = input.target.innerText;
    runningEquation += input.target.innerText;
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
      result.innerText = "0";
      runningEquation = "0"
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
      result.innerText = "0";
      runningEquation += val;
      console.log(runningEquation)
      break;
    case "=":
      //code
      break;
    default: // input is a number. 
      break;
  };
};

init();