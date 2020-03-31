const BREEDS_URL = "https://dog.ceo/api/breed/boxer/images/random"; // scream case.
// a const that will never change.

const promise = fetch(BREEDS_URL); // fetch is a way to do AJAX. fetch returns a promise.
// a promise is basically a function you run later. 
// a promise is an object you call .then() on.
const doggos = document.querySelector(".doggos");

promise // when the fetch comes back, it will run this! 
  .then(function(res) {
    const processingPromise = res.json(); // parses the response into something useable. Returns another promise!
    return processingPromise; // return the promise once its done, the next .then chains the new promise to the first.
  })
  .then(function(processedRes) {
    const img = document.createElement("img"); // creates an img tag
    img.src = processedRes.message;
    img.alt = "it a cute pup i swear"
    doggos.appendChild(img); // appends the image tag and source to the div with doggo class.
  });

console.log("this logs first.") // this logs first because we are waiting for the fetch to return before it runs the promise.then() stuff.