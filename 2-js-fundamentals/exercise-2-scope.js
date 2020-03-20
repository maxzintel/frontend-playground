const A = "A"; // cannot be changed.
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // outside the if, not declared outside the if, thus will not work
  console.log(H); // works
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E); // 2 and A three times.
console.log(G); // Ref Error

doStuff("B"); // Logs "B", 
console.log(B); // Ref Error
console.log(C); // Ref Error
console.log(F); // works

