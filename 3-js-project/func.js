let result = document.querySelector('.result');
let button = document.querySelectorAll('.button');

function init() {
  button.forEach( (element) => {
    element.addEventListener("click", (event) => {
      result.innerText = event.target.innerText;
    });
  });
};

init();