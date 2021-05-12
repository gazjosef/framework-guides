import 'core-js/stable'; // Loads all language features
import sum from '../sum';

console.log(sum(2, 4)) // Output: 6

const greet = (name) => console.log(`Hello, ${name}`);

greet('Jon Snow');