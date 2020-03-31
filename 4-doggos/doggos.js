const BREEDS_URL = "https://dog.ceo/api/breed/boxer/images/random"; // scream case.
// a const that will never change.

const promise = fetch(BREEDS_URL); // fetch is a way to do AJAX. fetch returns a promise.
// a promise is basically a function you run later. 
// a promise is an object you call .then() on.

promise // when the fetch comes back, it will run this! 
  .then(function(res) {
    const processingPromise = res.json(); // parses the response into something useable. Returns another promise!
    return processingPromise; // return the promise once its done, the next .then chains the new promise to the first.
  })
  .then(function(processedRes) {
    console.log(processedRes);
  });

console.log("this logs first.") // this logs first because we are waiting for the fetch to return before it runs the promise.then() stuff.