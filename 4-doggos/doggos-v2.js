const BREEDS_URL = "https://dog.ceo/api/breed/boxer/images/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(BREEDS_URL);
  promise
  .then(function(res) {
    const processingPromise = res.json();
    return processingPromise;
  })
  .then(function(processedRes) {
    const img = document.createElement("img");
    img.src = processedRes.message;
    img.alt = "it a cute pup i swear"
    doggos.appendChild(img);
  });

}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);