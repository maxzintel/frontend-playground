const name = 'Max';

// Below two examples produce the same output.
const sentence = "Hello " + name + ". " + "How are you?";
const sentenceTemplate = `Hello ${name}. How are you?`; // Use template strings instead! Newer. More fun. Exciting.
// Need the backticks here.

console.log(sentence);
console.log(sentenceTemplate);
